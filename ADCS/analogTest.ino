const int in1=3; //in1 in2 are for the side facing motors
const int in2=5; // separate driver

const int in3=6; // in3 in4 are for the upwwards facing motor
const int in4=8;

const int in5=9; //in5 in6 are for the front facing motor
const int in6=11;

void setup() 
{
  pinMode(in1,OUTPUT);
  pinMode(in2,OUTPUT);
  
  pinMode(in3,OUTPUT);
  pinMode(in4,OUTPUT);
  
  pinMode(in5,OUTPUT);
  pinMode(in6,OUTPUT);
  
}

void loop() 
{
  for (int i=0;i<=500;i++) //length of first phase (500*20milliseconds)
  {
    
    
    analogWrite(in1,50);
    analogWrite(in3,50);
    analogWrite(in5,50);
    
    delay(20);
  }
    
  for(int i=0;i<=500;i++) //length of 2nd phase (500*20milliseconds)
  {
    
    
    analogWrite(in1,50);
    analogWrite(in3,50);
    analogWrite(in5,50);
   
    delay(20);
  }

    
  for(int i=0;i<=500;i++) //3rd phase (500*20milliseconds) 2sec
  {
    
    
    analogWrite(in1,100);
    analogWrite(in3,100);
    analogWrite(in5,100);

  
    
    delay(20);
  }


}
