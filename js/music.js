//Open the form in Create mode
function openForm1() {
    $('.playlistList').hide();
    $('.playlist1').show();
}
function openForm2() {
    $('.playlistList').hide();
    $('.playlist2').show();
}
function openForm3() {
    $('.playlistList').hide();
    $('.playlist3').show();
}
function openForm4() {
    $('.playlistList').hide();
    $('.playlist4').show();
}
function openForm5() {
    $('.playlistList').hide();
    $('.playlist5').show();
}
function openForm6() {
    $('.playlistList').hide();
    $('.playlist6').show();
}
function openForm7() {
    $('.playlistList').hide();
    $('.playlist7').show();
}
function openForm8() {
    $('.playlistList').hide();
    $('.playlist8').show();
}
function openForm9() {
    $('.playlistList').hide();
    $('.playlist9').show();
}

// Close the Form
function closeForm() {
    $('.playlistList').show();
    $('.playlist1').hide();
    $('.playlist2').hide();
    $('.playlist3').hide();
    $('.playlist4').hide();
    $('.playlist5').hide();
    $('.playlist6').hide();
    $('.playlist7').hide();
    $('.playlist8').hide();
    $('.playlist9').hide();
}

// Lyrics Section Start
function lyrics1_1() {
    var musicList = {
        "lyrics": [
            { "line": "", "time": -1 },
            { "line": "ขอมือเธอหน่อย", "note": "Chorus", "time": 6000 },
            { "line": "ไว้คอยกระชับให้ชื่นใจ", "time": 9000 },
            { "line": "ขอมองตาหน่อย", "time": 13900 },
            { "line": "ไว้คอยให้เตือนเมื่อเหงาใจ", "time": 17000 },
            { "line": "ขอใจเธอหน่อย", "time": 21500 },
            { "line": "ไว้คอยเป็นแรงผลักดันฝันอันยิ่งใหญ่", "time": 25000 },
            { "line": "หากมีหัวใจของเธอ ", "time": 30500 },
            { "line": "ก็สุขเกินพอ", "time": 33000 },

            { "line": "", "time": 36000 },
            { "line": "อยากจะจับมือกับเธอ", "note": "Verse 2", "time": 37900 },
            { "line": "จับมือกับเธอสักครั้ง", "time": 41500 },
            { "line": "จับมือให้ฉันไม่เคว้งไม่คว้าง", "time": 45500 },
            { "line": "และไม่เปล่าเปลี่ยวเกินไป", "time": 49000 },
            { "line": " อยากจะสบตากับเธอ", "time": 53000 },
            { "line": "สบตากับเธอต่อไป", "time": 57000 },
            { "line": "อยากจะเก็บแววแห่งความเข้าใจ", "time": 61000 },
            { "line": "เอาไว้อบอุ่นนานนาน", "time": 64500 },

            { "line": "", "time": 67900 },
            { "line": "ขอมือเธอหน่อย ไว้คอยกระชับให้ชื่นใจ", "note": "Chorus", "time": 68100 },
            { "line": "ขอมองตาหน่อย ไว้คอยให้เตือนเมื่อเหงาใจ", "time": 75900 },
            { "line": "ขอใจเธอหน่อย ไว้คอยเป็นแรงผลักดันฝันอันยิ่งใหญ่", "time": 83600 },
            { "line": "หากมีหัวใจของเธอ ก็สุขเกินพอ", "time": 92400 },

            { "line": "", "time": 97500 },
            { "line": "อยากจะจับมือกับเธอ จับมือให้เธอแน่ใจ", "note": "Verse 3", "time": 99500 },
            { "line": "อยากที่จะยืนกับเธอต่อไป และพบสิ่งใหม่ดีดี…", "time": 107500 },

            { "line": "", "time": 113900 },
            { "line": "ขอมือเธอหน่อย ไว้คอยกระชับให้ชื่นใจ", "note": "Chorus", "time": 114500 },
            { "line": "ขอมองตาหน่อย ไว้คอยให้เตือนเมื่อเหงาใจ", "time": 122000 },
            { "line": "ขอใจเธอหน่อย ไว้คอยเป็นแรงผลักดันฝันอันยิ่งใหญ่", "time": 130000 },
            { "line": "หากมีหัวใจของเธอ ก็สุขเกินพอ", "time": 138900 },

            { "line": "", "time": 146000 },
            { "line": "ขอมือเธอหน่อย ไว้คอยกระชับให้ชื่นใจ", "note": "Chorus", "time": 176800 },
            { "line": "ขอมองตาหน่อย ไว้คอยให้เตือนเมื่อเหงาใจ", "time": 183890 },
            { "line": "ขอใจเธอหน่อย ไว้คอยเป็นแรงผลักดันฝันอันยิ่งใหญ่", "time": 192000 },
            { "line": "หากมีหัวใจของเธอ ก็สุขเกินพอ", "time": 200900 },
            { "line": "หากมีหัวใจของเธอ ก็สุขเกินพอ", "time": 208100 },
            { "line": "end", "time": 215100 }
        ]
    }
    sessionStorage.setItem("lyrics", JSON.stringify(musicList));
    localStorage.setItem("musicID", "0");
}

// Lyrics Section End