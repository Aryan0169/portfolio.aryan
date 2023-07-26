/* Verse 1 */
// I walked the streets under the moon's glow
// With every step, my heart started to echo
// Melodies danced in the whispers of the night
// Notes entwined, creating a symphonic flight

/* Chorus */
// Lost in the melody, I found my soul
// Music's embrace made me feel whole
// Harmonies embraced me in their serenade
// In this song of life, I'll never fade

/* Verse 2 */
// Each note became a brushstroke in the air
// Painting emotions, a canvas so rare
// Rhythms carried me like a gentle breeze
// A magical journey, the music would seize

/* Chorus */
// Lost in the melody, I found my soul
// Music's embrace made me feel whole
// Harmonies embraced me in their serenade
// In this song of life, I'll never fade

/* Bridge */
// And as the dawn approached with its light
// I carried the song through the day and night
// For in this melody, I've come alive
// Forever in its enchantment, I'll survive

/* Chorus */
// Lost in the melody, I found my soul
// Music's embrace made me feel whole
// Harmonies embraced me in their serenade
// In this song of life, I'll never fade

/* Verse 1 */
// Raindrops falling, a delicate dance they start
// Pitter-patter rhythm, playing on my heart
// Each drop a note, in this symphony of the skies
// Nature's orchestra, I'm mesmerized

/* Chorus */
// Dancing raindrops, a magical sight
// In their graceful rhythm, hearts take flight
// With every splash, a new refrain
// In the downpour's song, we find no pain

/* Verse 2 */
// Rooftops sing, as the rain cascades
// Joyful beats, in a serenade
// Let's twirl like leaves caught in the breeze
// And dance together, hearts at ease

/* Chorus */
// Dancing raindrops, a magical sight
// In their graceful rhythm, hearts take flight
// With every splash, a new refrain
// In the downpour's song, we find no pain

/* Bridge */
// The rain embraces, as we dance along
// A love so pure, it can't be wrong
// Our laughter blends with the melody
// A moment of bliss, forever in memory

/* Chorus */
// Dancing raindrops, a magical sight
// In their graceful rhythm, hearts take flight
// With every splash, a new refrain
// In the downpour's song, we find no pain

/* Verse 1 */
// Underneath the starry night's embrace
// We find solace in this tranquil space
// Celestial bodies, like notes on a grand scale
// A symphony of the universe, our tale

/* Chorus */
// Starlit serenade, a cosmic lullaby
// Whispers of galaxies, paint the sky
// In the moon's glow, our spirits soar
// A timeless dance, forevermore

/* Verse 2 */
// Constellations twinkle, as if to say
// We're all part of this astral ballet
// Hand in hand, we stroll through space
// In love's orbit, we find our place

/* Chorus */
// Starlit serenade, a cosmic lullaby
// Whispers of galaxies, paint the sky
// In the moon's glow, our spirits soar
// A timeless dance, forevermore

/* Bridge */
// A meteor's streak, a shooting star
// A wish we make, no matter how far
// Bound by love, we journey afar
// To the melody of a distant guitar

/* Chorus */
// Starlit serenade, a cosmic lullaby
// Whispers of galaxies, paint the sky
// In the moon's glow, our spirits soar
// A timeless dance, forevermore


document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();


        /*
        [Shape of You - Ed Sheeran]
        
        Verse 1:
        // The club isn't the best place to find a lover
        // So the bar is where I go
        // Me and my friends at the table doing shots
        // Drinking fast and then we talk slow
        
        Pre-Chorus:
        // Come over and start up a conversation with just me
        // And trust me, I'll give it a chance now
        // Take my hand, stop, put Van the Man on the jukebox
        // And then we start to dance, and now I'm singing like
        
        Chorus:
        // Girl, you know I want your love
        // Your love was handmade for somebody like me
        // Come on now, follow my lead
        // I may be crazy, don't mind me
        // Say, boy, let's not talk too much
        // Grab on my waist and put that body on me
        // Come on now, follow my lead
        // Come, come on now, follow my lead
        
        Verse 2:
        // I'm in love with the shape of you
        // We push and pull like a magnet do
        // Although my heart is falling too
        // I'm in love with your body
        // And last night you were in my room
        // And now my bedsheets smell like you
        // Every day discovering something brand new
        // I'm in love with your body
        
        Pre-Chorus:
        // Oh, I, oh, I, oh, I, oh, I
        // I'm in love with your body
        // Oh, I, oh, I, oh, I, oh, I
        // I'm in love with your body
        // Oh, I, oh, I, oh, I, oh, I
        // I'm in love with your body
        // Every day discovering something brand new
        // I'm in love with the shape of you
        
        Chorus:
        // Girl, you know I want your love
        // Your love was handmade for somebody like me
        // Come on now, follow my lead
        // I may be crazy, don't mind me
        // Say, boy, let's not talk too much
        // Grab on my waist and put that body on me
        // Come on now, follow my lead
        // Come, come on now, follow my lead
        
        Bridge:
        // I'm in love with your body
        // Come on, be my baby, come on
        // Come on, be my baby, come on
        // I'm in love with your body
        // Come on, be my baby, come on
        // Come on, be my baby, come on
        // I'm in love with your body
        // Every day discovering something brand new
        // I'm in love with the shape of you
        
        Chorus:
        // Girl, you know I want your love
        // Your love was handmade for somebody like me
        // Come on now, follow my lead
        // I may be crazy, don't mind me
        // Say, boy, let's not talk too much
        // Grab on my waist and put that body on me
        // Come on now, follow my lead
        // Come, come on now, follow my lead
        
        Outro:
        // I'm in love with the shape of you
        // Come on, be my baby, come on
        // Come on, be my baby, come on now
        // I'm in love with the shape of you
        // I'm in love with your body
        // Come on, be my baby, come on
        // Come on, be my baby, come on now
        // I'm in love with the shape of you
        
        */

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        /*
[Hotel Song - Regina Spektor]

Verse 1:
// Me, I'm the picturesque retired drug dealer
// We play cards in the break room
// Me, I'm the literary croupier
// We play Charades in the evening

Pre-Chorus:
// I swear to God I'd never heard such a racket
// You can't make a record if you got nothing to say
// You can't make a record if you got nothing to say

Chorus:
// The moon's a skull, I think it's grinning
// The room is full of people now I think it's spinning
// There's nothing to lose, it's only winning
// In this hotel room, the hotel room, only hotel room
// With you, only with you

Verse 2:
// Me, I'm the manufacturer of plastic
// We got plastics in the break room
// Me, I'm the tablecloth's second cousin
// We got linen in the evening

Pre-Chorus:
// I swear to God I'd never heard such a racket
// You can't make a record if you got nothing to say
// You can't make a record if you got nothing to say

Chorus:
// The moon's a skull, I think it's grinning
// The room is full of people now I think it's spinning
// There's nothing to lose, it's only winning
// In this hotel room, the hotel room, only hotel room
// With you, only with you

Bridge:
// The maids come around too much
// There's pointless collisions
// There's people wanting to be noticed
// They're in their costumes
// And all the players, all the lovers
// All the prayers, all the lovers
// All the players, all the lovers
// In the only hotel room, in the only hotel room
// With you

Verse 3:
// Me, I'm a fly on a wall
// We all know what flies are for
// Me, I'm a fly in a suit
// We all know what suits are for

Pre-Chorus:
// I swear to God I'd never heard such a racket
// You can't make a record if you got nothing to say
// You can't make a record if you got nothing to say

Chorus:
// The moon's a skull, I think it's grinning
// The room is full of people now I think it's spinning
// There's nothing to lose, it's only winning
// In this hotel room, the hotel room, only hotel room
// With you, only with you

Outro:
// With you, only with you
// With you, only with you

*/

        if (username === "aryan123" && password === "aryan123") {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = "file.html";
        } else {
            errorMessage.style.display = "block";
        }
        /*
[ME! - Taylor Swift ft. Brendon Urie]

Verse 1:
// I promise that you'll never find another like me
// I know that I'm a handful, baby, uh
// I know I never think before I jump
// And you're the kind of guy the ladies want
// (And there's a lot of cool chicks out there)
// I know that I went psycho on the phone
// I never leave well enough alone
// And trouble's gonna follow where I go
// (And there's a lot of cool chicks out there)

Chorus:
// But one of these things is not like the others
// Like a rainbow with all of the colors
// Baby doll, when it comes to a lover
// I promise that you'll never find another like

Verse 2:
// Me-e-e, ooh-ooh-ooh-ooh
// I'm the only one of me
// Baby, that's the fun of me
// Eeh-eeh-eeh, ooh-ooh-ooh-ooh
// You're the only one of you
// Baby, that's the fun of you
// And I promise that nobody's gonna love you like me-e-e

Verse 3:
// I know I tend to make it about me
// I know you never get just what you see
// But I will never bore you, baby
// (And there's a lot of lame guys out there)
// And when we had that fight out in the rain
// You ran after me and called my name
// I never wanna see you walk away
// (And there's a lot of lame guys out there)

Chorus:
// 'Cause one of these things is not like the others
// Living in winter, I am your summer
// Baby doll, when it comes to a lover
// I promise that you'll never find another like

Bridge:
// Me-e-e, ooh-ooh-ooh-ooh
// I'm the only one of me
// Let me keep you company
// Eeh-eeh-eeh, ooh-ooh-ooh-ooh
// You're the only one of you
// Baby, that's the fun of you
// And I promise that nobody's gonna love you like me-e-e

Chorus:
// Me-e-e, ooh-ooh-ooh-ooh
// I'm the only one of me
// Baby, that's the fun of me
// Eeh-eeh-eeh, ooh-ooh-ooh-ooh
// You're the only one of you
// Baby, that's the fun of you
// And I promise that nobody's gonna love you like me-e-e

Outro:
// Girl, that's the fun of me
// Eeh-eeh-eeh, ooh-ooh-ooh-ooh
// Rainbow with all of the colors
// Baby doll, when it comes to a lover
// I promise that you'll never find another like me-e-e

*/
    });

