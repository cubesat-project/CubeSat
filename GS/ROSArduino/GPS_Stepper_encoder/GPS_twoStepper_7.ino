
#include <ros.h>
#include <std_msgs/Int16.h>

#include <AccelStepper.h>
#include <SPI.h>

//Chip Selects
#define AZIMUTH 6
#define ELEVATION 7

//Define stepper motor connections
#define MS11 23
#define MS12 25
#define MS13 27

#define MS21 22
#define MS22 24
#define MS23 26

#define dirPin1 2
#define stepPin1 3
#define dirPin2 4
#define stepPin2 5
int angle1 = 0;
int angle2 = 0;
//Create stepper object
//motor_1 az
AccelStepper stepper1(1, stepPin1, dirPin1); //motor interface type must be set to 1 when using a driver.
//set the variable
AccelStepper stepper2(1, stepPin2, dirPin2);
ros::NodeHandle  nh; //Next, we need to instantiate the node handle, which allows our
//program to create publishers and subscribers.
//The node handle also takes care of serial port communications.
//int findData();
float zeroEncoder(int data);
void parseBuffer(int CS);
float deg2rad(float angle) {
  return angle * 0.01745329;
}

void stepper_cd1( const std_msgs::Int16& cmd_msg) {

  angle1 = cmd_msg.data / 1.8 * 16; //set speed of stepper
  // stepper1.moveTo(angle1);
}
void stepper_cd2( const std_msgs::Int16& cmd_msg) {
  if (angle2 < 0)
  {
    angle1 = 0;
    angle2 = 0;
  }
  else
    angle2 = cmd_msg.data / 1.8 * 16 * 160; //set speed of stepper
  // stepper2.moveTo(angle2);

}

ros::Subscriber<std_msgs::Int16> sub1("motor_1", stepper_cd1);
ros::Subscriber<std_msgs::Int16> sub2("motor_2", stepper_cd2);

float az_offset, el_offset;
float response[2];
float az_angle, el_angle, el_prev_angle, true_el_angle; //true_el_angle is inclusive of the 160:1 gearbox
int dataAZ, dataEL;

void setup()
{
  pinMode(AZIMUTH, OUTPUT);
  pinMode(ELEVATION, OUTPUT);
  digitalWrite(AZIMUTH, HIGH);
  digitalWrite(ELEVATION, HIGH);
  SPI.begin();
  SPI.setBitOrder(MSBFIRST);
  SPI.setDataMode(SPI_MODE0);
  SPI.setClockDivider(SPI_CLOCK_DIV32);
  // Serial.begin(9600);
  //Serial.flush();
  delay(10);
  for (int i = 0; i <= 2; i++) {
    digitalWrite(AZIMUTH, LOW);
    delay(5);
    response[i] = SPI.transfer(0x10);
    digitalWrite(AZIMUTH, HIGH);
  }//END FOR
  if (response[0] == 16.0) {
    if (response[1] != 16.0 && response[2] != 16.0)
      dataAZ = 1;
  } else if (response[1] == 16.0 ) {
    if (response[0] != 16.0  && response[2] != 16.0)
      dataAZ = 2;
  } else if (response[2] == 16.0) {
    if (response[0] != 16.0 && response[1] != 16.0)
      dataAZ = 0;
  }
  //dataAZ = findData(response);
  az_offset = zeroEncoder(dataAZ);
  az_offset = 0;
  for (int i = 0; i <= 2; i++) {
    digitalWrite(ELEVATION, LOW);
    delay(5);
    response[i] = SPI.transfer(0x10);
    digitalWrite(ELEVATION, HIGH);
  }//END FOR
  
  if (response[0] == 16.0) {
    if (response[1] != 16.0 && response[2] != 16.0)
      dataEL = 1;
  } else if (response[1] == 16.0 ) {
    if (response[0] != 16.0  && response[2] != 16.0)
      dataEL = 2;
  } else if (response[2] == 16.0) {
    if (response[0] != 16.0 && response[1] != 16.0)
      dataEL = 0;
  }
  // dataEL = findData(response);
  el_offset = zeroEncoder(dataEL);
  el_offset = 0;
  SPI.end();
  pinMode(MS11, OUTPUT);
  pinMode(MS12, OUTPUT);
  pinMode(MS13, OUTPUT);

  pinMode(MS21, OUTPUT);
  pinMode(MS22, OUTPUT);
  pinMode(MS23, OUTPUT);

  digitalWrite(MS11, HIGH);
  digitalWrite(MS12, HIGH);
  digitalWrite(MS13, HIGH);

  digitalWrite(MS21, HIGH);
  digitalWrite(MS22, HIGH);
  digitalWrite(MS23, HIGH);

  stepper1.setCurrentPosition(stepper1.currentPosition());
  stepper2.setCurrentPosition(stepper2.currentPosition());
  stepper1.setSpeed(100.0);
  stepper1.setAcceleration(30.0);


  stepper2.setSpeed(100.0);
  stepper2.setAcceleration(30.0);


  nh.getHardware()->setBaud(57600);

  nh.initNode();
  nh.subscribe(sub1);
  nh.subscribe(sub2);

}

void loop()
{
  digitalWrite(AZIMUTH, HIGH);
  digitalWrite(ELEVATION, HIGH);

  parseBuffer(AZIMUTH);

  if (dataAZ == 2) {
    az_angle = ((response[dataAZ] * 256) + response[0]) * 360 / 4096;
  } else
    az_angle = ((response[dataAZ] * 256) + response[dataAZ + 1]) * 360 / 4096;
  az_angle -= az_offset;


  parseBuffer(ELEVATION);
  if (dataEL == 2) {
    el_angle = ((response[dataEL] * 256) + response[0]) * 360 / 4096;
  } else
    el_angle = ((response[dataEL] * 256) + response[dataEL + 1]) * 360 / 4096;

  el_angle -= el_offset;

  //TODO need to check the direction of rotation otherwise im fucked lol
  if (el_angle < el_prev_angle) {
    int temp = 360 - el_prev_angle;
    true_el_angle += (el_angle + temp) / 160;
  } else
    true_el_angle += (el_angle - el_prev_angle) / 160;
  if (true_el_angle >= 360.0) {
    true_el_angle -= 360.0;
  }
  el_prev_angle = el_angle;
  /* Serial.print("Azimuth Motor Angle: ");
    Serial.print(az_angle);
    Serial.print(" ");
    Serial.print("Elevation Motor Angle: ");
    Serial.println(el_angle);*/


  //run the motor forward at 200 steps/second until the motor reaches 400 steps (2 revolutions).
  //stepper.setCurrentPosition(0); //reset the position
  //el_angle is the full angle

  if ((az_angle - angle1) > 1 )
    stepper1.runSpeed();
  else
    stepper1.stop();
  if ((el_angle - angle2) > 1 )
    stepper2.runSpeed();
  else
    stepper2.stop();

  delay (10);
  nh.spinOnce();//all ros callback

}

//int findData(float* resp) {
//  if (resp[0] == 16.0) {
//    if (resp[1] != 16.0)
//      return 1;
//  } else if (resp[1] == 16.0) {
//    if (resp[2] != 16.0)
//      return 2;
//  } else if (resp[2] == 16.0) {
//    if (resp[0] != 16.0)
//      return 0;
//  }
//}

float zeroEncoder(int data) {
  if (data == 2) {
    return ((response[data] * 256) + response[0]) * 360 / 4096;
  }
  return ((response[data] * 256) + response[data + 1]) * 360 / 4096;
}

void parseBuffer(int CS) {
  SPI.begin();
  for (int i = 0; i <= 2; i++) {
    digitalWrite(CS, LOW);
    delay(5);
    response[i] = SPI.transfer(0x10);
    digitalWrite(CS, HIGH);
  }
}
