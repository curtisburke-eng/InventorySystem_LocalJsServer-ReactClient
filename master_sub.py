import paho.mqtt.client as mqtt
import time

def on_connect(client, userdata, flags, rc):
   global flag_connected
   flag_connected = 1
   client_subscriptions(client)
   print("Connected to MQTT server")

def on_disconnect(client, userdata, rc):
   global flag_connected
   flag_connected = 0
   print("Disconnected from MQTT server")
   
# a callback functions 
def callback_sandblaster_01_CMD(client, userdata, msg):
    print('Sandblaster_01 CMD: ', msg.payload.decode('utf-8'))


def callback_sandblaster_01_OUT(client, userdata, msg):
    print('Sandblaster_01 OUT: ', str(msg.payload.decode('utf-8')))

def callback_sandblaster_01_STATE(client, userdata, msg):
    print('Sandblaster_01 STATE: ', str(msg.payload.decode('utf-8')))

def client_subscriptions(client):
    client.subscribe("machine/#")
    #client.subscribe("rpi/broadcast")

client = mqtt.Client("master_sub") #this should be a unique name
flag_connected = 0

client.on_connect = on_connect
client.on_disconnect = on_disconnect
client.message_callback_add('machine/sandblaster_01/CMD', callback_sandblaster_01_CMD)
client.message_callback_add('machine/sandblaster_01/OUT', callback_sandblaster_01_OUT)
client.message_callback_add('machine/sandblaster_01/STATE', callback_sandblaster_01_STATE)
client.connect('127.0.0.1',1883)
# start a new thread
client.loop_start()
client_subscriptions(client)
print("......client setup complete............")


while True:
    time.sleep(4)
    if (flag_connected != 1):
        print("trying to connect MQTT server..")
        
