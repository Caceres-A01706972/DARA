#define IR_sensor1Pin A1 
#define IR_sensor2Pin A2 
#define C_sensor1Pin A0
/*
int trigger_pin = 2;
int echo_pin = 3;
*/

int IR_sensor1_Value;
int IR_sensor2_Value;
int time;
int distance; 
String values;
int output_value ;
int moisture_pin = A0;


/*

String values;
*/
void setup() {
  pinMode (moisture_pin, INPUT);
  Serial.begin(9600); // beginning Serial communication
  //Serial.println("Reading From the Sensor ...");
  delay(2000);
}

void loop() {


  // get sensors data and put in to values variables as a string.
   values= (get_distance_Value()+','+get_IR_sensor1_Value()+','+get_IR_sensor2_Value());
  delay(1000);
  // removed any buffered previous serial data.
  Serial.flush();
  delay(1000);
  // sent sensors data to serial (sent sensors data to ESP8266)
  Serial.print(values);
  delay(2000);
} 

String get_distance_Value() {

  output_value = analogRead(moisture_pin);

  output_value = map(output_value, 1023, 165, 0, 100);

  return String (output_value);
}


// get IR sensor 1 data
String get_IR_sensor1_Value(){ 
   
IR_sensor1_Value =analogRead(C_sensor1Pin);
    delay(1000);
    return String(IR_sensor1_Value);  
    
}


// get IR sensor 2 data
String get_IR_sensor2_Value(){ 
   
IR_sensor2_Value =analogRead(IR_sensor2Pin);
delay(1000);
    return String("0");  
}
 
 
