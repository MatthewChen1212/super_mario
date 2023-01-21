controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . . 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . . 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`層級1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
mySprite.ay = 350
scene.setBackgroundColor(9)
