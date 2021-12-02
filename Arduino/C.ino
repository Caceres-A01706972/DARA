//
// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// FirebaseDemo_ESP8266 is a sample that demo the different functions
// of the FirebaseArduino API.

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

// Set these to run example.
#define FIREBASE_HOST  "fir-iot-3c3f3-default-rtdb.firebaseio.com" 
#define FIREBASE_AUTH  "Cmif88M1PHujXKQaX5C0NIdvv5WV5EN87d2rbjhW" 
#define WIFI_SSID "toma-tu-internet-pobre" 
#define WIFI_PASSWORD  "Putoelquelolea"

String values,sensor_data;


void setup() {
  Serial.begin(9600);

  delay(1000);

  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  //Serial.print("connecting...");
  while (WiFi.status() != WL_CONNECTED) {
    //Serial.print(".");
    delay(500);
  }
  /*Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  Serial.print("Mac Address: ");
  Serial.println(WiFi.macAddress());
  Serial.print("*********************************************");
  */
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

int n = 0;

void loop() {
  
 bool Sr =true;
 
  while(Serial.available()){
    
        //get sensor data from serial put in sensor_data
        sensor_data=Serial.readString(); 
        Sr=true;          
    }
  
delay(1000);

  if(Sr==true){  
    
  values=sensor_data;
  
  //get comma indexes from values variable
  int fristCommaIndex = values.indexOf(',');
  int secondCommaIndex = values.indexOf(',', fristCommaIndex+1);
  int thirdCommaIndex = values.indexOf(',', secondCommaIndex + 1);
   
  //get sensors data from values variable by  spliting by commas and put in to variables  
  String ultrasonic_value = values.substring(0, fristCommaIndex);
  String IR_sensor1_value = values.substring(fristCommaIndex+1, secondCommaIndex);
  String IR_sensor2_value = values.substring(secondCommaIndex+1);


  //store ultrasonic sensor data as string in firebase 
  Firebase.setString("ultrasonic_value",ultrasonic_value);
   delay(10);
  //store IR sensor 1 data as string in firebase 
  Firebase.setString("IR_sensor1_value",IR_sensor1_value);
   delay(10);
  //store IR sensor 2 data as string in firebase 
  Firebase.setString("IR_sensor2_value",IR_sensor2_value);

  delay(10);
  
  
  //store previous sensors data as string in firebase
  
  Firebase.pushString("previous_ultrasonic_value",ultrasonic_value);
   delay(10);
  Firebase.pushString("previous_IR_sensor1_value",IR_sensor1_value);
   delay(10);
  Firebase.pushString("previous_IR_sensor2_value",IR_sensor2_value);
    
  delay(1000);
  
  if (Firebase.failed()) {  
      return;
  }
  
}   



  /*
  // set value
  Firebase.pushFloat("number", 42.0);
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /number failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(1000);
  
  // update value
  Firebase.pushFloat("number", 43.0);
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /number failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(1000);

  // get value 
  Serial.print("number: ");
  Serial.println(Firebase.getFloat("number"));
  delay(1000);

  // remove value
  Firebase.remove("number");
  delay(1000);
*/

//Firebase.pushInt("FirebaseIOT",n++);

/*
  // set string value
  Firebase.setString("message", "hello world");
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /message failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(1000);
  
  // set bool value
  Firebase.pushBool("truth", false);
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /truth failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(1000);
*//*
  // append a new value to /logs
  String name = Firebase.pushInt("logs", n++);
  // handle error
  if (Firebase.failed()) {
      Serial.print("pushing /logs failed:");
      Serial.println(Firebase.error());  
      return;
  }
  
  Serial.print("pushed: /logs/");
  Serial.println(name);
  delay(1000);
  */
}
