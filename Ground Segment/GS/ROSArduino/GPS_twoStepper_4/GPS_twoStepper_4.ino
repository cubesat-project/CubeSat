#include <ros.h>
#include <std_msgs/Int16.h>

#include <AccelStepper.h>



//Define stepper motor connections
//#define MS11 23
//#define MS12 25
//#define MS13 27
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
AccelStepper stepper1(1, stepPin1, dirPin1); //motor interface type must be set to 1 when using a driver.
//set the variable
AccelStepper stepper2(1, stepPin2, dirPin2);
ros::NodeHandle  nh; //Next, we need to instantiate the node handle, which allows our
//program to create publishers and subscribers.
//The node handle also takes care of serial port communications.
void stepper_cd1( const std_msgs::Int16& cmd_msg) {
  angle1 = cmd_msg.data; //set speed of stepper
  stepper1.moveTo((angle1/1.8)*16);
  
}
void stepper_cd2( const std_msgs::Int16& cmd_msg) {
  angle2 = cmd_msg.data; //set speed of stepper
    if (angle2 < 0)
  {
    angle2 = 0;
  }
  else
    angle2 = cmd_msg.data / 1.8 * 16 * 160; //set speed of stepper
  // stepper2.moveTo(angle2);
  stepper2.moveTo((angle2)/1.8*16);
  
}

ros::Subscriber<std_msgs::Int16> sub1("motor_1", stepper_cd1);
ros::Subscriber<std_msgs::Int16> sub2("motor_2", stepper_cd2);
void setup()
{
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
  
  stepper1.setMaxSpeed(100.0);
  stepper1.setAcceleration(30.0);
 
  stepper2.setMaxSpeed(400.0);
  stepper2.setAcceleration(30.0);

    
  nh.getHardware()->setBaud(57600);

  nh.initNode();
  nh.subscribe(sub1);
  nh.subscribe(sub2);

}

void loop()
{
  //run the motor forward at 200 steps/second until the motor reaches 400 steps (2 revolutions).
  //stepper.setCurrentPosition(0); //reset the position
  stepper1.run();
  stepper2.run();
  
  nh.spinOnce();//all ros callback
  delay (10);


}
