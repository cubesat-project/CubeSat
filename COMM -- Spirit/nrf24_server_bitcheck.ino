//this program turns off defaul CRC check and check for single bits errors
//program will read the message in bits and calculate bit errors, note lost messages are ignores here so total bits trasnmitted needs to be mannually calculated from client side

//NOTE:client code should send a single "0" each message 


#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
RF24 radio(9, 10); // CE, CSN
const byte addresses[][6] = {"00001", "00002"};
int totalErrorCount = 0; //counts total amount of received bit errors from the start of the program
int timeCounter = 0; //counter to delay serial print to every 30 loops

void setup() {
pinMode(6, OUTPUT);
Serial.begin(9600);
radio.begin();
radio.openWritingPipe(addresses[0]); // 00001
radio.openReadingPipe(1, addresses[1]); // 00002
radio.setPALevel(RF24_PA_MAX);      // power amplifier level, RF24_PA_MIN, RF24_PA_LOW, RF24_PA_HIGH and RF24_PA_MAX: -18dBm, -12dBm,-6dBM, and 0dBm
radio.startListening();              //sets the module as receiver
//radio.getPALevel();
//radio.getDataRate();      // RF24_250KBPS for 250kbs, RF24_1MBPS for 1Mbps, or RF24_2MBPS for 2Mbps

radio.setAutoAck(false); 
radio.disableCRC();


Serial.println("receiver starts listening");

}

void loop()
{
if (radio.available())              //receiver looking for data
{

  char text[32];                 //save the incoming message
  radio.read(&text, sizeof(text));    //read the message
  count_msg = count_msg + 1;
  //Serial.println(String(count_msg) + " " + String(text));

 

  byte check[8];
  int bitcount = 0;                  //reads the received message into bits
    for (byte i=0; i<8; i++) {
    byte state = bitRead(text[0], i);
    //digitalWrite(pins[i], state);
    //Serial.print(state);
    check[i] = state;
  }


  for (int j=0; j<8; j++) {             //compare the received bits to correct bits 
    byte key[8] = {0,0,0,0,1,1,0,0};    //message "O" in bits 
    if (check[j] != key[j]) bitcount++; //count number of wrong bits in the single message
    //Serial.print(check[j]);  //print received bits
  }
  
  totalErrorCount = totalErrorCount + bitcount; 
  
  if (timeCounter >= 1) {         //print out error rate statistics, happens every 30 loops
    Serial.println("total bit error count:  " + String(totalErrorCount) + " , " + String(count_msg*8) + " bits sent");
    timeCounter = 0;
  }
 
  timeCounter++;
  radio.startListening();

}

delay(50);
}
