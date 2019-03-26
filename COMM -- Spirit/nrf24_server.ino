//server continuously listens for message from transceiver and displays on serial port. 
//counts how many messages are received compared to how many message are sent


//When each message is received, an acknowledgement message is sent back to client
//An "END" message will be sent to server when 20 messages are received
//client will also sent an "END" message when 20 messages are sent,
//When server receives the "END" message, it will calculate the error rate by checking how many messages were received out of 20
//If the "END" message is lost, the total message count will accumulate from 20 to 40, to 60, etc
//CRC is used so all messages received at the server should be completely correct, or the message is neglected and discarded. 


#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
RF24 radio(9, 10); // CE, CSN
const byte addresses[][6] = {"00001", "00002"};
int count_msg = 0; //received message counter
int count_ack = 0; //ack message counter
int total = 20; //number of messages in one set of messages, used for error rate calculation

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
  Serial.println(String(count_msg) + " " + String(text));

  radio.stopListening();            //send out acknowledge message
  char response[] = "acknowledged";
  radio.write(&response, sizeof(response));
  count_ack = count_ack + 1;
  
  if (count_ack == total) {          //notify 20 acknowledges are sent
    char endmsg[] = "END";
    radio.write(&endmsg, sizeof(endmsg));
    count_ack = 0;
    Serial.println("acknowledge END message sent");
  }

  if (String(text) == String("END")) {              //if transmitter has transmitted 20 messages, calculate the error rate
    Serial.println("\n-----------------------------------");
    count_msg = count_msg-1;
    int res = ceil(float(count_msg/total));    //if the END message is missed, number of received messages accumulates to next set
    if (count_msg <= 20) res = 0;
    
    float error = (float)count_msg/(total*(res+1))*100;   //error rate calculation
    Serial.println(String(count_msg) + " out of " + String(total*(res+1)) + " messages received\n");
    Serial.println(String(float(100 - error)) + "% error rate");
    Serial.println("-----------------------------------\n");
    count_msg = 0;
 }
  
}
  radio.startListening();

delay(500);
}
