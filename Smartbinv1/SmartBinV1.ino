#include <FirebaseESP8266.h>
#include <FirebaseESP8266HTTPClient.h>
#include <FirebaseFS.h>
#include <FirebaseJson.h>
#include <ESP8266WiFi.h>

int val = 0;
FirebaseData firebaseData;
// Set these to run example.
#define FIREBASE_HOST ""//Enter the host of ypur project
#define FIREBASE_AUTH ""//Open your Realtime Database and go to project overview > project settings > Service accounts > Database secrets and copy your Secret and paste in to your FIREBASE_AUTH.
#define WIFI_SSID ""
#define WIFI_PASSWORD ""

const int trigPin = 16;//D0
const int echoPin = 5;//D1

//Measure level of garbage pile
int levelMeasure();

  void setup() {
    // put your setup code here, to run once:
      pinMode(trigPin,OUTPUT);
      pinMode(echoPin,INPUT);
      Serial.begin(9600);
      // connect to wifi.
      WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
      Serial.print("connecting");
      while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
      }
      Serial.println();
      Serial.print("connected: ");
      Serial.println(WiFi.localIP());
      
      Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() {
  // put your main code here, to run repeatedly:
      long level = levelMeasure();
    
      if (Firebase.setInt(firebaseData, "/data", level)) {    // On successful Write operation, function returns 1  
               Serial.println("Value Uploaded Successfully");
               Serial.println("Height:");
               Serial.println(level);
      }  
      else {        
      Serial.println(firebaseData.errorReason());
      }
      delay(1000);
}


int levelMeasure()
{
    static int distance;
    static long duration;
    
    digitalWrite(trigPin,LOW);
    delayMicroseconds(2);
    
    digitalWrite(trigPin,HIGH);
    delayMicroseconds(10);
    
    digitalWrite(trigPin,LOW);
    delayMicroseconds(2);

    duration = pulseIn(echoPin, HIGH);
    distance = duration * 0.017; 
 
    return distance; 
}
