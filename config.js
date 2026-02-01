// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Maud",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "💖 Veux tu être ma Valentine ? 💖 ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝','💋', '💗', '💓','💕'],  // Heart emojis
        bears: ['🧸', '🐻','🦄','💋','🌹']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Suis je l'homme le plus mignon qui existe sur cette Terre ?",                                    // First interaction
            yesBtn: "Oui et de très loin !",                                             // Text for "Yes" button
            noBtn: "Non, Mingi existe. ",                                               // Text for "No" button
            secretAnswer: "Tu es le second plus mignon derrière Rulli (qui est en plus trop fort!)."         // Secret hover message
        },
        second: {
            text: "A quel point tu as envie de venir vivre près de moi ?",                          // For the love meter
            startText: "Mon Dieu mais qu'est ce que je fais ?!",                                   // Text before the percentage
            nextBtn: "Direction vers la qestion finale...❤️"                                         // Text for the next button
        },
        third: {
            text: "Voudras-tu être ma Valentine le 14 février 2026 (et tous les 14 février suivants)? 🌹", // The big question!
            yesBtn: "Oui bien sûr! ❤️",                                             // Text for "Yes" button
            noBtn: "Non."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Depuis que je suis né, c'est mon rêve d'habiter Naillou, je suis la plus heureuse !! 🥰 😍 💕",  // Shows when they go past 5000%
        high: "Je n'arrive pas à attendre, tellement envie de venir en Ariège et de m'inscrire au TC Varilhes ! 🥰🤗⏳",              // Shows when they go past 1000%
        normal: "Trop hâte ! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Let's goooooooooo, tu fais de moi la personne la plus heureseuse de ce monde !!! 🎉💝💖💝💓",
        message: " Tu as gagné un cadeau, un calin bien chaud 🤗 et plein de bisous 😘 (et peut une surprise...🎁🤭)",
        emojis: "🎁💖🤗💝💋❤️😘💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dy1akoooo/video/upload/v1769964440/JuL_-_Toi_et_moi_2025_tgiqpn.mp3", // Music streaming URL 
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
