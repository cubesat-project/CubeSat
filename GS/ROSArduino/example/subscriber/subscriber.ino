
// for motor 
#include <ros.h>
#include <std_msgs/Int16.h>


/*********************
 *11 to GPS Module TX*
 *10 to GPS Module RX*
 *********************/

#include <SoftwareSerial.h>
#include <TinyGPS.h>
#include <geometry_msgs/Vector3.h>

//Define stepper motor connections
#define dirPin1 2
#define stepPin1 3
#define dirPin2 4
#define stepPin2 5
int stepsPerRevolution1 = 200; 
int stepsPerRevolution2 = 200; 
//for gps 
SoftwareSerial mySerial(10, 11);
TinyGPS gps;



void gpsdump(TinyGPS &gps);
geometry_msgs::Vector3 pose_msgs;

ros::NodeHandle  nh; //Next, we need to instantiate the node handle, which allows our 
//program to create publishers and subscribers. 
//The node handle also takes care of serial port communications.


void stepper_cd1( const std_msgs::Int16& cmd_msg){
  stepsPerRevolution1=cmd_msg.data; //set speed of stepper
}
  
void stepper_cd2( const std_msgs::Int16& cmd_msg){
  stepsPerRevolution2=cmd_msg.data; //set speed of stepper
} 

ros::Subscriber<std_msgs::Int16> sub("motor_1", stepper_cd1);
ros::Subscriber<std_msgs::Int16> sub1("motor_2", stepper_cd2);
ros::Publisher pose("GPSlocation",&pose_msgs);



void setup()
{
  mySerial.begin(9600);
  delay(300);
  

  nh.getHardware()->setBaud(9600);
  nh.initNode();
  
  nh.subscribe(sub);
  nh.subscribe(sub1);
  nh.advertise(pose);
  
  
//set the initial position to 0
}
  
void loop()
{ 
  bool newdata = false;
  unsigned long start = millis();
  // Every 5 seconds we print an update 
  //run the motor forward at 200 steps/second until the motor reaches 400 steps (2 revolutions).
  // gps
  while (millis() - start < 1000) 
  {
    if (mySerial.available()) 
    
    {
      char c = mySerial.read();
     // Serial.print(c);  // uncomment to see raw GPS data
      if (gps.encode(c)) 
      {
        newdata = true;
        break;  // uncomment to print new data immediately!
      }
    }
  }
  
  if (newdata) 
  {
   gpsdump(gps);
  }
  else 
  {
    // send the default gps value;;
    pose_msgs.x=43.0082;
    pose_msgs.y=-81.273;
    pose_msgs.z=0;
    //Serial.println("FAIL-----");
    }

  //stepper.setCurrentPosition(0); //reset the position
   pose.publish(&pose_msgs);
   nh.spinOnce();//all ros callback
   delay(1000);

}


void gpsdump(TinyGPS &gps)
{
  float flat, flon;
  unsigned long age; //, date, time, chars;
  gps.f_get_position(&flat, &flon, &age);

  pose_msgs.x=flat;
  pose_msgs.y=flon;
  pose_msgs.z=1;
}
