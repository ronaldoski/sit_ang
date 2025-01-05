import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css';
import { Panel } from './Click';
import prj1Image from './image/prj1_cahier.jpg';
import Img from './Img';
import prj2 from './image/prj2.jpg';
import mind from './image/mind.png';
import moteur from './image/moteur.jpg';
import Debit from './image/Debit.jpg';
import Niveau from './image/Niveau.jpg'
import q1 from './image/q1.png';
import q2 from './image/q1.png';
import q3 from './image/q1.png';
import q4 from './image/q1.png';
import auto2 from './image/photo1696080490 (1)q1.jpeg';
import auto1 from './image/auto1.jpg';
import mind_mapj3 from './image/mind_mapj3.jpg'
import sif_401 from './image/sif_401.jpg';
import vit from './image/vit.jpg'
import isis from './image/isis.png'
import ScrollToTopButton from '../ScrollToTopButton'; // Import du composant ScrollToTopButton

export default function MediaCard() {
  return (
    <div className={styles.cardContainer}>
      <ScrollToTopButton /> {/* Ajout du bouton pour remonter en haut */}

      {/* Conteneur principal pour les grilles */}
      <div className={styles.mainContainer}>
        {/* Conteneur pour les cartes (3x3) */}
        <div className={styles.cardGrid}>
          {/* Carte 1 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image={prj1Image}
              title="projet 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                dyce game
              </Typography>
              <Typography variant="body2">
                My first disciplinary project was about a random dice game
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('prj1')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 2 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image={prj2}
              title="projet 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                sorting balls
              </Typography>
              <Typography variant="body2">
                The second disciplinary project was about sorting two types of balls, yellow and pink, into three different crates.
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('prj2')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 3 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="projet 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                defense turret
              </Typography>
              <Typography variant="body2">
                The third disciplinary project was a solo endeavor
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('prj3')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 4 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="projet automate"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                automate simulation
              </Typography>
              <Typography variant="body2">
                first automate project
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('auto')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 5 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="projet automate 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                physic project automate
              </Typography>
              <Typography variant="body2">
                The second automation project involved wiring an automation system to the current
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('auto2')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 6 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="projet automate 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Automation with PID and PWM
              </Typography>
              <Typography variant="body2">
                As part of this project, we had to turn a heated LED on or off using two buttons (ON and OFF).
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('auto3')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 7 */}
         
          {/* Carte 8 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="projet industriel 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                industrial project
              </Typography>
              <Typography variant="body2">
                this is an IT/ET project including embedded, website, and VR part
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('indu2')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>

          {/* Carte 9 */}
          <Card className={styles.card} sx={{ maxWidth: 600, height: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="projet industriel "
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                sensor traineeship 
              </Typography>
              <Typography variant="body2">
                is a technocampus traineeship about different sensor
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => document.getElementById('resindu')?.scrollIntoView({ behavior: 'smooth' })}>
                More
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Conteneur pour les panels (2x8) */}
        <div className={styles.panelGrid}>
          <div id='prj1' className={styles.panel}>
            <Panel
              titre="Dyce Game Panel"
              txt="My initial academic project focused on a dice game that was randomly selected. My team and I had to code an app that randomly throws two dice and displays their values on the computer and an electronic model. As part of our first project, our teachers introduced us to professional organization systems like mind maps, Gantt, and PERT charts. Furthermore, each team had meetings every week to discuss their research, misunderstandings, or improvements. In the middle of the year, one of my team left the school, so I had to switch between my initial task and other tasks released by my old teammates. This challenge has really improved my versatile ability. This project has also helped me in managing shyness because in different meetings, we had to speak a lot."
            />
            <div className={styles.grid}>
              <Img
                images={[
                  {
                    src: prj1Image,
                    alt: "Cahier de projet",
                    hoverText: "Description du projet"
                  }
                ]}
              />
              <Img
                images={[
                  {
                    src: mind,
                    alt: "mind map projet 1",
                    hoverText: "mind map projet 1"
                  }
                ]}
              />
            </div>
          </div>

          <div id='prj2' className={styles.panel}>
            <Panel
              titre="sorting balls"
              txt="The second disciplinary project involved sorting two types of balls, yellow and pink, into three different crates: one for yellow, one for pink, and one for the others. An embedded system with sensors, motors, and other components was required to display data on a site with access to history and live data, as well as a design and physical structure focus.
              After a lot of 3D modeling and research on components, my team came up with the idea of a rollercoaster. An object is thrown into the system, its color is checked by an AI camera named HuskyLens (trained to detect yellow and pink balls). If the camera detects the ball’s color correctly, it directs it to the corresponding crate. If the object is unknown, or the crate is full, the ball goes to the other crate. All steps are displayed on an LCD connected via I2C communication and on a website. JavaScript, Twig templates for the frontend, and Bootstrap for the design were the main components used in the development of the website using the Express.js framework. Our website runs with Node.js. At the end of the project, we were interviewed by Télésambre, who wanted to learn more about our work.I had a lot difficulty for start the project because im often moonstruck and it took me away teamate"
            />
            <Img
              images={[
                {
                  src: prj2,
                  alt: "Cahier de projet",
                  hoverText: "Description du projet"
                }
              ]}
            />
          </div>

          <div id='prj3' className={styles.panel}>
            <Panel
              titre="defense turret"
              txt="The third disciplinary project was a solo endeavor. The only requirement was to create an autonomous system where the user could trigger different values with a button. I decided to make a fake defense system. I used a radar sensor mounted on a 360° servo to detect any object in its path, and a solenoid fixed on another 360° servo to shoot an arrow at the target. The system was connected to a React website."
            />
          </div>
          <div id='indu2' className={styles.panel}>
            <Panel
              titre="technocampus all in one project"
              txt="We have to carry out a project that consists of sent data from SIF 401 (PLC) in a secure way using an Ewon Flexy 201 and including different communication protocols.
This project will be divided into several stages, the first stage is the analysis and understanding of the hardware used, it will take in hand the Ewon and its configuration with talk2me, to then connect with the ECatcher application, It will also be necessary to understand and use the OPC-UA protocol, which is a communication standard used in the field of industrial automation.
The second step is the data communication to the web application, because as mentioned above, we will use the OPC-UA protocol, in order to transmit some data from the SIF401 to our Node-RED application. It will be configured to transmit these OPC-UA data in Web Socket to our web application made in react.
The web application will have a login page, which will give the choice between an OAuth authentication by Discord or by credential (Authentik). Once authenticated, there will be a home page with the necessary information about the project, a live page containing data of choice sent by OPC-UA and Web Socket and a final administration page in which users who have already logged in will be shown, including the possibility to change the role of each user (user or admin). This last page will only be accessible as an admin role.
The last step is the XR headset part, we will also have to display some data of the automaton in the XR headset, for this we will have to use the Unity software.
"
            />
            <Typography    className={styles.panelGrid}>
           <Img
                images={[
                  {
                    src: mind_mapj3,
                    alt: "mind map ",
                    hoverText: "mind map of project 3"
                  }
                ]}
              />
              <Img
                images={[
                  {
                    src: sif_401 ,
                    alt: " sif_401",
                    hoverText: "automate use for manage a lip system"
                  }
                ]}
              />
              </Typography>
          </div>

          <div id='auto' className={styles.panel}>
            <Panel
              titre="first unity pro xl project"
              txt="The aim of this automation project was to create a simulation in the Unity Pro XL software that sorts crates on an assembly line.
              We had three different coloured boxes: grey, green, and blue. When the system is started, a sensor detects the colour of each container and, if it matches, pushes it onto another assembly line, incrementing a counter for the matching crate. If no match is detected, the container moves on to the next sensor or to the end of the line. The line has an external emergency button for safety. We created a GRAFCET diagram and a ladder program, and finally developed an evaluation screen linked to the project."
            /> <Typography    className={styles.panelGrid}>
             <Img
              images={[
                {
                  src: auto1,
                  alt: "Cahier de projet",
                  hoverText: "operating screen "
                }
              ]}
            />
            <Img
              images={[
                {
                  src: isis,
                  alt: "Cahier de projet",
                  hoverText: "isis"
                }
              ]}
            />
            </Typography>
          </div>
          
         
          <div id='auto2' className={styles.panel}>
            <Panel
              titre="physical project"
              txt="The second automation project consisted of wiring an automation system to power. Connecting a button and a lamp. It may seem simple. But it was challenging for beginners. We also had to program a Unity automation system to use two components. My project involved a storage area. When a button was pressed, an assembly line pushed a box into a crane which moved to a selected area. When the area was empty, the crane deposited the box and the lamp light up."
            />
            <Img
              images={[
                {
                  src: auto2,
                  alt: "Cahier de projet",
                  hoverText: "branchement du bouton et de la lampe sur un bornier"
                }
              ]}
            />
           
          </div>
          
          <div id='auto3' className={styles.panel}>
            <Panel
              titre="Automation with PID and PWM"
              txt="As part of this project, we had to turn a heated LED on or off using two buttons (ON and OFF).
              Then, we regulated the temperature of the case to prevent it from overheating by operating two fans controlled by PWM (Pulse Width Modulation). We added a PID block (Proportional, Integral, Derivative) to control the fans’ speed based on the temperature. Finally, we configured an HMI for real-time visualization and interaction with the system."
            
            />
            <Typography    className={styles.panelGrid}>
             <Img
              images={[
                {
                  src: q1,
                  alt: "Cahier de projet",
                  hoverText: "page1 of the electronics plan"
                }
              ]}
            /> <Img
            images={[
              {
                src: q2,
                alt: "Cahier de projet",
                hoverText: "page2"
              }
            ]}
          /> <Img
          images={[
            {
              src: q3,
              alt: "Cahier de projet",
              hoverText: "page3"
            }
          ]}
        /> <Img
        images={[
          {
            src: q4,
            alt: "Cahier de projet",
            hoverText: "page4"
          }
        ]}
      />
             </Typography>
          </div>


          <div id='resindu' className={styles.panel}>
            <Panel
              titre="sensor traineeship"
              txt="one of the technocampus training courses that I carried out consisted of identifying sensors, analyzing their sign and searching for the operating point of the PID adjustment. I carried out tests on speed, flow and level sensors."
            />
            <Typography className={styles.panelGrid}> 
             <Img
              images={[
                {
                  src: Debit,
                  alt: "Cahier de projet",
                  hoverText: "debit workplace"
                }
              ]}
            />
            <Img
              images={[
                {
                  src: Niveau,
                  alt: "Cahier de projet",
                  hoverText: "level workplace"
                }
              ]}
            />
            <Img
              images={[
                {
                  src: vit,
                  alt: "Cahier de projet",
                  hoverText: "speed workplace"
                }
              ]}
            />
            </Typography>
          </div>
        </div>
      </div>
      
    </div>
  );
}