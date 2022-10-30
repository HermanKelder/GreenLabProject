var PersonalizationTracker = null;
(function () {
    "use strict";

    PersonalizationTracker = {
        _canTrack: false,
        _pageId: null,
        _url: false,
        track: function (canTrack) {
            PersonalizationTracker._canTrack = canTrack;
            if (PersonalizationTracker._canTrack) {
                var sessionStart = PersonalizationTracker._readCookie("sf-prs-ss");
                if (!sessionStart) {
                    var ticks = Date.now() * 10000 + 621355968000000000;
                    PersonalizationTracker._createCookie("sf-prs-ss", ticks);
                }

                var landingUrl = PersonalizationTracker._readCookie("sf-prs-lu");
                if (!landingUrl) {
                    var wnd = window.top || window;
                    PersonalizationTracker._createCookie("sf-prs-lu", wnd.location.href);
                }

                if (PersonalizationTracker._pageId) {
                    PersonalizationTracker.trackPage(PersonalizationTracker._pageId);
                }

                if (PersonalizationTracker._url) {
                    PersonalizationTracker.trackUrl();
                }
            }
            else {
                // delete cookies
                PersonalizationTracker._createCookie("sf-prs-ss", "", -1);
                PersonalizationTracker._createCookie("sf-prs-lu", "", -1);
                PersonalizationTracker._createCookie("sf-prs-vp", "", -1);
                PersonalizationTracker._createCookie("sf-prs-vu", "", -1);
            }
        },

        trackPage: function (pageId) {
            this._pageId = pageId.replace(/-/g, "").toLowerCase();
            if (this._canTrack) {

                var visitedPages = this._readCookie("sf-prs-vp") || "";
                if (visitedPages) {
                    visitedPages = this._base64ToHex(visitedPages);
                }

                var guids = visitedPages.match(/.{1,32}/g) || [],
                    exists = false;

                for (var i = 0; i < guids.length; i++) {
                    if (guids[i] === this._pageId) {
                        exists = true;
                        break;
                    }
                }

                if (!exists) {
                    if (guids.length > 49) {
                        guids = guids.slice(guids.length - 49, guids.length);
                    }

                    guids.push(this._pageId);

                    visitedPages = guids.join("");
                    visitedPages = this._hexToBase64(visitedPages);

                    this._createCookie("sf-prs-vp", visitedPages);
                }
            }
        },

        trackUrl: function () {
            var wnd = window.top || window,
                url = wnd.location.href,
                hashtagIndex = url.indexOf("#");

            if (hashtagIndex > -1)
                url = urs.substring(0, hashtagIndex);

            this._url = url;

            if (this._canTrack) {

                var visitedUrls = this._readCookie("sf-prs-vu") || "";

                if (visitedUrls) {
                    visitedUrls = this._lzwDecode(visitedUrls);
                }

                var urls = visitedUrls.split("#") || [],
                    exists = false;

                for (var i = 0; i < urls.length; i++) {
                    if (urls[i] === this._url) {
                        exists = true;
                        break;
                    }
                }

                if (!exists) {
                    urls.push(this._url);
                    visitedUrls = urls.join("#");

                    if (visitedUrls.indexOf("#") === 0)
                        visitedUrls = visitedUrls.substring(1);

                    visitedUrls = this._lzwEncode(visitedUrls);

                    while (visitedUrls.length > 1000) {
                        if (urls.length < 2) {
                            //too long URL
                            return;
                        }

                        urls = urls.slice(1, urls.length);
                        visitedUrls = urls.join("#");

                        if (visitedUrls.indexOf("#") === 0)
                            visitedUrls = visitedUrls.substring(1);
                        visitedUrls = this._lzwEncode(visitedUrls);
                    }

                    this._createCookie("sf-prs-vu", visitedUrls);
                }
            }
        },

        _createCookie: function (name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/;SameSite=Lax";
        },

        _readCookie: function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        _hexToBase64: function(str) {
            return btoa(String.fromCharCode.apply(null,
                str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
            );
        },

        _base64ToHex: function (str) {
            for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
                var tmp = bin.charCodeAt(i).toString(16);
                if (tmp.length === 1) tmp = "0" + tmp;
                hex[hex.length] = tmp;
            }
            return hex.join("");
        },

        _lzwEncode: function(input) {
            var dictionary = {},
                inputArray = (input || "").split(""),
                currentChar,
                currentPhrase = inputArray[0],
                code = 256,
                result = [];

            for (var i = 1; i < inputArray.length; i++) {
                currentChar = inputArray[i];
                if (dictionary[currentPhrase + currentChar] != null) {
                    currentPhrase += currentChar;
                }
                else {
                    result.push(currentPhrase.length > 1 ? dictionary[currentPhrase] : currentPhrase.charCodeAt(0));
                    dictionary[currentPhrase + currentChar] = code;
                    currentPhrase = currentChar;

                    code++;
                }
            }

            result.push(currentPhrase.length > 1 ? dictionary[currentPhrase] : currentPhrase.charCodeAt(0));

            for (var i = 0; i < result.length; i++) {
                result[i] = String.fromCharCode(result[i]);
            }

            return result.join("");
        },

        _lzwDecode: function(s) {
            var dictionary = {},
                inputArray = (s || "").split(""),
                currentChar = inputArray[0],
                oldPhrase = currentChar,
                code = 256,
                phrase,
                result = [currentChar];

            for (var i = 1; i < inputArray.length; i++) {
                var currentCode = inputArray[i].charCodeAt(0);
                if (currentCode < 256) {
                    phrase = inputArray[i];
                }
                else {
                    phrase = dictionary[currentCode] ? dictionary[currentCode] : (oldPhrase + currentChar);
                }
                result.push(phrase);

                currentChar = phrase.charAt(0);
                dictionary[code] = oldPhrase + currentChar;
                oldPhrase = phrase;

                code++;
            }

            return result.join("");
        }
    };

    if (window.TrackingConsentManager) {
        TrackingConsentManager.addEventListener("ConsentChanged", PersonalizationTracker.track);
        PersonalizationTracker.track(TrackingConsentManager.canTrackCurrentUser());
    }
    else {
        PersonalizationTracker.track(true);
    }
}());