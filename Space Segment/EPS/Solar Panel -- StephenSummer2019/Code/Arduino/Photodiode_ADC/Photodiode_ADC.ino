#define SELPIN 10 //Selection Pin 
#define DATAOUT 11//MOSI 
#define DATAIN  12//MISO 
#define SPICLOCK  13//Clock 

int readvalue; 

void setup(){ 
    //Set pin modes 
    pinMode(SELPIN, OUTPUT); 
    pinMode(DATAOUT, OUTPUT); 
    pinMode(DATAIN, INPUT); 
    pinMode(SPICLOCK, OUTPUT); 
    //disable device to start with 
    digitalWrite(SELPIN,HIGH); 
    digitalWrite(DATAOUT,LOW); 
    digitalWrite(SPICLOCK,LOW); 
    
    Serial.begin(9600); 
} 

int read_adc(int channel){
    int adcvalue = 0;
    byte commandbits; //Command bits: start(1), channel(3), mode stuff(4)

    switch(channel){
        case 0:
            commandbits = B10011110;
            break;
        case 1:
            commandbits = B11011110;
            break;
        case 2:
            commandbits = B10101110;
            break;
        case 3:
            commandbits = B11101110;
            break;
        default:
            commandbits = B10011110; //Channel 0 for default
            break;
        }

    digitalWrite(SELPIN,LOW); //Select adc
    // Setup bits to be written
    for (int i=7; i>=3; i--){
        digitalWrite(DATAOUT,commandbits&1<<i);
        //cycle clock
        digitalWrite(SPICLOCK,HIGH);
        digitalWrite(SPICLOCK,LOW);    
    }

    digitalWrite(SPICLOCK,HIGH);    //Ignores 2 null bits
    digitalWrite(SPICLOCK,LOW);
    digitalWrite(SPICLOCK,HIGH);  
    digitalWrite(SPICLOCK,LOW);

    //Read bits from ADC
    for (int i=11; i>=0; i--){
        adcvalue+=digitalRead(DATAIN)<<i;
        //cycle clock
        digitalWrite(SPICLOCK,HIGH);
        digitalWrite(SPICLOCK,LOW);
    }
    digitalWrite(SELPIN, HIGH); //Turn off device
    return adcvalue;
}

void loop() { 
    //Read channel 0
    readvalue = read_adc(0); 
    //Serial.print("Channel 0 : ");
    Serial.println(readvalue,DEC); 

    //Read channel 1 (CHANNEL 1 DEFECTIVE)
    /*readvalue = read_adc(1); 
    Serial.print("Channel 1 : ");
    Serial.println(readvalue,DEC);*/

    //Read channel 2
    readvalue = read_adc(2); 
    //Serial.print("Channel 2 : ");
    Serial.println(readvalue,DEC); 

    //Read channel 3
    /*readvalue = read_adc(3); 
    Serial.print("Channel 3 : ");
    Serial.println(readvalue,DEC);*/

    //Delay
    //Serial.println(" "); 
    delay(250); 
} 
