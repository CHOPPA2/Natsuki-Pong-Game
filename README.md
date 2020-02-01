# Natsuki-Pong-Game
A Natsuki Pong Game. A horrible monstrosity I created back in the days of 2018. Play at your own risk.
 
# Installation 
Clone the repository

``` git clone https://github.com/tghgg/Natsuki-Pong-Game.git ```

Install nginx and set up its configuration file so the root of the local web server is the game's directory

``` 
# Somewhere in the nginx.conf file which may vary for users
location / {
	root Natsuki-Pong-Game;
	index index.html;
}
```

Start the nginx server:

- Windows: Go into command prompt or Powershell as administrator

``` start-service nginx ```

- Linux (systemd): Open up a terminal

``` systemctl start nginx ```

# Usage
Open localhost in Internet Edge (Firefox doesn't work for some reason) and observe.

![Screenshot of the game](/assets/screenshot.png)

# License 
Licensed with the WTFPL license, meaning you can do whatever the hell you want with this thing I don't even care.
