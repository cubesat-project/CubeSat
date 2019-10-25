
// Shows how to run 2 simultaneous steppers


#include <AccelStepper.h>



// The X Stepper pins
#define STEPPER1_DIR_PIN 2
#define STEPPER1_STEP_PIN 3
// The Y stepper pins
#define STEPPER2_DIR_PIN 4
#define STEPPER2_STEP_PIN 5

#define MS11 23
#define MS12 25
#define MS13 27


#define MS21 22
#define MS22 24
#define MS23 26


// Define some steppers and the pins the will use
AccelStepper stepper1(AccelStepper::DRIVER, STEPPER1_STEP_PIN, STEPPER1_DIR_PIN);
AccelStepper stepper2(AccelStepper::DRIVER, STEPPER2_STEP_PIN, STEPPER2_DIR_PIN);

void setup()
{  


    stepper1.setMaxSpeed(100.0);
    stepper1.setAcceleration(30.0);
    stepper1.moveTo(1000000);
    
    stepper2.setMaxSpeed(100.0);
    stepper2.setAcceleration(30.0);
    stepper2.moveTo(1000000);
}

void loop()
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
    // Change direction at the limits
//    if (stepper1.distanceToGo() == 0)
//	stepper1.moveTo(-stepper1.currentPosition());
//    if (stepper2.distanceToGo() == 0)
//	stepper2.moveTo(-stepper2.currentPosition());
    stepper1.run();
    stepper2.run();
}
