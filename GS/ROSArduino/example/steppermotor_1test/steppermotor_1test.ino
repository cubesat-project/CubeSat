#include <ros.h>
#include <std_msgs/Int16.h>

#include <AccelStepper.h>



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
int stepsPerRevolution1 = 100;
int stepsPerRevolution2 = 100;
//Create stepper object
AccelStepper stepper1(1, stepPin1, dirPin1); //motor interface type must be set to 1 when using a driver.
//set the variable
AccelStepper stepper2(1, stepPin2, dirPin2);
ros::NodeHandle  nh; //Next, we need to instantiate the node handle, which allows our
//program to create publishers and subscribers.
//The node handle also takes care of serial port communications.
void stepper_cd1( const std_msgs::Int16& cmd_msg) {
  stepsPerRevolution1 = cmd_msg.data; //set speed of stepper

}
void stepper_cd2( const std_msgs::Int16& cmd_msg) {
  stepsPerRevolution2 = cmd_msg.data; //set speed of stepper

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
  stepper1.setMaxSpeed(1000); //maximum steps per second
  stepper2.setMaxSpeed(1000);
  nh.initNode();
  nh.subscribe(sub1);
  nh.subscribe(sub2);

}

void loop()
{
  //set the current position to 0
  stepper1.setCurrentPosition(0);
  stepper2.setCurrentPosition(0);
  //run the motor forward at 200 steps/second until the motor reaches 400 steps (2 revolutions).
  while (stepper1.currentPosition() != stepsPerRevolution1 || stepper2.currentPosition() != stepsPerRevolution2 )
  {
    if (stepper1.currentPosition() == stepsPerRevolution1) 
      stepper1.setSpeed(0);
     else
      stepper1.setSpeed(500);

    stepper1.runSpeed();
    
    if (stepper2.currentPosition() == stepsPerRevolution2)
      stepper2.setSpeed(0);
    else
      stepper2.setSpeed(500);
      
    stepper2.runSpeed();

  }
  //stepper.setCurrentPosition(0); //reset the position
  delay(1000);

  nh.spinOnce();//all ros callback
  delay (1);


}
