const txtAnim = document.querySelector('h2');
new Typewriter(txtAnim, {
 loop: true,
deleteSpeed:20
})
.changeDelay(20)
.typeString('je suis')
.pauseFor(100)
.typeString('<strong>,Développeuse web</strong>')
.pause(100)
.deleteChars(24)
.typeString('<span style="color: #27ae60">je maitrise: CSS</span> !')
.pauseFor(100)
.deleteChars(5)
.typeString('<span style="color: midnightblue"> HTML</span> !')
.pauseFor(100)
.deleteChars(8)
.typeString('<span style="color: #ea39ff"> PHP</span> !')
.pauseFor(100)
.deleteChars(5)
.typeString('<span style="color: #ff6910"> JavaScript</span> !')
.pauseFor(100)
.deleteChars(13)
.typeString('<span style="color: #0000FF"> SQL</span> !')
.pauseFor(100)
.deleteChars(5)
.typeString('<span style="color: #fd4910"> git</span> !')
.pauseFor(100)
.deleteChars(21)
.typeString('<strong>je suis, Développeuse mobile</strong>')
.pause(100)
.deleteChars(31)
.typeString('<span style="color: 	#4682B4">je maitrise: Android</span> !')
.pause(100)
.deleteChars(22)
.typeString('<strong>je suis, DesignerWeb</strong>')
.pause(100)
.deleteChars(20)
.typeString('<span style="color: #ff2910">je maitrise Photoshop</span> !')
.pause(100)
.deleteChars(23)
.typeString('<span style="color: #ff2950">je fait des maquettes(photoshop/pencil)</span> !')
.start()
