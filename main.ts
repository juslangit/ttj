scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (count == 1) {
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
        scaling.scaleByPercent(diver, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        count = 0
        sizeCount = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    count = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    scaling.scaleByPercent(diver, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    sizeCount = 0
    timer.after(500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
let cloud: Sprite = null
let sizeCount = 0
let count = 0
let diver: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
music.play(music.createSong(hex`0078000408020200001c00010a006400f401640000040000000000000000000000000005000004240000000400012a0c001000012510001400012018001c0001221c002000011d24002800012906001c00010a006400f4016400000400000000000000000000000000000000020600040008000124`), music.PlaybackMode.LoopingInBackground)
diver = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    2 . . 2 . d . . . 3 3 . . d 
    4 . . 4 . 4 . . . 3 3 3 . 4 
    4 . . 4 . 4 6 6 6 3 9 9 . 4 
    5 . . 5 . 4 4 4 6 5 d d 4 . 
    5 5 . 5 5 6 4 4 2 6 d 6 4 . 
    5 5 5 5 5 6 2 2 2 6 5 6 . . 
    . 5 5 5 5 5 6 6 6 5 5 . . . 
    `, SpriteKind.Player)
diver.setPosition(50, 0)
diver.setVelocity(0, 50)
scene.cameraFollowSprite(diver)
info.setLife(3)
count = 0
sizeCount = 0
for (let index = 0; index < 100; index++) {
    cloud = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 . . 1 1 1 1 1 1 1 . 
        . . 1 1 1 . . . . 1 1 1 . . . 
        `, SpriteKind.Enemy)
    cloud.setPosition(randint(scene.cameraProperty(CameraProperty.Left), 160), randint(100, 1400))
}
for (let index = 0; index < 10; index++) {
    cloud = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 4 4 4 4 4 2 . . . . 
        . . . . 2 4 5 5 5 4 2 . . . . 
        . . . . 2 4 5 2 5 4 2 . . . . 
        . . . . 2 4 5 5 5 4 2 . . . . 
        . . . . 2 4 4 4 4 4 2 . . . . 
        . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    cloud.setPosition(randint(scene.cameraProperty(CameraProperty.Left), 160), randint(0, 1400))
}
game.onUpdate(function () {
    controller.moveSprite(diver, 100, 0)
    if (sizeCount == 1) {
        count = 0
    }
})
