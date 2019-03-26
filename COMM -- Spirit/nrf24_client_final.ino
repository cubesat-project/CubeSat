#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
RF24 radio(9, 10); // CE, CSN         
const byte addresses[][6] = {"00001", "00002"};     //Byte of array representing the address. This is the address where we will send the data. This should be same on the receiving side.
int time1;
int counter = 0;
int counter2 = 0;
int Error_rate;
int change;
int response;
int total = 20;
void setup() {
radio.begin();                  //Starting the Wireless communication

radio.openWritingPipe(addresses[1]); // 00001
radio.openReadingPipe(1, addresses[0]); // 00002

radio.setPALevel(RF24_PA_MIN);  //You can set it as minimum or maximum depending on the distance between the transmitter and receiver.

Serial.begin(9600);
Serial.println(F("Start sending------------------------------------------------"));
change = 1;

}

void loop()
{
  
  radio.stopListening();          // This sets the module as transmitter
  if (change == 1){               // Change = 1, means we are transmitting
   char text1[] = "Hello World";
  
  if(counter2 == total)
  {char text3[] = "END";
   radio.write(&text3, sizeof(text3));
   counter2 = 0;
  }
  counter2 = counter2 + 1;
  radio.write(&text1, sizeof(text1));                  //Sending the message to receiver
  // time1 = millis();
  Serial.println("Start transmitting --------------------------------");
  Serial.println("Message " + String(counter2)+ " sent: " + String(text1));
  Serial.println();
  change = 0;                     // Change = 0, means we are receiving
  }
  // Start listening
  Serial.println(F("Start listening ++++++++++++++++++++++++++ "));
  radio.startListening(); 
  unsigned long time2 = micros();
  
  while(change == 0){                             
  if(radio.available()){
    counter = counter+1;  // count for # of received message 
    
    Serial.print("Message "+ String(counter)+" received!:");
    char text2[32] = "";                 //Saving the incoming data
    radio.read(&text2, sizeof(text2));    //Reading the data
    
    Serial.println(text2);


    
    if (String(text2) == String("END")){
      counter = counter - 1;
      int res = counter/total;
      if(counter < 20)
      res = 1;
      float Error_rate = 1 - (float)counter/(total*(res))*100;
      counter = 0;
      Serial.println(res);
      Serial.print("Error Rate is: " + String(Error_rate)+ "%");
    }

    
    
    change = 1;
//    response = time2 - time1;
//    Serial.print("Response time:");
//    Serial.print(response);
    Serial.println();   
    }
    if (micros() - time2 > 800000 ){            // If waited longer than 0.8 sec, indicate timeout and exit while loop
      Serial.println("Time out!");
          change = 1;
          break;
      }   
 }

 

delay(300);
}
