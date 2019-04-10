
/*********************
 *11 to GPS Module TX*
 *10 to GPS Module RX*
 *********************/

#include <SoftwareSerial.h>
#include <TinyGPS.h>
#include <ros.h>
#include <geometry_msgs/Vector3.h>


SoftwareSerial ss(10, 11);
TinyGPS gps;

ros::NodeHandle nh;

void gpsdump(TinyGPS &gps);


geometry_msgs::Vector3 pose_msgs;
ros::Publisher pose("GPSlocation",&pose_msgs);



void setup()  
{

  ss.begin(57600);
  delay(10);
//  Serial.println("uBlox Neo 6M");
//  Serial.print("Testing TinyGPS library v. "); Serial.println(TinyGPS::library_version());
//  Serial.println("by Mikal Hart");
//  Serial.println();
//  Serial.print("Sizeof(gpsobject) = "); 
//  Serial.println(sizeof(TinyGPS));
//  Serial.println(); 
  nh.initNode();
  nh.advertise(pose);
}

void loop() // run over and over
{
  bool newdata = false;
  unsigned long start = millis();
  // Every 5 seconds we print an update 
  while (millis() - start < 5000) 
  {
    if (ss.available()) 
    
    {
      char c = ss.read();
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
   // Serial.println("Acquired Data");
    gpsdump(gps);
    //also send the gps value;;
  }
  else 
  {
    // send the default gps value;;
    //43.004622, -81.275390

    pose_msgs.x=43.0046;
    pose_msgs.y=-81.2753;
    pose_msgs.z=0;
    //Serial.println("FAIL-----");

    }

  pose.publish(&pose_msgs);
  nh.spinOnce();
  delay(1000); //one second
  
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
