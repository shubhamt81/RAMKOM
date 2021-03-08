#include <FirebaseESP8266.h>
#include <FirebaseESP8266HTTPClient.h>
#include <FirebaseFS.h>
#include <FirebaseJson.h>
#include <ESP8266WiFi.h>
#include <Servo.h>

int val = 0;
FirebaseData firebaseData;
// Set these to run example.
#define FIREBASE_HOST "Host URL"//Enter the host of your project
#define FIREBASE_AUTH "Auth code"//Open your Realtime Database and go to project overview > project settings > Service accounts > Database secrets and copy your Secret and paste in to your FIREBASE_AUTH.
#define WIFI_SSID "SSID"
#define WIFI_PASSWORD "Password"

Servo myservo;
int pos = 90;

const int trigPin1 = 16;//D0
const int echoPin1 = 5;//D1

const int trigPin2 = 2;//D4 Or GPIO-2 of nodemcu
const int echoPin2 = 0;//D3 Or GPIO-0 of nodemcu


//Measure level of garbage pile
int levelMeasure(int, int);
void distanceMeasure(int, int);

void setup() 
{
    // put your setup code here, to run once:
      myservo.attach(15);//D8
      
      pinMode(trigPin1,OUTPUT);
      pinMode(echoPin1,INPUT);
      
      pinMode(trigPin2, OUTPUT);
      pinMode(echoPin2, INPUT);
      
      myservo.write(pos);
      
      Serial.begin(9600);
      
      // connect to wifi.
      WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
      Serial.print("connecting");
      
      while (WiFi.status() != WL_CONNECTED) 
      {
        Serial.print(".");
        delay(500);
      }
      
      Serial.println();
      Serial.print("connected: ");
      Serial.println(WiFi.localIP());
      
      Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() 
{
  // put your main code here, to run repeatedly:
      long level = levelMeasure(trigPin1, echoPin1);

      distanceMeasure(trigPin2, echoPin2);
    
      if (Firebase.setInt(firebaseData, "/data", level)) 
      {    
        // On successful Write operation, function returns 1  
               Serial.println("Value Uploaded Successfully");
               Serial.println("Height:");
               Serial.println(level);
      } 
       
      else 
      {        
      Serial.println(firebaseData.errorReason());
      }
      delay(1000);
}

int levelMeasure(int trigPin, int echoPin)
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

void distanceMeasure(int trigPin, int echoPin)
{
    long dist = levelMeasure(trigPin, echoPin);
    Serial.println(dist);
    if (dist < 27)
    {
      myservo.write(pos+160);
      delay(1000);
      myservo.write(pos-160);
    }
}
