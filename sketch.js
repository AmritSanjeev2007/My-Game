

var engine , world, bodies
var player1, player2, player3, player4, ground

var wall1, wall2
var score = 0
var rand
var gameState
var PLAY = 0
var END = 1
var ObstacleGroup



function preload()
{
    Obstacle1 = loadImage("Obstacle1.png")
}
function setup(){
    createCanvas(500, 400)
    
    
    player1 = createSprite(200, 320, 20, 10)
    player2 = createSprite(100, 340, 20, 10)
    player3 = createSprite(300, 340, 20, 10)
    player4 = createSprite(400, 340, 20, 10)
    ObstacleGroup = new Group()
    
    ground = createSprite(10 , 360, 2000, 20)
    wall1 = createSprite(1 , 200, 1, 1000)
    wall2 = createSprite(500 , 200, 1, 1000)

    
    
    
}

function draw(){

    background(0)

    if(gameState === PLAY){
        frameRate = 0
        text("score = " + score , 30, 30)
        if(frameCount % 10 === 0){
            score = score + 1
        }
        if(keyDown("a")){
            player1.velocityX = -4
            
            
        }
        if(keyDown("d")){
           player1.velocityX = 4
          
           
       }
       if(player1.y < 340){
           player1.y = player1.y + 10
       }
       player1.collide(wall1)
       player1.collide(wall2)
       wall1.visible = false
       wall2.visible = false
       if(frameCount % 40 === 0){
        Spawn()
      }
           
        
    }
    
    //Engine.update(engine)
    
    
    if(gameState === END){
        text("Game Over", 200, 200)
        player1.destroy()
        player2.destroy()
        player3.destroy()
        player4.destroy()
        ground.destroy()

        text("press 'x' to try again" )

    }

    if(gameState === END && keyDown("x")){
        gameState = PLAY
    }
    

    
    
    
 
    
    
    

    
    
    drawSprites()
    //edges = createEdgeSprite()

    
    
    edges = createEdgeSprites()
    player1.bounceOff(edges)

        if(player1.isTouching(ObstacleGroup)){
            gameState = END
        }
        else if(player1.isTouching(ObstacleGroup)){
            gameState = END
        }
        else if(player1.isTouching(ObstacleGroup)){
            gameState = END
        }
        else if(player1.isTouching(ObstacleGroup)){
            gameState = END
        }
}


 



function Spawn()
{
    
    if(frameCount % 40 === 0){
        var Obstacle = createSprite(250, 1, 50, 20)
        Obstacle.velocityY = 4

        var rand = Math.round(random(1,6))
        switch(rand ){
          case 1 : Obstacle.addImage(Obstacle1)
          break
          case 2 : Obstacle.addImage(Obstacle1)
          break
          case 3 : Obstacle.addImage(Obstacle1)
          break
          case 4 : Obstacle.addImage(Obstacle1)
          break
          case 5 : Obstacle.addImage(Obstacle1)
          break
          case 6 : Obstacle.addImage(Obstacle1)
          break
        }
       ObstacleGroup.add(Obstacle)        
        
    }
        
        

        
        
       
    }
    
     




