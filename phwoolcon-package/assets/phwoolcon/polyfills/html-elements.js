window.HTMLElement || (HTMLElement = Element);
document.head || (document["head"] = document.getElementsByTagName("head")[0]);
/* https://developer.mozilla.org/pl/docs/Web/API/Element/matches */
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {
            }
            return i > -1;
        };
}
/* https://stackoverflow.com/a/27037567/802646 */
if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
        var element = this;
        while ((element = element.parentElement) && !element.matches(selector)) {
        }
        return element;
    };
}
