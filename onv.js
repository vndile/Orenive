/*
 Orenive v1.0
 *    Homepage: http://onv.vndile.com/
 * 	  Create by: ONV & VN Dile
 *	  Licensed under MIT 
 * 	  http://onv.vndile.com/lisence/
*/
if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

;
(function(window, document) {
    var version = '3.7.3';

    var options = window.html5 || {};

    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

    var supportsHtml5Styles;

    var expando = '_html5shiv';

    var expanID = 0;

    var expandoData = {};

    var supportsUnknownElements;

    (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                (document.createElement)('a');
                var frag = document.createDocumentFragment();
                return (
                    typeof frag.cloneNode == 'undefined' ||
                    typeof frag.createDocumentFragment == 'undefined' ||
                    typeof frag.createElement == 'undefined'
                );
            }());
        } catch (e) {
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
        }

    }());

    function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
    }

    function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
    }

    function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if (typeof elements != 'string') {
            elements = elements.join(' ');
        }
        if (typeof newElements != 'string') {
            newElements = newElements.join(' ');
        }
        html5.elements = elements + ' ' + newElements;
        shivDocument(ownerDocument);
    }

    function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
    }

    function createElement(nodeName, ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if (supportsUnknownElements) {
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
    }

    function createDocumentFragment(ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if (supportsUnknownElements) {
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for (; i < l; i++) {
            clone.createElement(elems[i]);
        }
        return clone;
    }

    function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }

        ownerDocument.createElement = function(nodeName) {
            if (!html5.shivMethods) {
                return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
            'var n=f.cloneNode(),c=n.createElement;' +
            'h.shivMethods&&(' +
            getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
                data.createElem(nodeName);
                data.frag.createElement(nodeName);
                return 'c("' + nodeName + '")';
            }) +
            ');return n}'
        )(html5, data.frag);
    }

    function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                'mark{background:#FF0;color:#000}' +
                'template{display:none}'
            );
        }
        if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
        }
        return ownerDocument;
    }

    var html5 = {

        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

        'version': version,

        'shivCSS': (options.shivCSS !== false),

        'supportsUnknownElements': supportsUnknownElements,

        'shivMethods': (options.shivMethods !== false),

        'type': 'default',

        'shivDocument': shivDocument,

        createElement: createElement,

        createDocumentFragment: createDocumentFragment,

        addElements: addElements
    };

    window.html5 = html5;

    shivDocument(document);

    if (typeof module == 'object' && module.exports) {
        module.exports = html5;
    }

}(typeof window !== "undefined" ? window : this, document));

/** --ONV-- **/
$(document).ready(function() {
    var onv = {
        custom: {
            alert: {
                timeClose: 800
            },
            collapse: {
                timeClose: 800
            },
            tab: {
                timeClose: 800
            }
        },
        dom: {
            log: function(e) {
                console.log(e);
            }
        },
        load: function() {
            /*! @alert */
            $('.alert').prepend('<div class="alert-btn-close">x</div>');
            $('.alert-btn-close').click(function(e) {
                $(this).parent().fadeOut(onv.custom.alert.timeClose);
                e.preventDefault();
                return false;
            });
            /*@pagination*/
            $('.pagination').prepend('<a class="pagination-prev">«</a>');
            $('.pagination').append('<a class="pagination-next">»</a>');
            /*@collapse*/
            $('.collapse-content').hide();
            $('.collapse-title').click(function(e) {
                $(this).parent().children('.collapse-content').slideToggle(onv.custom.collapse.timeClose);
                e.preventDefault();
                return false;
            });
            /*@tab*/
            $('.tab > .tab-content > *').hide();
            $('.tab > .tab-content > *:first-child').show();
            $('.tab > .tab-menu > ul > li:first-child > a').addClass('active');
            $('.tab > .tab-menu > ul > li > a').click(function(e) {
                var id = $(this).attr('href');
                $(this).parent().parent().children('li').children('a').removeClass('active');
                $(this).addClass('active');
                $(this).parent().parent().parent().parent().children('.tab-content').children('*').hide();
                $(this).parent().parent().parent().parent().children('.tab-content').children(id).fadeIn(onv.custom.tab.timeClose);
                e.preventDefault();
                return false;
            });
            /*@menu*/
            $('.menu').prepend('<svg class="menu-mobile-img" width="50" height="50" xmlns="http://www.w3.org/2000/svg"><title>Menu icon - WRD</title><g><title>Icon layer</title><rect fill="#ffffff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="5" y="8" width="40" height="6" id="svg_1"></rect><rect fill="#ffffff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="5" y="21.75" width="40" height="6" id="svg_2"></rect><rect fill="#ffffff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="5" y="35.25" width="40" height="6" id="svg_3"></rect></g></svg><!--[if lt IE 9]><img class="menu-mobile-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA4UlEQVRoQ+2YURKCMAxE2ZOpJ1dPFv+tTFrYLk66fIcNfa9DA9iKXCiyjs0L+TeTNmIjkwjU3loREZPAUWIBNAJ+GvFCKLzzEBvJGWkr1jOi5cvpVvsc4TDSptiIlnfezUZyRtqKvVnrpn2MsW4A3t93eGgcY8itXm9E8fcIdwftpo1srZfomQ61AXDvemsdSr/4Jp/sFwto2tuIjUwiUHtrRcRzEjhKLIBH1zniEYXCOw8ZGVH8Nz7neb5iSSPNdHmeIy8BQDOd1z5HeOx0STaiY93XyUb6OOmqbETHuq/TB6/eUDPaHSccAAAAAElFTkSuQmCC" /><![endif]-->');
            $('.menu-mobile-img').click(function() {
                $(this).parent().children('ul').slideToggle();
            });
        },
        run: function() {
            if (typeof jQuery !== 'undefined') {
                onv.load();
            }
        }
    };

    onv.run();
});