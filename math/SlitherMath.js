(function(Yc) {
        function R(a, b) {
            function c() {}
            c.prototype = a;
            var d = new c,
                e;
            for (e in b) d[e] = b[e];
            b.toString !== Object.prototype.toString && (d.toString = b.toString);
            return d
        }

        function ea(a, b) {
            if (null == b) return null;
            null == b.__id__ && (b.__id__ = Ad++);
            var c;
            null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
            null == c && (c = function() {
                return c.method.apply(c.scope, arguments)
            }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
            return c
        }
        var s = {},
            F = function() {
                return S.__string_rec(this, "")
            },
            C = function() {};
        s.ApplicationMain = C;
        C.__name__ = ["ApplicationMain"];
        C.loadEmbed = function(a) {
            C.embeds = (null != C.embeds ? C.embeds : 0) + 1;
            var b = null,
                b = function(c) {
                    a.removeEventListener("load", b);
                    0 == --C.embeds && C.preload()
                };
            a.addEventListener("load", b)
        };
        C.main = function() {
            null != C.embeds && 0 != C.embeds || C.preload()
        };
        C.preload = function() {
            for (var a = C.bytesLoaded = C.totalBytes = 0, b = C.AssetBytes; a < b.length;) {
                var c = b[a];
                ++a;
                C.totalBytes += c
            }
            C.completed = 0;
            C.loaders = new X;
            C.urlLoaders = new X;
            C.total = 0;
            H.get_current().loaderInfo = kb.create(null);
            H.get_stage().set_frameRate(60);
            H.get_current().addChild(C.preloader = new za);
            C.preloader.onInit();
            C.loadFile("assets/GameFont.png");
            C.loadFile("assets/Objects.png");
            a = 0;
            for (b = Ra.listNames(); a < b.length;) c = b[a], ++a, ma.startsWith(c, "NME_:bitmap_") && (c = U.resolveClass(ma.replace(c.substring(12), "_", ".")), null != c && (C.total++, U.createInstance(c, [0, 0, !0, 16777215, C.bitmapClass_onComplete])));
            if (0 != C.total) {
                C.loaderStack = [];
                for (a = C.loaders.keys(); a.hasNext();) b = a.next(), C.loaderStack.push(b);
                C.urlLoaderStack = [];
                for (a = C.urlLoaders.keys(); a.hasNext();) b = a.next(), C.urlLoaderStack.push(b);
                for (a = 0; 8 > a;) a++, C.nextLoader()
            } else C.begin()
        };
        C.nextLoader = function() {
            if (0 != C.loaderStack.length) {
                var a = C.loaderStack.shift(),
                    b = C.loaders,
                    b = null != O[a] ? b.getReserved(a) : b.h[a];
                b.contentLoaderInfo.addEventListener("complete", C.loader_onComplete);
                b.load(new Eb(a))
            } else 0 != C.urlLoaderStack.length && (a = C.urlLoaderStack.shift(), b = C.urlLoaders, b = null != O[a] ? b.getReserved(a) : b.h[a], b.addEventListener("complete", C.loader_onComplete),
                b.load(new Eb(a)))
        };
        C.loadFile = function(a) {
            var b = C.loaders,
                c = new ac;
            null != O[a] ? b.setReserved(a, c) : b.h[a] = c;
            C.total++
        };
        C.begin = function() {
            C.preloader.addEventListener("complete", C.preloader_onComplete);
            C.preloader.onLoaded()
        };
        C.bitmapClass_onComplete = function(a) {
            C.completed++;
            (null == a ? null : S.getClass(a)).preload = a;
            C.completed == C.total && C.begin()
        };
        C.loader_onComplete = function(a) {
            C.completed++;
            C.bytesLoaded += C.AssetBytes[C.AssetNames.indexOf(a._target.url)];
            C.preloader.onUpdate(C.bytesLoaded, C.totalBytes);
            C.completed == C.total ? C.begin() : C.nextLoader()
        };
        C.preloader_onComplete = function(a) {
            C.preloader.removeEventListener("complete", C.preloader_onComplete);
            H.get_current().removeChild(C.preloader);
            C.preloader = null;
            null == Fb.main ? (a = new Gb, S.__instanceof(a, Fa) && H.get_current().addChild(a)) : Fb.main()
        };
        var Sb = function() {};
        s["openfl.events.IEventDispatcher"] = Sb;
        Sb.__name__ = ["openfl", "events", "IEventDispatcher"];
        Sb.prototype = {
            __class__: Sb
        };
        var ta = function() {
            this.eventList = new X
        };
        s["openfl.events.EventDispatcher"] =
            ta;
        ta.__name__ = ["openfl", "events", "EventDispatcher"];
        ta.__interfaces__ = [Sb];
        ta.prototype = {
            addEventListener: function(a, b, c, d, e) {
                c = this.eventList;
                (null != O[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a)) ? (c = this.eventList, c = null != O[a] ? c.getReserved(a) : c.h[a]) : (d = c = [], e = this.eventList, null != O[a] ? e.setReserved(a, d) : e.h[a] = d);
                c.push(b)
            },
            removeEventListener: function(a, b, c) {
                c = this.eventList;
                if (null != O[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a)) {
                    c = this.eventList;
                    c = null != O[a] ? c.getReserved(a) : c.h[a];
                    for (var d =
                            0; d < c.length;) {
                        var e = c[d];
                        ++d;
                        if (Z.compareMethods(e, b)) {
                            J.remove(c, e);
                            break
                        }
                    }
                    0 == c.length && this.eventList.remove(a)
                }
            },
            hasEventListener: function(a) {
                var b = this.eventList;
                return null != O[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)
            },
            dispatchEvent: function(a) {
                null == a.get_target() && a.set_target(this);
                a.set_currentTarget(this);
                var b = a.type,
                    c = this.eventList;
                if (null != O[b] ? c.existsReserved(b) : c.h.hasOwnProperty(b))
                    for (c = this.eventList, b = null != O[b] ? c.getReserved(b) : c.h[b], c = 0; c < b.length;) {
                        var d = b[c];
                        d(a);
                        b[c] ==
                            d && ++c
                    }
                return !0
            },
            __class__: ta
        };
        var Va = function() {
            this.eventList = new X;
            this.eventMap = new Oa
        };
        s["openfl.events.EventWrapper"] = Va;
        Va.__name__ = ["openfl", "events", "EventWrapper"];
        Va.__super__ = ta;
        Va.prototype = R(ta.prototype, {
            addEventListener: function(a, b, c, d, e) {
                null == e && (e = !1);
                null == d && (d = 0);
                null == c && (c = !1);
                var p = this;
                ta.prototype.addEventListener.call(this, a, b, c, d, e);
                d = function(a) {
                    a.get_target() == p.component && a.set_target(p);
                    a.set_currentTarget(p);
                    b(a)
                };
                null == this.eventMap.h.__keys__[b.__id__] && this.eventMap.set(b,
                    d);
                this.component.addEventListener(a, d, c)
            },
            removeEventListener: function(a, b, c) {
                null == c && (c = !1);
                ta.prototype.removeEventListener.call(this, a, b, c);
                null != this.eventMap.h.__keys__[b.__id__] && (this.component.removeEventListener(a, this.eventMap.h[b.__id__], c), this.eventMap.remove(b))
            },
            __class__: Va
        });
        var Fa = function() {
            this.rotation = this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
            this.visible = !0;
            Va.call(this);
            this.eventRemap = new X;
            null == this.component && (this.component = H.jsNode("div"));
            this.component.node = this;
            this.transform = new sc(this)
        };
        s["openfl.display.DisplayObject"] = Fa;
        Fa.__name__ = ["openfl", "display", "DisplayObject"];
        Fa.__super__ = Va;
        Fa.prototype = R(Va.prototype, {
            broadcastEvent: function(a) {
                this.dispatchEvent(a)
            },
            syncMtx: function() {
                var a = this.component.style,
                    b;
                !0 != this._syncMtx_set && (this._syncMtx_set = !0, H.setCSSProperties(a, "transform-origin", "0% 0%", 31));
                b = "";
                if (0 != this.x || 0 != this.y) b += "translate(" + this.x + "px, " + this.y + "px) ";
                if (1 != this.scaleX || 1 != this.scaleY) b += "scale(" + this.scaleX + ", " + this.scaleY +
                    ") ";
                0 != this.rotation && (b += "rotate(" + this.rotation + "deg) ");
                if (null != this.transform) {
                    var c = this.transform.get_matrix();
                    null == c || c.isIdentity() || (b += "matrix(" + c.a + ", " + c.b + ", " + c.c + ", " + c.d + ", " + c.tx + ", " + c.ty + ") ")
                }
                a.setProperty("transform", b, null);
                a.setProperty("-o-transform", b, null);
                a.setProperty("-ms-transform", b, null);
                a.setProperty("-moz-transform", b, null);
                a.setProperty("-webkit-transform", b, null)
            },
            set_x: function(a) {
                this.x != a && (this.x = a, this.syncMtx());
                return a
            },
            set_y: function(a) {
                this.y != a && (this.y =
                    a, this.syncMtx());
                return a
            },
            set_scaleX: function(a) {
                this.scaleX != a && (this.scaleX = a, this.syncMtx());
                return a
            },
            set_scaleY: function(a) {
                this.scaleY != a && (this.scaleY = a, this.syncMtx());
                return a
            },
            get_width: function() {
                return this.__width ? !0 : 0
            },
            get_height: function() {
                return this.__height ? !0 : 0
            },
            set_visible: function(a) {
                this.visible != a && (this.visible = a, this.component.style.display = a ? "" : "none");
                return a
            },
            get_stage: function() {
                return this.__stage
            },
            set_stage: function(a) {
                if (this.__stage != a) {
                    var b = null != this.__stage !=
                        (null != a);
                    this.__stage = a;
                    b && this.dispatchEvent(new fa(null != a ? "addedToStage" : "removedFromStage"))
                }
                return a
            },
            concatTransform: function(a) {
                this.transform.get_matrix().isIdentity() || a.concat(this.transform.get_matrix());
                0 != this.rotation && a.rotate(this.rotation * Math.PI / 180);
                1 == this.scaleX && 1 == this.scaleY || a.scale(this.scaleX, this.scaleY);
                0 == this.x && 0 == this.y || a.translate(this.x, this.y)
            },
            hitTestLocal: function(a, b, c, d) {
                return (!d || this.visible) && 0 <= a && 0 <= b && a <= this.get_width() ? b <= this.get_height() : !1
            },
            addEventListener: function(a,
                b, c, d, e) {
                null == e && (e = !1);
                null == d && (d = 0);
                null == c && (c = !1);
                Va.prototype.addEventListener.call(this, a, b, c, d, e)
            },
            broadcastMouse: function(a, b, c, d) {
                if (!this.visible) return !1;
                var e, p, f = a.length,
                    g;
                a.push(this);
                p = 0 < d.length ? d.pop() : new na;
                for (g = c.length; g <= f;) e = a[g], p.identity(), e.concatTransform(p), p.invert(), e = 0 < d.length ? d.pop() : new na, 0 < g ? e.copy(c[g - 1]) : e.identity(), e.concat(p), c.push(e), ++g;
                p.copy(c[f]);
                c = b.stageX * p.a + b.stageY * p.c + p.tx;
                f = b.stageX * p.b + b.stageY * p.d + p.ty;
                d.push(p);
                a.pop();
                return this.hitTestLocal(c,
                    f, !0, !0) ? (null == b.relatedObject && (b.localX = c, b.localY = f, b.relatedObject = this), this.dispatchEvent(b), !0) : !1
            },
            dispatchEvent: function(a) {
                var b = Va.prototype.dispatchEvent.call(this, a);
                if (b && a.bubbles) switch (a.type) {
                    case "middleClick":
                    case "middleMouseDown":
                    case "middleMouseUp":
                    case "mouseClick":
                    case "mouseDown":
                    case "mouseMove":
                    case "mouseOut":
                    case "mouseOver":
                    case "mouseUp":
                    case "mouseWheel":
                    case "rightClick":
                    case "rightMouseDown":
                    case "rightMouseUp":
                    case "touchBegin":
                    case "touchEnd":
                    case "touchMove":
                        var c =
                            this.parent;
                        null != c && c.dispatchEvent(a)
                }
                return b
            },
            __class__: Fa,
            __properties__: {
                get_height: "get_height",
                get_width: "get_width",
                set_y: "set_y",
                set_x: "set_x",
                set_scaleY: "set_scaleY",
                set_scaleX: "set_scaleX",
                set_visible: "set_visible",
                set_stage: "set_stage",
                get_stage: "get_stage"
            }
        });
        var Wa = function() {
            Fa.call(this);
            this.tabEnabled = !1;
            this.tabIndex = 0;
            this.mouseEnabled = this.doubleClickEnabled = !0
        };
        s["openfl.display.InteractiveObject"] = Wa;
        Wa.__name__ = ["openfl", "display", "InteractiveObject"];
        Wa.__super__ = Fa;
        Wa.prototype =
            R(Fa.prototype, {
                giveFocus: function() {
                    this.component.focus()
                },
                __class__: Wa
            });
        var ua = function() {
            Wa.call(this);
            this.children = [];
            this.mouseChildren = !0
        };
        s["openfl.display.DisplayObjectContainer"] = ua;
        ua.__name__ = ["openfl", "display", "DisplayObjectContainer"];
        ua.__super__ = Wa;
        ua.prototype = R(Wa.prototype, {
            addChild: function(a) {
                null != a.parent && a.parent.removeChild(a);
                a.parent = this;
                a.set_stage(this.get_stage());
                this.children.push(a);
                this.component.appendChild(a.component);
                var b = new fa("added");
                a.dispatchEvent(b);
                this.dispatchEvent(b);
                return a
            },
            removeChild: function(a) {
                if (a.parent == this) {
                    a.parent = null;
                    a.set_stage(null);
                    J.remove(this.children, a);
                    this.component.removeChild(a.component);
                    var b = new fa("removed");
                    a.dispatchEvent(b);
                    this.dispatchEvent(b)
                }
                return a
            },
            addChildAt: function(a, b) {
                return b < this.children.length ? (null != a.parent && a.parent.removeChild(a), a.parent = this, a.set_stage(this.get_stage()), this.component.insertBefore(a.component, this.children[b].component), this.children.splice(b, 0, a), a) : this.addChild(a)
            },
            broadcastEvent: function(a) {
                this.dispatchEvent(a);
                for (var b = 0, c = this.children; b < c.length;) {
                    var d = c[b];
                    ++b;
                    d.broadcastEvent(a)
                }
            },
            broadcastMouse: function(a, b, c, d) {
                if (!this.visible) return !1;
                var e = !1;
                if (this.mouseChildren) {
                    var p = this.children.length;
                    if (0 < p) {
                        for (a.push(this); 0 <= --p;)
                            if (this.children[p].broadcastMouse(a, b, c, d)) {
                                e = !0;
                                break
                            }
                        a.pop()
                    }
                }
                for (; c.length > a.length;) d.push(c.pop());
                for (e = e ? !0 : Wa.prototype.broadcastMouse.call(this, a, b, c, d); c.length > a.length;) d.push(c.pop());
                return e
            },
            hitTestLocal: function(a,
                b, c, d) {
                if (!d || this.visible) {
                    var e = this.children.length,
                        p, f;
                    if (0 < e) {
                        for (p = na.create(); 0 <= --e;)
                            if (p.identity(), f = this.children[e], f.concatTransform(p), p.invert(), f.hitTestLocal(a * p.a + b * p.c + p.tx, a * p.b + b * p.d + p.ty, c, d)) return !0;
                        na.pool.push(p)
                    }
                }
                return !1
            },
            set_stage: function(a) {
                Wa.prototype.set_stage.call(this, a);
                for (var b = 0, c = this.children; b < c.length;) {
                    var d = c[b];
                    ++b;
                    d.set_stage(a)
                }
                return a
            },
            __class__: ua
        });
        var Pa = function() {};
        s["openfl.display.IBitmapDrawable"] = Pa;
        Pa.__name__ = ["openfl", "display", "IBitmapDrawable"];
        Pa.prototype = {
            __class__: Pa
        };
        var Aa = function() {
            ua.call(this)
        };
        s["openfl.display.Sprite"] = Aa;
        Aa.__name__ = ["openfl", "display", "Sprite"];
        Aa.__interfaces__ = [Pa];
        Aa.__super__ = ua;
        Aa.prototype = R(ua.prototype, {
            get_graphics: function() {
                if (null == this._graphics) {
                    var a = new ub,
                        b = a.component;
                    a.set_displayObject(this);
                    0 == this.children.length ? this.component.appendChild(b) : this.component.insertBefore(b, this.children[0].component);
                    this._graphics = a
                }
                return this._graphics
            },
            set_stage: function(a) {
                var b = null == this.get_stage() &&
                    null != a;
                a = ua.prototype.set_stage.call(this, a);
                b && null != this._graphics && this._graphics.invalidate();
                return a
            },
            drawToSurface: function(a, b, c, d, e, p, f) {
                this.get_graphics().drawToSurface(a, b, c, d, e, p, f)
            },
            hitTestLocal: function(a, b, c, d) {
                if (ua.prototype.hitTestLocal.call(this, a, b, c, d)) return !0;
                if (!d || this.visible)
                    if (d = this._graphics, null != d) return d.hitTestLocal(a, b, c);
                return !1
            },
            __class__: Aa,
            __properties__: R(ua.prototype.__properties__, {
                get_graphics: "get_graphics"
            })
        });
        var l = function() {
            this.frameCount = this.Cnt =
                this.oldFrames = this.oldTime = 0;
            this.currentTimeStep = -1;
            this.timeAccumulator = 0;
            this.needsExtraScreenBMP = !1;
            if (!A.ShowBlank && (this.initSystemVariables(), ua.call(this), l.LockCheck())) {
                f.MinimumBMD = l.DontSplitBitmaps();
                this.initOzEngine();
                this.registerGraphics();
                G.trace("before expandtiles", {
                    fileName: "Main.hx",
                    lineNumber: 305,
                    className: "Main",
                    methodName: "new"
                });
                f.ExpandTiles(t.definitionsXML);
                G.trace("before sortinit", {
                    fileName: "Main.hx",
                    lineNumber: 307,
                    className: "Main",
                    methodName: "new"
                });
                x.SortIdsByName(f.BitmapsIds,
                    f.BitmapsNames);
                l.isMobile = this.MobileCheck();
                this.doc = f.New(null, null, !1);
                this.stateSprite = f.New(null, null, !1);
                this.debugSprite = f.New(null, null, !1);
                this.doc.addChild(this.stateSprite);
                this.doc.addChild(this.whiteRect = f.New(q.sysWhiteRect, null, !1));
                var a = this.whiteRect,
                    b = l.HEIGHT_MIN / 2;
                a.set_x(l.WIDTH_MIN / 2);
                a.set_y(b);
                this.whiteRect.set_visible(!1);
                this.whiteRect.smooth = !1;
                this.doc.addChild(this.debugSprite);
                this.debugText = f.New(null, W.TEXT, !1);
                this.debugText.font = y.Font;
                this.debugText.text = "FPS";
                this.debugSprite.addChild(this.debugText);
                this.debugSprite.set_visible(!1);
                this.doc.setFluid(66);
                H.get_current().get_stage().addEventListener("blur", l.Deactivate);
                H.get_current().get_stage().addEventListener("focus", l.Activate);
                H.get_current().get_stage().addEventListener("deactivate", l.Deactivate);
                H.get_current().get_stage().addEventListener("activate", l.Activate);
                window.onfocus = l.fnResume;
                window.onblur = l.fnPause;
                document.onfocusin = l.fnResume;
                document.onfocusout = l.fnPause;
                document.body.onfocusin =
                    l.fnResume;
                document.body.onfocusout = l.fnPause;
                var c, d;
                "undefined" !== typeof document.hidden ? (c = "hidden", d = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (c = "mozHidden", d = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (c = "msHidden", d = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (c = "webkitHidden", d = "webkitvisibilitychange");
                "undefined" !== typeof document.addEventListener && "undefined" !== typeof document[c] && document.addEventListener(d, function() {
                    document[c] ?
                        l.fnPause() : l.fnResume()
                }, !1);
                H.get_current().get_stage().addEventListener("enterFrame", ea(this, this.update));
                G.trace("before ext init", {
                    fileName: "Main.hx",
                    lineNumber: 454,
                    className: "Main",
                    methodName: "new"
                });
                G.trace("after ext init", {
                    fileName: "Main.hx",
                    lineNumber: 492,
                    className: "Main",
                    methodName: "new"
                })
            }
        };
        s.Main = l;
        l.__name__ = ["Main"];
        l.LockCheck = function() {
            return !0
        };
        l.RunGC = function() {};
        l.Deactivate = function(a) {
            l.fnPause()
        };
        l.Activate = function(a) {
            l.fnResume()
        };
        l.fnPause = function() {
            l.systemPaused || (l.systemPaused = !0, l.hadSound = !u.muteMusic, l.hadSound && u.ToggleMuteMusic(), G.trace("Screenbitmap.visible", {
                fileName: "Main.hx",
                lineNumber: 1008,
                className: "Main",
                methodName: "fnPause",
                customParams: [l.instance.ScreenBitmap.visible]
            }));
            tc.ScriptNotify("fnPause");
            G.trace("fnPause", {
                fileName: "Main.hx",
                lineNumber: 1012,
                className: "Main",
                methodName: "fnPause"
            })
        };
        l.fnResume = function() {
            l.systemPaused && (l.systemPaused = !1, l.hadSound && u.ToggleMuteMusic());
            tc.ScriptNotify("fnResume");
            G.trace("fnResume", {
                fileName: "Main.hx",
                lineNumber: 1020,
                className: "Main",
                methodName: "fnResume"
            })
        };
        l.escape = function() {
            null == l.instance || null == l.instance.whiteRect || l.instance.whiteRect.get_visible() || l.instance.s.escape()
        };
        l.DontSplitBitmaps = function() {
            var a = !1,
                b = !1,
                c = navigator.userAgent,
                a = -1 < c.indexOf("Android") && -1 < c.indexOf("Mozilla / 5.0") && -1 < c.indexOf("AppleWebKit"),
                b = -1 < c.indexOf("samsung") || -1 < c.indexOf("SAMSUNG") || -1 < c.indexOf("Samsung"),
                d = RegExp(/AppleWebKit\/([\d.]+)/),
                d = null === d.exec(c) ? null : parseFloat(d.exec(c)[1]),
                e = RegExp(/Chrome\/([\d.]+)/),
                c = null === e.exec(c) ? null : parseFloat(e.exec(c)[1]);
            return b ? !1 : a && null !== d && 537 > d || null !== c && 37 > c || !a ? null !== c ? !a : !1 : !0
        };
        l.__super__ = Aa;
        l.prototype = R(Aa.prototype, {
            initSystemVariables: function() {
                var a = null,
                    b = null;
                A.MainStarted = !0;
                l.NAME = "slither math";
                l.NAME = x.StringReplace(l.NAME, " ", "-");
                G.trace("NAME IS THIS", {
                    fileName: "Main.hx",
                    lineNumber: 129,
                    className: "Main",
                    methodName: "initSystemVariables",
                    customParams: [l.NAME]
                });
                l.PACKAGE_DIR_NAME = "com.ozdy.slithermath";
                l.PACKAGE_DIR_NAME = x.StringReplace(l.PACKAGE_DIR_NAME,
                    ".", "/");
                G.trace("NAME IS THIS", {
                    fileName: "Main.hx",
                    lineNumber: 132,
                    className: "Main",
                    methodName: "initSystemVariables",
                    customParams: [l.PACKAGE_DIR_NAME]
                });
                l.INTERPOLATE = !0;
                l.DEFAULT_SMOOTH = !0;
                b = "720";
                l.WIDTH = K.parseInt(b);
                a = "720";
                l.WIDTH_MIN = K.parseInt(a);
                null == b && (l.WIDTH = l.WIDTH_MIN);
                null == a && (l.WIDTH_MIN = l.WIDTH);
                a = "854";
                l.WIDTH_MAX = K.parseInt(a);
                null == a && (l.WIDTH_MAX = l.WIDTH);
                l.STARTING_WIDTH = l.WIDTH;
                b = "480";
                l.HEIGHT = K.parseInt(b);
                a = null;
                l.HEIGHT_MIN = K.parseInt(a);
                null == b && (l.HEIGHT = l.HEIGHT_MIN);
                null == a && (l.HEIGHT_MIN = l.HEIGHT);
                a = "854";
                l.HEIGHT_MAX = K.parseInt(a);
                null == a && (l.HEIGHT_MAX = l.HEIGHT);
                l.STARTING_HEIGHT = l.HEIGHT;
                a = "640";
                l.LANDSCAPE_WIDTH_MIN = K.parseInt(a);
                null == a && (l.LANDSCAPE_WIDTH_MIN = l.WIDTH_MIN);
                a = null;
                l.LANDSCAPE_WIDTH_MAX = K.parseInt(a);
                null == a && (l.LANDSCAPE_WIDTH_MAX = l.WIDTH_MAX);
                a = null;
                l.LANDSCAPE_HEIGHT = K.parseInt(a);
                null == a && (l.LANDSCAPE_HEIGHT = l.HEIGHT_MIN);
                a = "640";
                l.PORTRAIT_HEIGHT_MIN = K.parseInt(a);
                null == a && (l.PORTRAIT_HEIGHT_MIN = l.HEIGHT_MIN);
                a = null;
                l.PORTRAIT_HEIGHT_MAX =
                    K.parseInt(a);
                null == a && (l.PORTRAIT_HEIGHT_MAX = l.HEIGHT_MAX);
                a = "480";
                l.PORTRAIT_WIDTH = K.parseInt(a);
                null == a && (l.PORTRAIT_WIDTH = l.WIDTH_MIN);
                l.Orientation = l.HEIGHT_MIN < l.WIDTH_MIN ? vb.LANDSCAPE : vb.PORTRAIT;
                l.FPS = K.parseInt("30")
            },
            initOzEngine: function() {
                this.needsExtraScreenBMP = -1 < window.navigator.userAgent.toLowerCase().indexOf("iemobile");
                this.needsExtraScreenBMP || (this.needsExtraScreenBMP = -1 < window.navigator.userAgent.toLowerCase().indexOf("trident/"));
                this.needsExtraScreenBMP || (this.needsExtraScreenBMP =
                    "Microsoft Internet Explorer" == window.navigator.appName);
                this.ScreenBMD = new ia(l.WIDTH_MAX, l.HEIGHT_MAX, !0, 0);
                this.ScreenBitmap = new Sa(this.ScreenBMD, Xa.AUTO, !0);
                this.addChild(this.ScreenBitmap);
                this.ScreenBitmap.set_visible(!1);
                l.RESIZE_WIDTH = l.WIDTH;
                l.RESIZE_HEIGHT = l.HEIGHT;
                l.instance = this;
                G.trace("before inits", {
                    fileName: "Main.hx",
                    lineNumber: 263,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                n.Init(l.FPS);
                P.Init();
                G.trace("before globals", {
                    fileName: "Main.hx",
                    lineNumber: 268,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                t.Init();
                G.trace("before audio", {
                    fileName: "Main.hx",
                    lineNumber: 270,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                u.Init();
                G.trace("before input init", {
                    fileName: "Main.hx",
                    lineNumber: 272,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                h.Init(this);
                G.trace("before spriteinit", {
                    fileName: "Main.hx",
                    lineNumber: 274,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                f.StaticInit();
                G.trace("before particle init", {
                    fileName: "Main.hx",
                    lineNumber: 276,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                ca.StaticInit();
                G.trace("before matrixinit", {
                    fileName: "Main.hx",
                    lineNumber: 278,
                    className: "Main",
                    methodName: "initOzEngine"
                });
                T.InitPool();
                oa.Init()
            },
            registerGraphics: function() {},
            start: function() {
                this.needsExtraScreenBMP ? (this.extraScreenBMP = new Sa(new ia(this.ScreenBMD.component.width, this.ScreenBMD.component.height)), this.addChild(this.extraScreenBMP), this.extraRect = new pa(0, 0, this.ScreenBMD.component.width, this.ScreenBMD.component.height), this.extraPoint = new xa) : this.ScreenBitmap.set_visible(!0);
                G.trace("we start", {
                    fileName: "Main.hx",
                    lineNumber: 522,
                    className: "Main",
                    methodName: "start"
                });
                u.needsAudio && H.get_current().get_stage().addEventListener("mouseDown", u.HTML5Init);
                G.trace("after audio init start", {
                    fileName: "Main.hx",
                    lineNumber: 535,
                    className: "Main",
                    methodName: "start"
                });
                this.transitionChangeState(new E(this), 15);
                (new wb(1E3)).run = ea(this, this.measureFPS);
                var a = f.GetMCByString("cmcRotateDeviceSprite");
                null != a ? this.doc.addChild(this.rotateDeviceSprite = f.New(a, null, !1)) : this.doc.addChild(this.rotateDeviceSprite = f.New(null, W.EMPTY, !1));
                G.trace("cmcRotateDeviceSprite", {
                    fileName: "Main.hx",
                    lineNumber: 561,
                    className: "Main",
                    methodName: "start",
                    customParams: [a]
                });
                this.rotateDeviceSprite.set_visible(!1);
                H.get_current().get_stage().addEventListener("resize", ea(this, this.onResize));
                u.PlayMusic("main");
                G.trace("after music play", {
                    fileName: "Main.hx",
                    lineNumber: 569,
                    className: "Main",
                    methodName: "start"
                });
                G.trace("## Need Extra Screen BMD?", {
                    fileName: "Main.hx",
                    lineNumber: 572,
                    className: "Main",
                    methodName: "start",
                    customParams: [this.needsExtraScreenBMP]
                });
                G.trace("## Minimum BMD? If not - flush-fetch bmd for r/s/a/fill", {
                    fileName: "Main.hx",
                    lineNumber: 573,
                    className: "Main",
                    methodName: "start",
                    customParams: [f.MinimumBMD]
                });
                this.doc.adjustAllLayouts()
            },
            onResize: function(a) {
                G.trace("we resize, event is null", {
                    fileName: "Main.hx",
                    lineNumber: 581,
                    className: "Main",
                    methodName: "onResize",
                    customParams: [null == a]
                });
                l.hasResized = !0;
                ga.resize();
                a = this.whiteRect;
                var b = 1 * (l.WIDTH + 5),
                    c = this.whiteRect,
                    c = 1 == c.type[1] ? f.TilesheetFrames[c.mc.tilesheetId][c.mc.frames[c.get_currentFrame() - 1]][2] : 1;
                a.set_scaleX(b / c);
                a = this.whiteRect;
                b = 1 * (l.HEIGHT +
                    5);
                c = this.whiteRect;
                c = 1 == c.type[1] ? f.TilesheetFrames[c.mc.tilesheetId][c.mc.frames[c.get_currentFrame() - 1]][3] : 1;
                a.set_scaleY(b / c);
                null != this.s && this.s.resize();
                null != this.rotateDeviceSprite && (a = this.rotateDeviceSprite, a.set_x(0), a.set_y(0), this.rotateDeviceSprite.setFluid(256));
                this.doc.adjustAllLayouts()
            },
            update: function(a) {
                a = 1 / l.FPS;
                this.oldTimeStep = this.currentTimeStep;
                this.currentTimeStep = wb.stamp();
                this.timeAccumulator += 0 > this.oldTimeStep ? 1.5 * a : this.currentTimeStep - this.oldTimeStep;
                if (!l.systemPaused)
                    if (l.started) {
                        this.frameCount++;
                        var b = !l.hasResized;
                        !b && ga.invalidRect() && (b = !0);
                        if (b) this.onResize();
                        if (null != this.rotateDeviceSprite && this.rotateDeviceSprite.get_visible()) l.systemPaused || this.draw();
                        else {
                            if (l.INTERPOLATE) {
                                for (b = 0; this.timeAccumulator >= a;)
                                    if (this.timeAccumulator -= a, ++b, this.doc.updateAnimations(), this.doc._updateOldValues(), f.RemoveRequested(), this.s.update(), n.Update(), this.Cnt++, P.UpdateAll(), ca.UpdateAll(), h.UpdateSpriteUnder(), 2 <= b) {
                                        this.timeAccumulator = 0;
                                        break
                                    }
                                f.DeltaT = Math.round(this.timeAccumulator / a * 128) /
                                    128
                            } else {
                                a = 0;
                                for (b = Math.round(l.FPS / H.get_current().get_stage().frameRate * 1); a < b;) a++, this.doc.updateAnimations(), this.doc._updateOldValues(), f.RemoveRequested(), this.s.update(), n.Update(), this.Cnt++, P.UpdateAll(), ca.UpdateAll(), h.UpdateSpriteUnder();
                                f.DeltaT = 1
                            }
                            this.s.preRender();
                            this.draw()
                        }
                    } else u.loaded && (l.started = !0, this.start())
            },
            transitionChangeState: function(a, b) {
                var c = this;
                l.NumChangedStates++;
                this.s = a;
                u.LocallyUnmute();
                this.s.update();
                this.whiteRect.set_visible(!0);
                this.whiteRect.set_alpha(1);
                var d = P.New();
                d.startValue = this.whiteRect.get_alpha();
                d.endValue = 0;
                d.duration = b;
                d.cnt = 0;
                d.updateFunc = function(a) {
                    c.whiteRect.set_alpha((1 - a * a) * d.startValue + a * a * d.endValue)
                };
                d.repeat = 0;
                d.endFunc = function() {
                    c.whiteRect.set_visible(!1)
                };
                d.stateBound = !0;
                d.gameBound = !1;
                P.Add(d);
                l.RunGC()
            },
            draw: function(a) {
                f.TilesheetId = -1;
                f.TraceCurrentMatrix && (G.trace("CM", {
                    fileName: "Main.hx",
                    lineNumber: 953,
                    className: "Main",
                    methodName: "draw",
                    customParams: [T.matrixId, T.getCurrentMatrix().toString()]
                }), f.TraceCurrentMatrix = !1);
                this.doc.draw();
                f.Flush();
                this.needsExtraScreenBMP && this.extraScreenBMP.bitmapData.copyPixels(this.ScreenBitmap.bitmapData, this.extraRect, this.extraPoint)
            },
            measureFPS: function() {
                var a = wb.stamp(),
                    b = "" + (this.frameCount - this.oldFrames) + " : ",
                    c = x.round(a - this.oldTime, 4);
                this.debugText.text = b + c;
                this.oldTime = a;
                this.oldFrames = this.frameCount
            },
            MobileCheck: function() {
                return window.mobilecheck()
            },
            __class__: l
        });
        var Fb = function() {
            l.call(this)
        };
        s.GameMain = Fb;
        Fb.__name__ = ["GameMain"];
        Fb.__super__ = l;
        Fb.prototype =
            R(l.prototype, {
                registerGraphics: function() {
                    l.prototype.registerGraphics.call(this);
                    G.trace("before objectsinit", {
                        fileName: "GameMain.hx",
                        lineNumber: 8,
                        className: "GameMain",
                        methodName: "registerGraphics"
                    });
                    q.Register();
                    G.trace("before game font", {
                        fileName: "GameMain.hx",
                        lineNumber: 14,
                        className: "GameMain",
                        methodName: "registerGraphics"
                    });
                    y.Register();
                    y.Font.RegisterCharacters();
                    A.showCross = !1;
                    t.atHooda = ga.hasInside("hoodamath.com")
                },
                __class__: Fb
            });
        var Gb = function() {
            l.call(this)
        };
        s.DocumentClass = Gb;
        Gb.__name__ = ["DocumentClass"];
        Gb.__super__ = Fb;
        Gb.prototype = R(Fb.prototype, {
            get_stage: function() {
                return H.get_current().get_stage()
            },
            __class__: Gb
        });
        var u = function() {};
        s.Audio = u;
        u.__name__ = ["Audio"];
        u.HTML5Init = function(a) {
            H.get_current().get_stage().hasEventListener("mouseDown") && H.get_current().get_stage().removeEventListener("mouseDown", u.HTML5Init);
            G.trace("we init audio", {
                fileName: "Audio.hx",
                lineNumber: 69,
                className: "Audio",
                methodName: "HTML5Init",
                customParams: [u.hasMusic]
            });
            u.initted = !0;
            u.currentMusic = u.playingMusic =
                null;
            u.PlayMusic("main");
            G.trace("we played main", {
                fileName: "Audio.hx",
                lineNumber: 73,
                className: "Audio",
                methodName: "HTML5Init"
            });
            u.hasSound && (u.dicSounds = new X)
        };
        u.Init = function() {};
        u.PlayMusic = function(a) {
            try {
                if (!u.initted) return;
                u.muteMusic || u.currentMusic == a && u.playingMusic == a && (null != u.currentMusic || null != a) || (null == a && (a = u.currentMusic), null != u.playingMusic && u.musc.stop(), u.musc = createjs.Sound.play(a, {
                    interrupt: createjs.Sound.INTERRUPT_EARLY,
                    loop: -1
                }), u.playingMusic = a)
            } catch (b) {
                G.trace("Error playing music: " +
                    a, {
                        fileName: "Audio.hx",
                        lineNumber: 107,
                        className: "Audio",
                        methodName: "PlayMusic"
                    })
            }
            u.currentMusic = a
        };
        u.StopMusic = function() {
            null != u.playingMusic && u.musc.stop();
            u.playingMusic = null
        };
        u.PauseMusic = function() {
            null != u.musc && (u.musc.paused = !0)
        };
        u.ResumeMusic = function() {
            null != u.musc ? u.musc.paused = !1 : u.PlayMusic()
        };
        u.PlaySound = function(a) {
            try {
                if (u.initted && u.hasSound && !u.muteSound) {
                    var b = u.dicSounds;
                    null != O[a] && b.getReserved(a);
                    createjs.Sound.play(a, {
                        interrupt: createjs.Sound.INTERRUPT_EARLY
                    });
                    u.currentSound =
                        a
                }
            } catch (c) {
                G.trace("Error playing sound: " + a, {
                    fileName: "Audio.hx",
                    lineNumber: 154,
                    className: "Audio",
                    methodName: "PlaySound"
                })
            }
        };
        u.Mute = function() {
            u.MuteSound();
            u.MuteMusic()
        };
        u.Unmute = function() {
            u.UnmuteMusic();
            u.UnmuteSound()
        };
        u.MuteSound = function() {
            u.muteSound || u.ToggleMuteSound()
        };
        u.MuteMusic = function() {
            u.muteMusic || u.ToggleMuteMusic()
        };
        u.UnmuteSound = function() {
            u.muteSound && u.ToggleMuteSound()
        };
        u.UnmuteMusic = function() {
            u.muteMusic && u.ToggleMuteMusic()
        };
        u.ToggleMuteMusic = function() {
            G.trace("TOGGLING MUTE MUSIC BRO", {
                fileName: "Audio.hx",
                lineNumber: 171,
                className: "Audio",
                methodName: "ToggleMuteMusic"
            });
            try {
                u.muteMusic = !u.muteMusic, u.initted && (u.muteMusic ? u.PauseMusic() : u.ResumeMusic())
            } catch (a) {
                a instanceof D && (a = a.val), G.trace("Error toggle mute music", {
                    fileName: "Audio.hx",
                    lineNumber: 183,
                    className: "Audio",
                    methodName: "ToggleMuteMusic",
                    customParams: [a]
                })
            }
        };
        u.ToggleMuteSound = function() {
            u.muteSound = !u.muteSound
        };
        u.updateVolume = function() {};
        u.LocallyMute = function() {
            u.locallyMuted || (u.locallyMuted = !0, u.PauseMusic())
        };
        u.LocallyUnmute = function() {
            u.locallyMuted && (u.locallyMuted = !1, null != u.musc && u.playingMusic == u.currentMusic ? u.ResumeMusic() : null != u.currentMusic && u.PlayMusic(u.currentMusic))
        };
        var Tb = function() {};
        s["openfl.AssetLibrary"] = Tb;
        Tb.__name__ = ["openfl", "AssetLibrary"];
        Tb.prototype = {
            exists: function(a, b) {
                return !1
            },
            getBitmapData: function(a) {
                return null
            },
            __class__: Tb
        };
        var Ub = function() {
            this.type = new X;
            this.path = new X;
            this.add("assets/GameFont.png", Y.IMAGE);
            this.add("assets/Objects.png", Y.IMAGE)
        };
        s.DefaultAssetLibrary =
            Ub;
        Ub.__name__ = ["DefaultAssetLibrary"];
        Ub.__super__ = Tb;
        Ub.prototype = R(Tb.prototype, {
            add: function(a, b, c) {
                var d = this.type;
                null != O[a] ? d.setReserved(a, b) : d.h[a] = b;
                b = this.path;
                c = null != c ? c : a;
                null != O[a] ? b.setReserved(a, c) : b.h[a] = c
            },
            exists: function(a, b) {
                var c = this.type,
                    c = null != O[a] ? c.getReserved(a) : c.h[a];
                if (null != c) {
                    if (c == b || null == b) return !0;
                    switch (b[1]) {
                        case 0:
                            return !0;
                        case 4:
                            return c == Y.SOUND;
                        case 5:
                            return c == Y.MUSIC
                    }
                }
                return !1
            },
            getBitmapData: function(a) {
                var b = C.loaders,
                    c = this.path;
                a = null != O[a] ? c.getReserved(a) :
                    c.h[a];
                return (null != O[a] ? b.getReserved(a) : b.h[a]).contentLoaderInfo.content.bitmapData
            },
            __class__: Ub
        });
        var bc = function() {};
        s.ExternalAPI = bc;
        bc.__name__ = ["ExternalAPI"];
        bc.JioSendScore = function(a) {
            a > bc.JioTopScore && (bc.JioTopScore = a)
        };
        var y = function() {};
        s.GameFont = y;
        y.__name__ = ["GameFont"];
        y.Register = function() {
            y.Font = new Jc;
            y.Font.face = "DOCK11";
            y.Font.size = 32;
            y.Font.padding = [0, 0, 0, 0];
            y.Font.spacing = [1, 1];
            y.Font.lineHeight = 20;
            y.Font.base = 26;
            y.Font.numPages = 1;
            y.Font.bitmapName = "GameFont.png";
            y.Font.numChars =
                96;
            y.Font.chars[33] = {
                id: 33,
                x: 167,
                y: 150,
                width: 10,
                height: 22,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 12,
                page: 0,
                letter: "!",
                movieClip: null
            };
            y.Font.chars[34] = {
                id: 34,
                x: 122,
                y: 174,
                width: 13,
                height: 10,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 15,
                page: 0,
                letter: '"',
                movieClip: null
            };
            y.Font.chars[35] = {
                id: 35,
                x: 47,
                y: 114,
                width: 20,
                height: 19,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 22,
                page: 0,
                letter: "#",
                movieClip: null
            };
            y.Font.chars[36] = {
                id: 36,
                x: 68,
                y: 68,
                width: 19,
                height: 26,
                xOffset: 0,
                yOffset: -3,
                xAdvance: 21,
                page: 0,
                letter: "$",
                movieClip: null
            };
            y.Font.chars[37] = {
                id: 37,
                x: 0,
                y: 70,
                width: 23,
                height: 20,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 25,
                page: 0,
                letter: "%",
                movieClip: null
            };
            y.Font.chars[38] = {
                id: 38,
                x: 68,
                y: 117,
                width: 19,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 21,
                page: 0,
                letter: "&",
                movieClip: null
            };
            y.Font.chars[39] = {
                id: 39,
                x: 177,
                y: 173,
                width: 8,
                height: 11,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 10,
                page: 0,
                letter: "'",
                movieClip: null
            };
            y.Font.chars[40] = {
                id: 40,
                x: 155,
                y: 0,
                width: 12,
                height: 26,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 14,
                page: 0,
                letter: "(",
                movieClip: null
            };
            y.Font.chars[41] = {
                id: 41,
                x: 156,
                y: 68,
                width: 11,
                height: 26,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 13,
                page: 0,
                letter: ")",
                movieClip: null
            };
            y.Font.chars[42] = {
                id: 42,
                x: 142,
                y: 0,
                width: 12,
                height: 12,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 14,
                page: 0,
                letter: "*",
                movieClip: null
            };
            y.Font.chars[43] = {
                id: 43,
                x: 155,
                y: 35,
                width: 12,
                height: 12,
                xOffset: 0,
                yOffset: 4,
                xAdvance: 14,
                page: 0,
                letter: "+",
                movieClip: null
            };
            y.Font.chars[44] = {
                id: 44,
                x: 167,
                y: 173,
                width: 9,
                height: 11,
                xOffset: 0,
                yOffset: 12,
                xAdvance: 11,
                page: 0,
                letter: ",",
                movieClip: null
            };
            y.Font.chars[45] = {
                id: 45,
                x: 155,
                y: 27,
                width: 12,
                height: 7,
                xOffset: 0,
                yOffset: 6,
                xAdvance: 14,
                page: 0,
                letter: "-",
                movieClip: null
            };
            y.Font.chars[46] = {
                id: 46,
                x: 155,
                y: 177,
                width: 9,
                height: 9,
                xOffset: 0,
                yOffset: 11,
                xAdvance: 11,
                page: 0,
                letter: ".",
                movieClip: null
            };
            y.Font.chars[47] = {
                id: 47,
                x: 125,
                y: 122,
                width: 15,
                height: 28,
                xOffset: 0,
                yOffset: -4,
                xAdvance: 17,
                page: 0,
                letter: "/",
                movieClip: null
            };
            y.Font.chars[48] = {
                id: 48,
                x: 47,
                y: 134,
                width: 20,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 22,
                page: 0,
                letter: "0",
                movieClip: null
            };
            y.Font.chars[49] = {
                id: 49,
                x: 141,
                y: 162,
                width: 13,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 15,
                page: 0,
                letter: "1",
                movieClip: null
            };
            y.Font.chars[50] = {
                id: 50,
                x: 107,
                y: 0,
                width: 17,
                height: 22,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 19,
                page: 0,
                letter: "2",
                movieClip: null
            };
            y.Font.chars[51] = {
                id: 51,
                x: 88,
                y: 68,
                width: 18,
                height: 22,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 20,
                page: 0,
                letter: "3",
                movieClip: null
            };
            y.Font.chars[52] = {
                id: 52,
                x: 88,
                y: 91,
                width: 18,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 20,
                page: 0,
                letter: "4",
                movieClip: null
            };
            y.Font.chars[53] = {
                id: 53,
                x: 89,
                y: 38,
                width: 17,
                height: 22,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 19,
                page: 0,
                letter: "5",
                movieClip: null
            };
            y.Font.chars[54] = {
                id: 54,
                x: 88,
                y: 129,
                width: 18,
                height: 22,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 20,
                page: 0,
                letter: "6",
                movieClip: null
            };
            y.Font.chars[55] = {
                id: 55,
                x: 89,
                y: 16,
                width: 17,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 19,
                page: 0,
                letter: "7",
                movieClip: null
            };
            y.Font.chars[56] = {
                id: 56,
                x: 68,
                y: 164,
                width: 19,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 21,
                page: 0,
                letter: "8",
                movieClip: null
            };
            y.Font.chars[57] = {
                id: 57,
                x: 88,
                y: 152,
                width: 18,
                height: 22,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 20,
                page: 0,
                letter: "9",
                movieClip: null
            };
            y.Font.chars[58] = {
                id: 58,
                x: 167,
                y: 48,
                width: 9,
                height: 16,
                xOffset: 0,
                yOffset: 1,
                xAdvance: 11,
                page: 0,
                letter: ":",
                movieClip: null
            };
            y.Font.chars[59] = {
                id: 59,
                x: 177,
                y: 44,
                width: 9,
                height: 18,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 11,
                page: 0,
                letter: ";",
                movieClip: null
            };
            y.Font.chars[60] = {
                id: 60,
                x: 141,
                y: 87,
                width: 14,
                height: 18,
                xOffset: 0,
                yOffset: 2,
                xAdvance: 16,
                page: 0,
                letter: "<",
                movieClip: null
            };
            y.Font.chars[61] = {
                id: 61,
                x: 142,
                y: 56,
                width: 12,
                height: 11,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 14,
                page: 0,
                letter: "=",
                movieClip: null
            };
            y.Font.chars[62] = {
                id: 62,
                x: 141,
                y: 68,
                width: 14,
                height: 18,
                xOffset: 0,
                yOffset: 2,
                xAdvance: 16,
                page: 0,
                letter: ">",
                movieClip: null
            };
            y.Font.chars[63] = {
                id: 63,
                x: 125,
                y: 0,
                width: 16,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 18,
                page: 0,
                letter: "?",
                movieClip: null
            };
            y.Font.chars[64] = {
                id: 64,
                x: 107,
                y: 92,
                width: 17,
                height: 16,
                xOffset: 0,
                yOffset: 1,
                xAdvance: 19,
                page: 0,
                letter: "@",
                movieClip: null
            };
            y.Font.chars[65] = {
                id: 65,
                x: 24,
                y: 139,
                width: 22,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 24,
                page: 0,
                letter: "A",
                movieClip: null
            };
            y.Font.chars[66] = {
                id: 66,
                x: 68,
                y: 95,
                width: 19,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 21,
                page: 0,
                letter: "B",
                movieClip: null
            };
            y.Font.chars[67] = {
                id: 67,
                x: 48,
                y: 44,
                width: 20,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 22,
                page: 0,
                letter: "C",
                movieClip: null
            };
            y.Font.chars[68] = {
                id: 68,
                x: 51,
                y: 0,
                width: 19,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 21,
                page: 0,
                letter: "D",
                movieClip: null
            };
            y.Font.chars[69] = {
                id: 69,
                x: 124,
                y: 152,
                width: 16,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 18,
                page: 0,
                letter: "E",
                movieClip: null
            };
            y.Font.chars[70] = {
                id: 70,
                x: 125,
                y: 24,
                width: 16,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 18,
                page: 0,
                letter: "F",
                movieClip: null
            };
            y.Font.chars[71] = {
                id: 71,
                x: 0,
                y: 115,
                width: 23,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 25,
                page: 0,
                letter: "G",
                movieClip: null
            };
            y.Font.chars[72] = {
                id: 72,
                x: 48,
                y: 68,
                width: 19,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 21,
                page: 0,
                letter: "H",
                movieClip: null
            };
            y.Font.chars[73] = {
                id: 73,
                x: 168,
                y: 0,
                width: 10,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 12,
                page: 0,
                letter: "I",
                movieClip: null
            };
            y.Font.chars[74] = {
                id: 74,
                x: 141,
                y: 138,
                width: 13,
                height: 23,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 15,
                page: 0,
                letter: "J",
                movieClip: null
            };
            y.Font.chars[75] = {
                id: 75,
                x: 26,
                y: 38,
                width: 21,
                height: 25,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 23,
                page: 0,
                letter: "K",
                movieClip: null
            };
            y.Font.chars[76] = {
                id: 76,
                x: 125,
                y: 84,
                width: 15,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 17,
                page: 0,
                letter: "L",
                movieClip: null
            };
            y.Font.chars[77] = {
                id: 77,
                x: 24,
                y: 92,
                width: 22,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 24,
                page: 0,
                letter: "M",
                movieClip: null
            };
            y.Font.chars[78] = {
                id: 78,
                x: 48,
                y: 22,
                width: 20,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 22,
                page: 0,
                letter: "N",
                movieClip: null
            };
            y.Font.chars[79] = {
                id: 79,
                x: 0,
                y: 91,
                width: 23,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 25,
                page: 0,
                letter: "O",
                movieClip: null
            };
            y.Font.chars[80] = {
                id: 80,
                x: 47,
                y: 92,
                width: 20,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 22,
                page: 0,
                letter: "P",
                movieClip: null
            };
            y.Font.chars[81] = {
                id: 81,
                x: 0,
                y: 139,
                width: 23,
                height: 25,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 25,
                page: 0,
                letter: "Q",
                movieClip: null
            };
            y.Font.chars[82] = {
                id: 82,
                x: 24,
                y: 114,
                width: 22,
                height: 24,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 24,
                page: 0,
                letter: "R",
                movieClip: null
            };
            y.Font.chars[83] = {
                id: 83,
                x: 69,
                y: 22,
                width: 19,
                height: 23,
                xOffset: 0,
                yOffset: -2,
                xAdvance: 21,
                page: 0,
                letter: "S",
                movieClip: null
            };
            y.Font.chars[84] = {
                id: 84,
                x: 69,
                y: 46,
                width: 19,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 21,
                page: 0,
                letter: "T",
                movieClip: null
            };
            y.Font.chars[85] = {
                id: 85,
                x: 68,
                y: 141,
                width: 19,
                height: 22,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 21,
                page: 0,
                letter: "U",
                movieClip: null
            };
            y.Font.chars[86] = {
                id: 86,
                x: 0,
                y: 165,
                width: 23,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 25,
                page: 0,
                letter: "V",
                movieClip: null
            };
            y.Font.chars[87] = {
                id: 87,
                x: 0,
                y: 0,
                width: 28,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 30,
                page: 0,
                letter: "W",
                movieClip: null
            };
            y.Font.chars[88] = {
                id: 88,
                x: 24,
                y: 70,
                width: 23,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 25,
                page: 0,
                letter: "X",
                movieClip: null
            };
            y.Font.chars[89] = {
                id: 89,
                x: 29,
                y: 0,
                width: 21,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 23,
                page: 0,
                letter: "Y",
                movieClip: null
            };
            y.Font.chars[90] = {
                id: 90,
                x: 47,
                y: 158,
                width: 20,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 22,
                page: 0,
                letter: "Z",
                movieClip: null
            };
            y.Font.chars[91] = {
                id: 91,
                x: 168,
                y: 65,
                width: 9,
                height: 27,
                xOffset: 0,
                yOffset: -4,
                xAdvance: 11,
                page: 0,
                letter: "[",
                movieClip: null
            };
            y.Font.chars[92] = {
                id: 92,
                x: 155,
                y: 106,
                width: 11,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 13,
                page: 0,
                letter: "\\",
                movieClip: null
            };
            y.Font.chars[93] = {
                id: 93,
                x: 167,
                y: 122,
                width: 10,
                height: 27,
                xOffset: 0,
                yOffset: -4,
                xAdvance: 12,
                page: 0,
                letter: "]",
                movieClip: null
            };
            y.Font.chars[94] = {
                id: 94,
                x: 88,
                y: 175,
                width: 15,
                height: 12,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 17,
                page: 0,
                letter: "^",
                movieClip: null
            };
            y.Font.chars[95] = {
                id: 95,
                x: 43,
                y: 180,
                width: 16,
                height: 7,
                xOffset: 0,
                yOffset: 13,
                xAdvance: 18,
                page: 0,
                letter: "_",
                movieClip: null
            };
            y.Font.chars[96] = {
                id: 96,
                x: 156,
                y: 95,
                width: 9,
                height: 8,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 11,
                page: 0,
                letter: "`",
                movieClip: null
            };
            y.Font.chars[97] = {
                id: 97,
                x: 88,
                y: 113,
                width: 18,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 20,
                page: 0,
                letter: "a",
                movieClip: null
            };
            y.Font.chars[98] = {
                id: 98,
                x: 71,
                y: 0,
                width: 18,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 20,
                page: 0,
                letter: "b",
                movieClip: null
            };
            y.Font.chars[99] = {
                id: 99,
                x: 107,
                y: 39,
                width: 17,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 19,
                page: 0,
                letter: "c",
                movieClip: null
            };
            y.Font.chars[100] = {
                id: 100,
                x: 28,
                y: 22,
                width: 19,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 21,
                page: 0,
                letter: "d",
                movieClip: null
            };
            y.Font.chars[101] = {
                id: 101,
                x: 0,
                y: 38,
                width: 25,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 27,
                page: 0,
                letter: "e",
                movieClip: null
            };
            y.Font.chars[102] = {
                id: 102,
                x: 0,
                y: 22,
                width: 27,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 29,
                page: 0,
                letter: "f",
                movieClip: null
            };
            y.Font.chars[103] = {
                id: 103,
                x: 141,
                y: 122,
                width: 13,
                height: 15,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 15,
                page: 0,
                letter: "g",
                movieClip: null
            };
            y.Font.chars[104] = {
                id: 104,
                x: 125,
                y: 46,
                width: 16,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 18,
                page: 0,
                letter: "h",
                movieClip: null
            };
            y.Font.chars[105] = {
                id: 105,
                x: 155,
                y: 128,
                width: 11,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 13,
                page: 0,
                letter: "i",
                movieClip: null
            };
            y.Font.chars[106] = {
                id: 106,
                x: 155,
                y: 150,
                width: 11,
                height: 26,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 13,
                page: 0,
                letter: "j",
                movieClip: null
            };
            y.Font.chars[107] = {
                id: 107,
                x: 107,
                y: 109,
                width: 17,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 19,
                page: 0,
                letter: "k",
                movieClip: null
            };
            y.Font.chars[108] = {
                id: 108,
                x: 168,
                y: 22,
                width: 10,
                height: 21,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 12,
                page: 0,
                letter: "l",
                movieClip: null
            };
            y.Font.chars[109] = {
                id: 109,
                x: 0,
                y: 54,
                width: 24,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 26,
                page: 0,
                letter: "m",
                movieClip: null
            };
            y.Font.chars[110] = {
                id: 110,
                x: 107,
                y: 76,
                width: 17,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 19,
                page: 0,
                letter: "n",
                movieClip: null
            };
            y.Font.chars[111] = {
                id: 111,
                x: 125,
                y: 68,
                width: 15,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 17,
                page: 0,
                letter: "o",
                movieClip: null
            };
            y.Font.chars[112] = {
                id: 112,
                x: 107,
                y: 55,
                width: 17,
                height: 20,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 19,
                page: 0,
                letter: "p",
                movieClip: null
            };
            y.Font.chars[113] = {
                id: 113,
                x: 107,
                y: 152,
                width: 16,
                height: 20,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 18,
                page: 0,
                letter: "q",
                movieClip: null
            };
            y.Font.chars[114] = {
                id: 114,
                x: 141,
                y: 106,
                width: 13,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 15,
                page: 0,
                letter: "r",
                movieClip: null
            };
            y.Font.chars[115] = {
                id: 115,
                x: 142,
                y: 40,
                width: 12,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 14,
                page: 0,
                letter: "s",
                movieClip: null
            };
            y.Font.chars[116] = {
                id: 116,
                x: 155,
                y: 48,
                width: 11,
                height: 19,
                xOffset: 0,
                yOffset: 1,
                xAdvance: 13,
                page: 0,
                letter: "t",
                movieClip: null
            };
            y.Font.chars[117] = {
                id: 117,
                x: 107,
                y: 23,
                width: 17,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 19,
                page: 0,
                letter: "u",
                movieClip: null
            };
            y.Font.chars[118] = {
                id: 118,
                x: 90,
                y: 0,
                width: 16,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 18,
                page: 0,
                letter: "v",
                movieClip: null
            };
            y.Font.chars[119] = {
                id: 119,
                x: 24,
                y: 161,
                width: 22,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 24,
                page: 0,
                letter: "w",
                movieClip: null
            };
            y.Font.chars[120] = {
                id: 120,
                x: 107,
                y: 173,
                width: 14,
                height: 14,
                xOffset: 0,
                yOffset: 4,
                xAdvance: 16,
                page: 0,
                letter: "x",
                movieClip: null
            };
            y.Font.chars[121] = {
                id: 121,
                x: 107,
                y: 131,
                width: 17,
                height: 20,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 19,
                page: 0,
                letter: "y",
                movieClip: null
            };
            y.Font.chars[122] = {
                id: 122,
                x: 125,
                y: 106,
                width: 15,
                height: 15,
                xOffset: 0,
                yOffset: 5,
                xAdvance: 17,
                page: 0,
                letter: "z",
                movieClip: null
            };
            y.Font.chars[123] = {
                id: 123,
                x: 167,
                y: 95,
                width: 11,
                height: 26,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 13,
                page: 0,
                letter: "{",
                movieClip: null
            };
            y.Font.chars[124] = {
                id: 124,
                x: 178,
                y: 122,
                width: 7,
                height: 27,
                xOffset: 0,
                yOffset: -4,
                xAdvance: 9,
                page: 0,
                letter: "|",
                movieClip: null
            };
            y.Font.chars[125] = {
                id: 125,
                x: 142,
                y: 13,
                width: 12,
                height: 26,
                xOffset: 0,
                yOffset: -1,
                xAdvance: 14,
                page: 0,
                letter: "}",
                movieClip: null
            };
            y.Font.chars[126] = {
                id: 126,
                x: 24,
                y: 177,
                width: 18,
                height: 7,
                xOffset: 0,
                yOffset: 8,
                xAdvance: 20,
                page: 0,
                letter: "~",
                movieClip: null
            };
            y.Font.chars[32] = {
                id: 32,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 12,
                page: 0,
                letter: " ",
                movieClip: null
            };
            y.Font.chars[9] = {
                id: 9,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 96,
                page: 0,
                letter: "\t",
                movieClip: null
            }
        };
        var xb = function() {
            ua.call(this);
            var a = this.getBackgroundColor(),
                b = 0;
            70 > 0.299 * (a >> 16 & 255) + 0.587 * (a >> 8 & 255) + 0.114 * (a & 255) && (b = 16777215);
            var a = this.getHeight() / 2 - 3.5,
                c = this.getWidth() - 60;
            this.outline = new Aa;
            this.outline.get_graphics().beginFill(b, 0.07);
            this.outline.get_graphics().drawRect(0, 0, c, 7);
            this.outline.set_x(30);
            this.outline.set_y(a);
            this.addChild(this.outline);
            this.progress = new Aa;
            this.progress.get_graphics().beginFill(b, 0.35);
            this.progress.get_graphics().drawRect(0, 0, c - 4, 3);
            this.progress.set_x(32);
            this.progress.set_y(a + 2);
            this.progress.set_scaleX(0);
            this.addChild(this.progress)
        };
        s.NMEPreloader = xb;
        xb.__name__ = ["NMEPreloader"];
        xb.__super__ = Aa;
        xb.prototype = R(Aa.prototype, {
            getBackgroundColor: function() {
                return 2236962
            },
            getHeight: function() {
                return H.get_current().get_stage().get_stageHeight()
            },
            getWidth: function() {
                return H.get_current().get_stage().get_stageWidth()
            },
            __class__: xb
        });
        var A = function() {
            this.didLoad = !1;
            this.docClick = null;
            this.firstWidth = this.firstHeight = 0;
            this._painted = !1;
            this.PreloaderLogoVars = [];
            this.PreloaderLogo = null;
            this.PreloaderSizeVars = [];
            this.PreloaderBarVars = [];
            this.PreloaderBarMiddleBMD = this.PreloaderBarTop = this.PreloaderBarMiddle = this.PreloaderBarBottom = null;
            H.get_current().get_stage().component.id = "oz_game";
            A.instance = this;
            this.firstWidth = this.getWidth() | 0;
            this.firstHeight = this.getHeight() | 0;
            xb.call(this);
            this.addEventListener("enterFrame", ea(this, this.updateFrame));
            Math.min(this.firstWidth, 1.7791666666666666 * this.firstHeight);
            this.outline.get_graphics().clear();
            this.progress.get_graphics().clear();
            for (var a = ["512", "512", "25", "25"], b = 0, c = a.length; b <
                c;) {
                var d = b++;
                this.PreloaderSizeVars[d] = K.parseInt(a[d])
            }
            a = ["480", "210", "440"];
            b = 0;
            for (c = a.length; b < c;) d = b++, this.PreloaderBarVars[d] = K.parseInt(a[d]);
            a = new cb(this.PreloaderBarVars[0], this.PreloaderBarVars[1]);
            b = null;
            b = new ia(this.PreloaderBarVars[0], this.PreloaderBarVars[1] / 3 | 0, !0, -1);
            b.copyPixels(a, new pa(0, this.PreloaderBarVars[1] / 3, this.PreloaderBarVars[0], this.PreloaderBarVars[1] / 3), new xa(0, 0));
            this.PreloaderBarTop = this.putBitmap(b);
            b = new ia(this.PreloaderBarVars[0], this.PreloaderBarVars[1] /
                3 | 0, !0, 16777215);
            this.PreloaderBarMiddle = this.putBitmap(b);
            this.PreloaderBarMiddleBMD = new ia(this.PreloaderBarVars[0], this.PreloaderBarVars[1] / 3 | 0, !0, 16777215);
            this.PreloaderBarMiddleBMD.copyPixels(a, new pa(0, 0, this.PreloaderBarVars[0], this.PreloaderBarVars[1] / 3), new xa(0, 0));
            b = new ia(this.PreloaderBarVars[0], this.PreloaderBarVars[1] / 3 | 0, !0, -1);
            b.copyPixels(a, new pa(0, 2 * (this.PreloaderBarVars[1] / 3 | 0), this.PreloaderBarVars[0], this.PreloaderBarVars[1] / 3), new xa(0, 0));
            this.PreloaderBarBottom = this.putBitmap(b);
            A.done = !0;
            this.addEventListener("enterFrame", ea(this, this.estimatePreloading));
            a = ["512", "144"];
            b = 0;
            for (c = a.length; b < c;) d = b++, this.PreloaderLogoVars[d] = K.parseInt(a[d]);
            this.PreloaderLogo = this.putBitmap(new Ba(this.PreloaderLogoVars[0], this.PreloaderLogoVars[1]));
            G.trace("user agent: ", {
                fileName: "Preloader.hx",
                lineNumber: 564,
                className: "Preloader",
                methodName: "new",
                customParams: [window.navigator.userAgent.toLowerCase()]
            });
            G.trace("needs audio ", {
                fileName: "Preloader.hx",
                lineNumber: 568,
                className: "Preloader",
                methodName: "new",
                customParams: [u.needsAudio]
            });
            u.needsAudio && (a = [createjs.WebAudioPlugin, createjs.HTMLAudioPlugin], createjs.BrowserDetect.isFirefox && (a = [createjs.HTMLAudioPlugin]), u.hasMusic = createjs.Sound.registerPlugins(a), null == createjs.Sound.activePlugin ? (console.log("ActivePlugin is null"), u.hasMusic = u.hasSound = !1) : 0 <= navigator.userAgent.toLowerCase().indexOf("iemobile") ? (u.hasSound = !1, console.log("We're on IEMobile, disallowing sound if not WP")) : createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid ||
                createjs.BrowserDetect.isBlackberry ? (console.log(createjs.Sound.activePlugin.toString(), createjs.Sound.activePlugin instanceof createjs.WebAudioPlugin), u.hasSound = 0 <= createjs.Sound.activePlugin.toString().indexOf("WebAudio"), u.hasMusic = u.hasSound) : (u.hasSound = !0, console.log("no browser type check detected, allowing sound")), this.preloadHTML5Audio(), G.trace("needsAudio: ", {
                    fileName: "Preloader.hx",
                    lineNumber: 609,
                    className: "Preloader",
                    methodName: "new",
                    customParams: [u.needsAudio, " hasMusic: ", u.hasMusic,
                        " hasSound: ", u.hasSound
                    ]
                }));
            this.onResize()
        };
        s.Preloader = A;
        A.__name__ = ["Preloader"];
        A.CreateManifest = function(a, b) {
            for (var c = [], d = 0, e = a.length; d < e;) {
                var p = d++;
                c.push({
                    id: a[p],
                    src: b + a[p] + ".ogg"
                })
            }
            return c
        };
        A.loadAudioFiles = function(a, b, c) {
            null == c && (c = "audioassetsweb/");
            a = A.CreateManifest(a, c);
            b = A.CreateManifest(b, c);
            u.hasMusic ? (c = new createjs.LoadQueue, createjs.Sound.alternateExtensions = ["mp3"], c.installPlugin(createjs.Sound), c.on("error", A.audioLoadError), c.on("progress", A.audioLoadProgress), c.on("fileload",
                A.audioLoadFile), c.on("complete", A.audioLoadComplete), u.hasSound ? c.loadManifest(a) : c.loadManifest(b), c.load()) : u.loaded = !0
        };
        A.audioLoadError = function(a) {
            G.trace("PreloadError", {
                fileName: "Preloader.hx",
                lineNumber: 188,
                className: "Preloader",
                methodName: "audioLoadError",
                customParams: [a.message]
            })
        };
        A.audioLoadFile = function(a) {
            G.trace("PreloadFile", {
                fileName: "Preloader.hx",
                lineNumber: 191,
                className: "Preloader",
                methodName: "audioLoadFile",
                customParams: [a.item.id, a.item.src]
            })
        };
        A.audioLoadProgress = function(a) {
            G.trace("PreloadProgress", {
                fileName: "Preloader.hx",
                lineNumber: 194,
                className: "Preloader",
                methodName: "audioLoadProgress",
                customParams: [a.loaded]
            })
        };
        A.audioLoadComplete = function(a) {
            G.trace("sounds are loaded", {
                fileName: "Preloader.hx",
                lineNumber: 198,
                className: "Preloader",
                methodName: "audioLoadComplete"
            });
            u.loaded = !0;
            A.Destroy();
            G.trace("Audio.loaded = ", {
                fileName: "Preloader.hx",
                lineNumber: 201,
                className: "Preloader",
                methodName: "audioLoadComplete",
                customParams: [u.loaded]
            })
        };
        A.LoadTimePass = function() {
            A.timePassed = !0
        };
        A.goAway = function(a) {
            G.trace("we cliccccck", {
                fileName: "Preloader.hx",
                lineNumber: 811,
                className: "Preloader",
                methodName: "goAway"
            });
            A.done = !0;
            A.Destroy()
        };
        A.Destroy = function() {
            G.trace("WE TRY DESTROY", {
                fileName: "Preloader.hx",
                lineNumber: 817,
                className: "Preloader",
                methodName: "Destroy"
            });
            if (A.done && (G.trace("WE DONE BRO", {
                    fileName: "Preloader.hx",
                    lineNumber: 819,
                    className: "Preloader",
                    methodName: "Destroy"
                }), A.assetsLoaded && u.loaded)) {
                null != A.instance && A.instance.removeEventListener("enterFrame", (Ya = A.instance, ea(Ya, Ya.estimatePreloading)));
                for (var a =
                        0, b = A.BMPsToRemove.length; a < b;) {
                    var c = a++;
                    G.trace("WE REMOVE BMD", {
                        fileName: "Preloader.hx",
                        lineNumber: 824,
                        className: "Preloader",
                        methodName: "Destroy",
                        customParams: [A.BMPsToRemove[c].bitmapData.component.width, c]
                    });
                    H.get_current().removeChild(A.BMPsToRemove[c])
                }
                null != A.bm && null != A.bm.parent && H.get_current().removeChild(A.bm);
                null != A._outline && null != A._outline.parent && H.get_current().removeChild(A._outline);
                null != A._progress && null != A._progress.parent && H.get_current().removeChild(A._progress);
                document.body.style.background =
                    "#000000";
                G.trace("we destroy", {
                    fileName: "Preloader.hx",
                    lineNumber: 853,
                    className: "Preloader",
                    methodName: "Destroy"
                })
            }
        };
        A.__super__ = xb;
        A.prototype = R(xb.prototype, {
            updateFrame: function(a) {
                a = this.getWidth() | 0;
                var b = this.getHeight() | 0;
                if (a != this.firstWidth || b != this.firstHeight) this.firstWidth = a, this.firstHeight = b, this.onResize()
            },
            onResize: function(a) {
                G.trace("RESIZING", {
                    fileName: "Preloader.hx",
                    lineNumber: 251,
                    className: "Preloader",
                    methodName: "onResize",
                    customParams: [this.getWidth(), this.getHeight()]
                });
                a = this.PreloaderSizeVars[0] / this.PreloaderSizeVars[1];
                var b = 0,
                    c = 0,
                    d = this.firstWidth,
                    e = this.firstHeight;
                1 * this.firstWidth / this.firstHeight > a ? (d = this.firstHeight * a, b = (this.firstWidth - d) / 2) : (e = this.firstWidth * a, c = (this.firstHeight - e) / 2);
                a = d / this.PreloaderSizeVars[0];
                d = 0;
                this.firstHeight > this.firstWidth && (d = (this.firstHeight - e) / 6);
                null != this.PreloaderLogo && (this.PreloaderLogo.set_x(b + a * (this.PreloaderSizeVars[0] - this.PreloaderLogoVars[0]) / 2), this.PreloaderLogo.set_y(c + a * this.PreloaderSizeVars[2] - d), this.PreloaderLogo.set_scaleX(this.PreloaderLogo.set_scaleY(a)));
                b += a * (this.PreloaderSizeVars[0] - this.PreloaderBarVars[0]) / 2;
                c = this.firstHeight - c - a * (this.PreloaderBarVars[1] / 3 + this.PreloaderSizeVars[3]) + d;
                e = this.PreloaderBarTop;
                e.set_x(b);
                e.set_y(c);
                e.set_scaleX(e.set_scaleY(a));
                e = this.PreloaderBarMiddle;
                e.set_x(b);
                e.set_y(c);
                e.set_scaleX(e.set_scaleY(a));
                e = this.PreloaderBarBottom;
                e.set_x(b);
                e.set_y(c);
                e.set_scaleX(e.set_scaleY(a));
                G.trace("RESIZING RESULT", {
                    fileName: "Preloader.hx",
                    lineNumber: 295,
                    className: "Preloader",
                    methodName: "onResize",
                    customParams: [this.PreloaderLogo.x,
                        this.PreloaderBarTop.x
                    ]
                })
            },
            setXYScale: function(a, b, c, d) {
                a.set_x(b);
                a.set_y(c);
                a.set_scaleX(a.set_scaleY(d))
            },
            preloadHTML5Audio: function() {},
            estimatePreloading: function(a) {
                A.estimateLoaded += 0.005;
                A.estimateLoaded = Math.min(A.estimateLoaded, 0.8);
                this.updateProgressBar(A.estimateLoaded)
            },
            updateProgressBar: function(a) {
                var b = (this.PreloaderBarVars[0] - this.PreloaderBarVars[2]) / 2;
                this.PreloaderBarMiddle.bitmapData.copyPixels(this.PreloaderBarMiddleBMD, new pa(b, 0, this.PreloaderBarVars[2] * a, this.PreloaderBarVars[1]),
                    new xa(b, 0))
            },
            mochiEnd: function() {
                this.didLoad = !0
            },
            onUpdate: function(a, b) {
                if (!A.ShowBlank) {
                    var c = a / b;
                    G.trace("updating", {
                        fileName: "Preloader.hx",
                        lineNumber: 656,
                        className: "Preloader",
                        methodName: "onUpdate",
                        customParams: [c, a, b]
                    });
                    u.needsAudio && (c *= 0.8);
                    c > A.estimateLoaded ? A.estimateLoaded = c : c = A.estimateLoaded;
                    this.updateProgressBar(c)
                }
            },
            putBitmap: function(a) {
                A.SponsorBMDInstance = a;
                this.set_visible(!0);
                A.bm = new Sa(a);
                var b = Math.min(this.firstWidth, 1.7791666666666666 * this.firstHeight) / a.component.width,
                    b = Math.min(b, 2);
                A.bm.set_x((this.firstWidth - a.component.width * b) / 2);
                A.bm.set_y((0.7 * this.firstHeight - a.component.height * b) / 2);
                A.bm.set_scaleX(A.bm.set_scaleY(b));
                H.get_current().addChildAt(A.bm, 0);
                A.BMPsToRemove.push(A.bm);
                return A.bm
            },
            putBGBitmap: function(a) {
                this.set_visible(!0);
                A.bm = new Sa(a);
                var b = this.firstHeight / a.component.height;
                A.bm.set_x((this.firstWidth - a.component.width * b) / 2);
                A.bm.set_y(0);
                A.bm.set_scaleX(A.bm.set_scaleY(b));
                H.get_current().addChildAt(A.bm, 0);
                A.BMPsToRemove.push(A.bm);
                return A.bm
            },
            putCenterBitmap: function(a) {
                this.set_visible(!0);
                A.bm = new Sa(a);
                var b = Math.min(this.firstWidth / a.component.width, this.firstHeight / a.component.height);
                A.bm.set_x((this.firstWidth - a.component.width * b) / 2);
                A.bm.set_y(this.firstHeight - b * a.component.height);
                A.bm.set_scaleX(A.bm.set_scaleY(b));
                H.get_current().addChildAt(A.bm, 0);
                A.BMPsToRemove.push(A.bm);
                return A.bm
            },
            putLowerBitmap: function(a) {
                this.set_visible(!0);
                A.bm = new Sa(a);
                var b = this.firstWidth / a.component.width;
                0.2 * this.firstHeight < a.component.height *
                    b && (b = 0.2 * this.firstHeight / a.component.height);
                b = Math.min(b, 2);
                A.bm.set_x((this.firstWidth - a.component.width * b) / 2);
                A.bm.set_y(this.firstHeight - b * a.component.height);
                A.bm.set_scaleX(A.bm.set_scaleY(b));
                H.get_current().addChildAt(A.bm, 0);
                A.BMPsToRemove.push(A.bm)
            },
            onInit: function() {
                G.trace("we init preloader", {
                    fileName: "Preloader.hx",
                    lineNumber: 778,
                    className: "Preloader",
                    methodName: "onInit"
                })
            },
            onLoaded: function() {
                this.removeEventListener("enterFrame", ea(this, this.updateFrame));
                A.ShowBlank || (A.instance =
                    null, G.trace("we done assets", {
                        fileName: "Preloader.hx",
                        lineNumber: 789,
                        className: "Preloader",
                        methodName: "onLoaded"
                    }), A.assetsLoaded = !0, A.Destroy(), this.dispatchEvent(new fa("complete")))
            },
            __class__: A
        });
        var za = function() {
            A.call(this)
        };
        s.GamePreloader = za;
        za.__name__ = ["GamePreloader"];
        za.__super__ = A;
        za.prototype = R(A.prototype, {
            preloadHTML5Audio: function() {
                A.prototype.preloadHTML5Audio.call(this);
                A.loadAudioFiles(za.SM, za.M)
            },
            __class__: za
        });
        var t = function() {};
        s.Globals = t;
        t.__name__ = ["Globals"];
        t.TextMath =
            function(a, b, c) {
                f.TextToSprites(a, b, q.ctxtMathFont, "0123456789/*+-=? BESTCOR:", 24, c)
            };
        t.TextMathWhite = function(a, b, c) {
            f.TextToSprites(a, b, q.ctxtWhiteMathFont, "0123456789/*+-=? BESTCOR:", 24, c)
        };
        t.Init = function() {
            t.levelsXML = B.parse(Ra.getString("levels")).firstElement();
            t.definitionsXML = B.parse(Ra.getString("definitions")).firstElement();
            t.componentsXML = B.parse('<components Axis2D="Vertical,Horizontal" Message="PLAYER_DIE,PLAYER_WIN,PLAYER_JUMP,SMASH_BRICK,ENEMY_DIE,SHOW_JUMP,GET_COIN,GET_BANANA,OPEN_DOOR,SPRING_JUMP,BARREL_SHOT,ENTER_BARREL,TELEPORT,TRIGGER" RightAngle="TopLeft,TopRight,BottomLeft,BottomRight">\n\t<c n="OzCameraController">\n\t\t<p v="Horizontal" t="Axis2D" n="axis"/>\n\t\t<p v="BottomLeft" t="RightAngle" n="rightAngle"/>\n\t\t<p v="0" t="Float" n="offset"/>\n\t\t<p v="true" t="Bool" n="allowDisable"/>\n\t</c>\n\t<c n="OzWorm">\n\t\t<p v="100" t="Float" pf="true" n="speed"/>\n\t\t<p v="0.17" t="Float" pf="true" n="rotSpeed"/>\n\t\t<p v="true" t="Bool" n="isPlayer"/>\n\t</c>\n\t<c n="OzBanana">\n\t\t<p v="30" t="Int" pf="true" n="BubbleDuration"/>\n\t</c>\n\t<c n="OzTileObject"/>\n\t<c n="OzEventSender">\n\t\t<p v="PLAYER_WIN" t="Message" n="message"/>\n\t\t<p v="true" t="Bool" n="killOnDispatch"/>\n\t\t<p v="false" t="Bool" n="visible"/>\n\t</c>\n\t<c n="OzPath">\n\t\t<p v="true" t="Bool" n="visible"/>\n\t</c>\n\t<c n="OzTrigger"/>\n</components>\n').firstElement();
            t.levelsXMLLoaded = !0;
            t.definitionsXMLLoaded = !0;
            t.componentsXMLLoaded = !0;
            t.load()
        };
        t.load = function() {
            t.so = ya.getLocal("slimath_9");
            if (null == t.so.data || null == t.so.data.levelScores) {
                t.so.data.ratedGame = 0;
                t.so.data.edit_data = "<level/>";
                t.so.data.levelScores = [];
                for (var a = 0, b = t.NUMLEVELS; a < b;) {
                    var c = a++;
                    t.so.data.levelScores[c] = -1
                }
                t.so.data.liveChange = -1;
                t.so.data.lives = t.MAX_LIVES;
                t.so.data.premiumUpgrade = "";
                t.so.data.currentSkin = 0;
                t.so.data.seenSkins = 1
            }
            t.edit_data = B.parse(S.__cast(t.so.data.edit_data,
                String)).firstElement();
            t.levelScores = t.so.data.levelScores;
            t.ratedGame = t.so.data.ratedGame;
            t.liveChange = t.so.data.liveChange;
            t.lives = t.so.data.lives;
            t.premiumUpgrade = t.so.data.premiumUpgrade;
            t.currentSkin = t.so.data.currentSkin;
            t.seenSkins = t.so.data.seenSkins
        };
        t.save = function() {
            var a = db.print(t.edit_data);
            t.so.data.edit_data = a;
            t.so.data.levelScores = t.levelScores;
            t.so.data.ratedGame = t.ratedGame;
            t.so.data.lives = t.lives;
            t.so.data.liveChange = t.liveChange;
            t.so.data.premiumUpgrade = t.premiumUpgrade;
            t.so.data.currentSkin =
                t.currentSkin;
            t.so.data.seenSkins = t.seenSkins;
            a = null;
            try {
                a = S.__cast(t.so.flush(), String)
            } catch (b) {
                G.trace("couldnt write...", {
                    fileName: "Globals.hx",
                    lineNumber: 501,
                    className: "Globals",
                    methodName: "save"
                })
            }
            null != a && (a == S.__cast(eb.PENDING, String) && G.trace("requesting permission to save", {
                fileName: "Globals.hx",
                lineNumber: 515,
                className: "Globals",
                methodName: "save"
            }), S.__cast(eb.FLUSHED, String))
        };
        t.moreGames = function(a) {
            x.getURL("http://www.hoodamath.com")
        };
        t.solution = function(a) {
            x.getURL("http://www.ozdy.com/walkthroughs/jumpy-ape-joe.html")
        };
        t.facebook = function(a) {
            x.getURL("https://www.facebook.com/pages/Ozdy/312711385427046")
        };
        t.twitter = function(a) {
            x.getURL("https://twitter.com/OzdyGames")
        };
        t.amazon = function(a) {
            a = t.AmazonURL;
            if (null == a || 0 == a.length) a = t.DefaultMobileURL;
            x.getURL(a)
        };
        t.googleplay = function(a) {
            a = t.GooglePlayURL;
            if (null == a || 0 == a.length) a = t.DefaultMobileURL;
            x.getURL(a)
        };
        t.appstore = function(a) {
            a = t.AppStoreURL;
            if (null == a || 0 == a.length) a = t.DefaultMobileURL;
            x.getURL(a)
        };
        var lb = function() {};
        s.HolaverseAPI = lb;
        lb.__name__ = ["HolaverseAPI"];
        lb.Init = function(a) {};
        lb.ShowAd = function() {};
        lb.UpdateScore = function(a) {};
        lb.Comment = function(a) {};
        lb.Share = function(a, b, c) {};
        var J = function() {};
        s.HxOverrides = J;
        J.__name__ = ["HxOverrides"];
        J.strDate = function(a) {
            switch (a.length) {
                case 8:
                    a = a.split(":");
                    var b = new Date;
                    b.setTime(0);
                    b.setUTCHours(a[0]);
                    b.setUTCMinutes(a[1]);
                    b.setUTCSeconds(a[2]);
                    return b;
                case 10:
                    return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
                case 19:
                    return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2],
                        b[0], b[1], b[2]);
                default:
                    throw new D("Invalid date format : " + a);
            }
        };
        J.cca = function(a, b) {
            var c = a.charCodeAt(b);
            return c != c ? void 0 : c
        };
        J.substr = function(a, b, c) {
            if (null == c) c = a.length;
            else if (0 > c)
                if (0 == b) c = a.length + c;
                else return "";
            return a.substr(b, c)
        };
        J.remove = function(a, b) {
            var c = a.indexOf(b);
            if (-1 == c) return !1;
            a.splice(c, 1);
            return !0
        };
        J.iter = function(a) {
            return {
                cur: 0,
                arr: a,
                hasNext: function() {
                    return this.cur < this.arr.length
                },
                next: function() {
                    return this.arr[this.cur++]
                }
            }
        };
        var xa = function(a, b) {
            this.x = null !=
                a ? a : 0;
            this.y = null != b ? b : 0
        };
        s["openfl.geom.Point"] = xa;
        xa.__name__ = ["openfl", "geom", "Point"];
        xa.prototype = {
            setTo: function(a, b) {
                this.x = a;
                this.y = b
            },
            __class__: xa
        };
        var h = function() {};
        s.Input = h;
        h.__name__ = ["Input"];
        h.key = function(a) {
            return J.cca(a, 0)
        };
        h.is = function(a, b, c) {
            null == c && (c = !0);
            null == b && (b = !1);
            if (!h.down[a] || b && !h.kproc[a]) return !1;
            b && c && (h.kproc[a] = !0);
            return !0
        };
        h.isUP = function(a, b) {
            null == b && (b = !0);
            null == a && (a = !1);
            var c;
            !h.down[38] || a && !h.kproc[38] ? c = !1 : (a && b && (h.kproc[38] = !0), c = !0);
            if (c) return !0;
            c = h.key("W");
            if (!h.down[c] || a && !h.kproc[c]) return !1;
            a && b && (h.kproc[c] = !0);
            return !0
        };
        h.Init = function(a) {
            if (!h.Initted) {
                h.Initted = !0;
                h.mouseWheelDelta = 0;
                h.mctrl = !1;
                h.mshift = !1;
                h.kctrl = !1;
                h.kshift = !1;
                h.down = [];
                h.kproc = [];
                h.clicked = !1;
                h.clickedSprite = null;
                h.spriteUnder = null;
                h.DownEvent = new Hb(null, 2);
                h.ClickEvent = new Hb(null, 1);
                h.OverEvent = new Hb(null, 3);
                h.OutEvent = new Hb(null, 4);
                for (var b = 0; 256 > b;) b++, h.down.push(!1), h.kproc.push(!1);
                h.hasFocus = !0;
                h.iDoc = a;
                h.iStage = a.get_stage();
                a.get_stage().addEventListener("keydown",
                    h.keyDownHandler);
                a.get_stage().addEventListener("keyup", h.keyUpHandler);
                a.get_stage().addEventListener("mouseMove", h.mouseMoveHandler);
                a.get_stage().addEventListener("mouseDown", h.mouseDownHandler);
                a.get_stage().addEventListener("mouseUp", h.mouseUpHandler);
                a.get_stage().addEventListener("mouseWheel", h.mouseWheelHandler);
                h.tx = new va;
                h.ty = new va;
                h.tClickedSprite = new va;
                h.tClicked = new va;
                kd.inputMode = Ta.TOUCH_POINT;
                H.get_current().get_stage().addEventListener("touchMove", h.touchMoveHandler);
                H.get_current().get_stage().addEventListener("touchBegin",
                    h.touchDownHandler);
                H.get_current().get_stage().addEventListener("touchEnd", h.touchUpHandler);
                a.get_stage().addEventListener("blur", h.focusOutHandler);
                a.get_stage().addEventListener("focus", h.focusInHandler); - 1 < window.navigator.userAgent.toLowerCase().indexOf("android") ? (window.removeEventListener("mousedown", (Ya = H.get_stage(), ea(Ya, Ya.onMouse))), window.removeEventListener("mouseup", (Ya = H.get_stage(), ea(Ya, Ya.onMouse))), window.removeEventListener("mousemove", (Ya = H.get_stage(), ea(Ya, Ya.onMouse))),
                    G.trace("We're on android", {
                        fileName: "Input.hx",
                        lineNumber: 169,
                        className: "Input",
                        methodName: "Init"
                    })) : G.trace("We're not on Android", {
                    fileName: "Input.hx",
                    lineNumber: 172,
                    className: "Input",
                    methodName: "Init"
                })
            }
        };
        h.reFocus = function(a) {
            h.iStage.get_focus() != h.iStage && h.iStage.set_focus(h.iStage)
        };
        h.keyDownHandler = function(a) {
            h.down[a.keyCode % 256] = !0;
            h.kshift = a.shiftKey;
            h.kctrl = a.ctrlKey
        };
        h.keyUpHandler = function(a) {
            a = a.keyCode;
            h.down[a % 256] = !1;
            h.kproc[a % 256] = !1
        };
        h.SetMouseXY = function(a, b) {
            h.mx = a - h.mOffsetX;
            h.my = b - h.mOffsetY;
            h.mx -= ga.offsetX;
            h.my -= ga.offsetY;
            h.mx /= l.instance.scaleX;
            h.my /= l.instance.scaleY
        };
        h.SetTouchXY = function(a, b, c) {
            b -= h.mOffsetX;
            c -= h.mOffsetY;
            b -= ga.offsetX;
            c -= ga.offsetY;
            b /= l.instance.scaleX;
            c /= l.instance.scaleY;
            h.tx.h[a] = b;
            h.ty.h[a] = c
        };
        h.mouseMoveHandler = function(a) {
            h.SetMouseXY(a.stageX, a.stageY)
        };
        h.mouseWheelHandler = function(a) {
            h.mouseWheelDelta = a.delta
        };
        h.UpdateSpriteUnder = function() {
            var a = h.spriteUnder;
            h.spriteUnder = f.GetSpriteAtPoint(l.instance.doc, h.mx, h.my);
            h.clicked || (null !=
                a && a != h.spriteUnder && a.dispatchEvent(h.OutEvent.txy(a, h.mx, h.my)), !l.isMobile && null != h.spriteUnder && h.spriteUnder.mouseEnabled && h.spriteUnder.dispatchEvent(h.OverEvent.txy(h.spriteUnder, h.mx, h.my)));
            l.isMobile || h.clicked || (null != h.spriteUnder && h.spriteUnder.buttonMode ? h.ChangeCursor("button") : h.ChangeCursor("auto"));
            return h.spriteUnder
        };
        h.ChangeCursor = function(a) {
            h.CurCursor != a && (document.body.style.cursor = "button" == a ? "pointer" : "auto", h.CurCursor = a)
        };
        h.mouseDownHandler = function(a) {
            h.SetMouseXY(a.stageX,
                a.stageY);
            h.clickedSprite = h.UpdateSpriteUnder();
            h.clicked && h.lastClicked + 1 < l.instance.frameCount && (h.clicked = !1);
            !h.clicked && null != h.clickedSprite && h.clickedSprite.mouseEnabled && h.clickedSprite.hasEventListener(2) ? (h.spriteUnder.dispatchEvent(h.DownEvent.txy(h.spriteUnder, h.mx, h.my)), null != h.DownSound && 0 < (h.spriteUnder.flags & 512) && u.PlaySound(h.ClickSound)) : h.mdown = !0;
            h.mup = !1;
            h.mctrl = a.ctrlKey;
            h.mshift = a.shiftKey;
            h.clicked = !0;
            h.lastClicked = l.instance.frameCount
        };
        h.mouseUpHandler = function(a) {
            h.SetMouseXY(a.stageX,
                a.stageY);
            h.UpdateSpriteUnder();
            h.clicked && (null != h.clickedSprite && h.clickedSprite == h.spriteUnder && h.clickedSprite.mouseEnabled && (h.spriteUnder.dispatchEvent(h.ClickEvent.txy(h.spriteUnder, h.mx, h.my)), null != h.ClickSound && 0 < (h.spriteUnder.flags & 512) && u.PlaySound(h.ClickSound)), null != h.clickedSprite && h.clickedSprite != h.spriteUnder && (h.spriteUnder = h.clickedSprite));
            h.clicked = !1;
            h.UpdateSpriteUnder();
            h.mdown = !1;
            h.mup = !0
        };
        h.touchMoveHandler = function(a) {
            h.SetTouchXY(a.touchPointID, a.stageX, a.stageY);
            var b =
                h.tClickedSprite,
                c = a.touchPointID;
            a = f.GetSpriteAtPoint(l.instance.doc, h.tx.h[a.touchPointID], h.ty.h[a.touchPointID]);
            b.h[c] = a
        };
        h.GetTouchPointByFirstTouched = function(a) {
            if (0 > a || a >= h.TouchIdArrayLength) return null;
            a = h.TouchIdArray[a];
            h._pTouch.setTo(h.tx.h[a], h.ty.h[a]);
            return h._pTouch
        };
        h.GetLastTouchPoint = function() {
            var a = h.GetLastTouchId();
            return 0 <= a ? (h._pTouch.setTo(h.tx.h[a], h.ty.h[a]), h._pTouch) : null
        };
        h.AddTouchId = function(a) {
            for (var b = 0, c = h.TouchIdArrayLength; b < c;) {
                var d = b++,
                    d = h.TouchIdArrayLength -
                    d - 1;
                h.TouchIdArray[d + 1] = h.TouchIdArray[d]
            }
            h.TouchIdArrayLength++;
            h.TouchIdArray[0] = a
        };
        h.RemoveTouchId = function(a) {
            for (var b = 0, c = 0, d = h.TouchIdArrayLength; c < d;) {
                var e = c++;
                h.TouchIdArray[e] == a ? ++b : h.TouchIdArray[e - b] = h.TouchIdArray[e]
            }
            h.TouchIdArrayLength -= b
        };
        h.GetLastTouchId = function() {
            return 0 < h.TouchIdArrayLength ? h.TouchIdArray[0] : -1
        };
        h.touchDownHandler = function(a) {
            h.AddTouchId(a.touchPointID);
            h.SetTouchXY(a.touchPointID, a.stageX, a.stageY);
            var b = h.tClickedSprite,
                c = a.touchPointID;
            a = f.GetSpriteAtPoint(l.instance.doc,
                h.tx.h[a.touchPointID], h.ty.h[a.touchPointID]);
            b.h[c] = a
        };
        h.touchUpHandler = function(a) {
            h.tx.remove(a.touchPointID);
            h.ty.remove(a.touchPointID);
            h.RemoveTouchId(a.touchPointID);
            h.tClickedSprite.remove(a.touchPointID)
        };
        h.focusOutHandler = function(a) {
            h.hasFocus = !1;
            for (a = 0; 256 > a;) a++
        };
        h.focusInHandler = function(a) {
            h.hasFocus = !0
        };
        var cc = function() {
            this.length = 0
        };
        s.List = cc;
        cc.__name__ = ["List"];
        cc.prototype = {
            add: function(a) {
                a = new zc(a, null);
                null == this.h ? this.h = a : this.q.next = a;
                this.q = a;
                this.length++
            },
            iterator: function() {
                return new Kc(this.h)
            },
            __class__: cc
        };
        var zc = function(a, b) {
            this.item = a;
            this.next = b
        };
        s["_List.ListNode"] = zc;
        zc.__name__ = ["_List", "ListNode"];
        zc.prototype = {
            __class__: zc
        };
        var Kc = function(a) {
            this.head = a
        };
        s["_List.ListIterator"] = Kc;
        Kc.__name__ = ["_List", "ListIterator"];
        Kc.prototype = {
            hasNext: function() {
                return null != this.head
            },
            next: function() {
                var a = this.head.item;
                this.head = this.head.next;
                return a
            },
            __class__: Kc
        };
        var vb = s.OzScreenOrientation = {
            __ename__: ["OzScreenOrientation"],
            __constructs__: ["PORTRAIT", "LANDSCAPE"]
        };
        vb.PORTRAIT = ["PORTRAIT",
            0
        ];
        vb.PORTRAIT.toString = F;
        vb.PORTRAIT.__enum__ = vb;
        vb.LANDSCAPE = ["LANDSCAPE", 1];
        vb.LANDSCAPE.toString = F;
        vb.LANDSCAPE.__enum__ = vb;
        Math.__name__ = ["Math"];
        var M = function(a, b, c) {
            this.name = a;
            this.frames = b;
            this.tilesheetId = c
        };
        s["oz.OzMovieClip"] = M;
        M.__name__ = ["oz", "OzMovieClip"];
        M.prototype = {
            __class__: M
        };
        var q = function() {};
        s.Objects = q;
        q.__name__ = ["Objects"];
        q.Register = function() {
            q.MovieClips = [q.bmpLine, q.bmpPathEdge, q.bmpSysFill, q.cbtnAddition, q.cbtnDivision, q.cbtnInstructions, q.cbtnMixed, q.cbtnMultiplication,
                q.cbtnOK1, q.cbtnPause, q.cbtnPlay1, q.cbtnResume, q.cbtnSoundOff, q.cbtnSoundOn, q.cbtnSubtraction, q.cmcBG, q.cmcBGGGG, q.cmcBGRect, q.cmcBlackEye, q.cmcCrossHair, q.cmcDashedCircle, q.cmcDashedLine, q.cmcDialogBG, q.cmcDot, q.cmcGuiStar, q.cmcHooda, q.cmcInstDlg, q.cmcInstructionScreen, q.cmcInstructionText, q.cmcMadeBy, q.cmcMinimap, q.cmcMinimapPlayer, q.cmcPathNode, q.cmcPausedText, q.cmcSmallSmoke, q.cmcSmallSmokeFrames, q.cmcSmoke, q.cmcSpeedRing, q.cmcStarCount, q.cmcStarGold, q.cmcStompy, q.cmcSuperHoodaTitle, q.cmcWhiteCircle,
                q.cmcWhiteEye, q.cmcWormSegment, q.ctxtMathFont, q.ctxtWhiteMathFont, q.sponsorGGG, q.sysRectBlack, q.sysWhiteRect, q.tileBGRect, q.tileCoin, q.tileJungle, q.tileMenuBG
            ];
            f.RegisterTilesheet(q.BitmapName, q.MovieClips, q.Frames)
        };
        var mb = function() {};
        s.ObjectsLayouts = mb;
        mb.__name__ = ["ObjectsLayouts"];
        mb.cmcInstructions = function(a) {
            var b = f.New(q.cmcDialogBG);
            a.addChild(b);
            b.name = "bg";
            b.set_x(360);
            b.set_y(240);
            b.set_scaleX(18.333053588867188);
            b.set_scaleY(14.66632080078125);
            b = f.New(q.cmcInstDlg);
            a.addChild(b);
            b.set_x(360);
            b.set_y(243);
            b = f.New(q.cmcInstructionScreen);
            a.addChild(b);
            b.name = "screen1";
            b.set_x(157);
            b.set_y(60);
            b = f.New(q.cmcInstructionScreen);
            a.addChild(b);
            b.name = "screen2";
            b.set_x(362);
            b.set_y(165);
            b = f.New(q.cmcInstructionScreen);
            a.addChild(b);
            b.name = "screen3";
            b.set_x(157);
            b.set_y(269);
            b = f.New(q.cmcInstructionText);
            a.addChild(b);
            b.name = "text1";
            b.set_x(441);
            b.set_y(109);
            b = f.New(q.cmcInstructionText);
            a.addChild(b);
            b.name = "text2";
            b.set_x(277);
            b.set_y(212);
            b = f.New(q.cmcInstructionText);
            a.addChild(b);
            b.name = "text3";
            b.set_x(439);
            b.set_y(320);
            b = f.New(q.cbtnOK1);
            a.addChild(b);
            b.name = "btnOK";
            b.set_x(508);
            b.set_y(410)
        };
        mb.cmcPaused = function(a) {
            var b = f.New(q.cmcDialogBG);
            a.addChild(b);
            b.name = "bg";
            b.set_x(360);
            b.set_y(240);
            b.set_scaleX(18.333053588867188);
            b.set_scaleY(14.66632080078125);
            b = f.New(q.cmcPausedText);
            a.addChild(b);
            b.name = "pause";
            b.set_x(361);
            b.set_y(226);
            b = f.New(q.cbtnResume);
            a.addChild(b);
            b.name = "btnPlay";
            b.set_x(360);
            b.set_y(328);
            b = f.New(q.cbtnSoundOn);
            a.addChild(b);
            b.name = "soundOn";
            b.set_x(360);
            b.set_y(131);
            b = f.New(q.cbtnSoundOff);
            a.addChild(b);
            b.name = "soundOff";
            b.set_x(360);
            b.set_y(131)
        };
        mb.cmcPlay = function(a) {
            var b = f.New(q.cmcBG);
            a.addChild(b);
            b.name = "bg";
            b = f.New(q.cmcMinimap);
            a.addChild(b);
            b.name = "minimap";
            b.set_x(672);
            b.set_y(432);
            b.set_alpha(0.49);
            b = f.New(q.ctxtMathFont);
            a.addChild(b);
            b.name = "problem";
            b.set_x(347);
            b.set_y(4);
            b = f.New(q.cbtnPause);
            a.addChild(b);
            b.name = "btnPause";
            b.set_x(691);
            b.set_y(29);
            b.set_scaleX(0.78125);
            b.set_scaleY(0.78125);
            b.set_alpha(0.49);
            b = f.New(q.ctxtWhiteMathFont);
            a.addChild(b);
            b.name = "score";
            b.set_x(4);
            b.set_y(4);
            b = f.New(q.ctxtMathFont);
            a.addChild(b);
            b.name = "problem2";
            b.set_x(4);
            b.set_y(442);
            b = f.New(q.sponsorGGG);
            a.addChild(b);
            b.name = "sponsor";
            b.set_x(108);
            b.set_y(450);
            b.set_scaleX(0.6969757080078125);
            b.set_scaleY(0.6969757080078125)
        };
        mb.cmcPlayOverlay = function(a) {
            var b = f.New(q.tileMenuBG);
            a.addChild(b);
            b.name = "bg";
            b = f.New(q.cmcSuperHoodaTitle);
            a.addChild(b);
            b.name = "title";
            b.set_x(355);
            b.set_y(109);
            b = f.New(q.ctxtMathFont);
            a.addChild(b);
            b.name = "best";
            b.set_x(347);
            b.set_y(191);
            b = f.New(q.ctxtMathFont);
            a.addChild(b);
            b.name = "score";
            b.set_x(347);
            b.set_y(154);
            b = f.New(q.cbtnInstructions);
            a.addChild(b);
            b.name = "btnInstructions";
            b.set_x(360);
            b.set_y(358);
            b = f.New(q.ctxtMathFont);
            a.addChild(b);
            b.name = "problem";
            b.set_x(347);
            b.set_y(4);
            b = f.New(q.cbtnPlay1);
            a.addChild(b);
            b.name = "btnPlay";
            b.set_x(360);
            b.set_y(280);
            b = f.New(q.cbtnSoundOn);
            a.addChild(b);
            b.name = "soundOn";
            b.set_x(688);
            b.set_y(30);
            b.set_scaleX(0.78125);
            b.set_scaleY(0.78125);
            b = f.New(q.cbtnSoundOff);
            a.addChild(b);
            b.name = "soundOff";
            b.set_x(688);
            b.set_y(30);
            b.set_scaleX(0.78125);
            b.set_scaleY(0.78125);
            b = f.New(q.sponsorGGG);
            a.addChild(b);
            b.name = "sponsor";
            b.set_x(360);
            b.set_y(440);
            b.set_scaleX(0.71221923828125);
            b.set_scaleY(0.71221923828125);
            b = f.New(q.cmcMadeBy);
            a.addChild(b);
            b.name = "madeBy";
            b.set_x(65);
            b.set_y(464);
            b = f.New(q.cbtnAddition);
            a.addChild(b);
            b.name = "btnAddition";
            b.set_x(268);
            b.set_y(202);
            b = f.New(q.cbtnSubtraction);
            a.addChild(b);
            b.name = "btnSubtraction";
            b.set_x(452);
            b.set_y(202);
            b = f.New(q.cbtnMultiplication);
            a.addChild(b);
            b.name = "btnMultiplication";
            b.set_x(268);
            b.set_y(280);
            b = f.New(q.cbtnDivision);
            a.addChild(b);
            b.name = "btnDivision";
            b.set_x(452);
            b.set_y(280);
            b = f.New(q.cbtnMixed);
            a.addChild(b);
            b.name = "btnMixed";
            b.set_x(360);
            b.set_y(358)
        };
        var ia = function(a, b, c, d) {
            null == c && (c = !0);
            this.__sync = 1;
            this.__transparent = c;
            this.__revision = 0;
            this.__rect = new pa(0, 0, a, b);
            this.component = Zc.createCanvasElement();
            this.component.width = a;
            this.component.height = b;
            this.context = this.component.getContext("2d");
            ia.setSmoothing(this.context, !0);
            this.__pixelData = this.context.createImageData(1, 1);
            null == d && (d = -1);
            c || (d |= -16777216);
            0 != (d & -16777216) && this.fillRect(this.__rect, d)
        };
        s["openfl.display.BitmapData"] = ia;
        ia.__name__ = ["openfl", "display", "BitmapData"];
        ia.__interfaces__ = [Pa];
        ia.setSmoothing = function(a, b) {
            a.imageSmoothingEnabled = a.oImageSmoothingEnabled = a.msImageSmoothingEnabled = a.webkitImageSmoothingEnabled = a.mozImageSmoothingEnabled = b
        };
        ia.makeColor = function(a) {
            return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + ((a >> 24 & 255) / 255).toFixed(4) +
                ")"
        };
        ia.prototype = {
            fillRect: function(a, b) {
                null == a || 0 >= a.width || 0 >= a.height || (a.equals(this.__rect) && this.__transparent && 0 == (b & -16777216) ? this.component.width = this.component.width : (this.__transparent ? -16777216 != (b & -16777216) && this.context.clearRect(a.x, a.y, a.width, a.height) : b |= -16777216, 0 != (b & -16777216) && (this.context.fillStyle = ia.makeColor(b), this.context.fillRect(a.x, a.y, a.width, a.height)), this.__sync |= 5))
            },
            clone: function() {
                this.syncCanvas();
                var a = new ia(this.component.width, this.component.height,
                    this.__transparent, 0);
                a.context.drawImage(this.component, 0, 0);
                a.__sync |= 5;
                return a
            },
            handle: function() {
                this.syncCanvas();
                0 != (this.__sync & 4) && (this.__revision++, this.__sync &= -5);
                return this.component
            },
            drawToSurface: function(a, b, c, d, e, p, f) {
                b.save();
                null != f && b.imageSmoothingEnabled != f && ia.setSmoothing(b, f);
                null != c && (1 == c.a && 0 == c.b && 0 == c.c && 1 == c.d ? b.translate(c.tx, c.ty) : b.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty));
                b.drawImage(this.handle(), 0, 0);
                b.restore()
            },
            copyPixels: function(a, b, c, d, e, p) {
                null == p && (p = !1);
                this.syncCanvas();
                if (null != d) throw new D("alphaBitmapData is not supported yet.");
                a = a.handle();
                var f, g;
                d = this.component.width;
                e = this.component.height;
                var k;
                null != a ? (f = a.width, k = 0 >= f) : k = !0;
                k ? k = !0 : (g = a.height, k = 0 >= g);
                if (!k) {
                    k = ~~c.x;
                    c = ~~c.y;
                    var I, h, w;
                    null != b ? (I = b.x, h = b.y, w = b.width, b = b.height, 0 > I && (w += I, I = 0), 0 > h && (b += h, h = 0), I + w > f && (w = f - I), h + b > g && (b = g - h)) : (I = h = 0, w = f, b = g);
                    0 > k && (w += k, I -= k, k = 0);
                    0 > c && (b += c, h -= c, c = 0);
                    k + w > d && (w = d - k);
                    c + b > e && (b = e - c);
                    0 >= w || 0 >= b || (this.__transparent && !p && this.context.clearRect(k,
                        c, w, b), this.context.drawImage(a, I, h, w, b, k, c, w, b), this.__sync |= 5)
                }
            },
            draw: function(a, b, c, d, e, p) {
                this.syncCanvas();
                var f = 0;
                this.context.save();
                null != c && (f = c.alphaMultiplier, c.alphaMultiplier = 1, this.context.globalAlpha *= f);
                null != e && (this.context.beginPath(), this.context.rect(e.x, e.y, e.width, e.height), this.context.clip(), this.context.beginPath());
                null != p && ia.setSmoothing(this.context, p);
                a.drawToSurface(this.handle(), this.context, b, c, d, e, null);
                this.context.restore();
                null != c && (c.alphaMultiplier = f);
                this.__sync |=
                    5
            },
            jeashOnLoad: function(a, b) {
                var c = a.texture,
                    d = a.image.width,
                    e = a.image.height;
                c.width = d;
                c.height = e;
                c.getContext("2d").drawImage(a.image, 0, 0, d, e);
                a.bitmapData.width = d;
                a.bitmapData.height = e;
                a.bitmapData.__rect = new pa(0, 0, d, e);
                null != a.inLoader && (c = new fa("complete"), c.set_target(a.inLoader), a.inLoader.dispatchEvent(c))
            },
            nmeLoadFromFile: function(a, b) {
                var c = this,
                    d = window.document.createElement("img");
                if (null != b) {
                    var e = {
                            image: d,
                            texture: this.component,
                            inLoader: b,
                            bitmapData: this
                        },
                        p = ea(this, this.jeashOnLoad);
                    d.addEventListener("load", function(a) {
                        p(e, a)
                    }, !1);
                    d.addEventListener("error", function(a) {
                        d.complete || c.jeashOnLoad(e, a)
                    }, !1)
                }
                d.src = a
            },
            syncCanvas: function() {
                2 == (this.__sync & 3) && (this.context.putImageData(this.__imageData, 0, 0), this.__sync &= -4)
            },
            __class__: ia
        };
        var Mb = function() {
            this.intervalHandle = null;
            this.isTouchScreen = !1;
            this.frameRate = null;
            ua.call(this);
            var a = this.component.style,
                b = window;
            a.position = "absolute";
            a.overflow = "hidden";
            a.left = a.top = "0";
            a.width = a.height = "100%";
            this.mousePos = new xa;
            b.addEventListener("contextmenu",
                function(a) {
                    a.preventDefault()
                });
            b.addEventListener("click", ea(this, this.onMouse));
            b.addEventListener("mousedown", ea(this, this.onMouse));
            b.addEventListener("mouseup", ea(this, this.onMouse));
            b.addEventListener("mousemove", ea(this, this.onMouse));
            b.addEventListener("mousewheel", ea(this, this.onWheel));
            b.addEventListener("DOMMouseScroll", ea(this, this.onWheel));
            b.addEventListener("touchmove", this.getOnTouch(0));
            b.addEventListener("touchstart", this.getOnTouch(1));
            b.addEventListener("touchend", this.getOnTouch(2));
            b.addEventListener("touchcancel", this.getOnTouch(2));
            this.mouseMtxDepth = [];
            this.mouseMtxStack = [];
            this.mouseMtxCache = [];
            this.mouseTriggered = [];
            this.mouseUntrigger = [];
            for (a = -1; 3 > ++a;) this.mouseTriggered[a] = !1, this.mouseUntrigger[a] = this.getMouseUntrigger(a)
        };
        s["openfl.display.Stage"] = Mb;
        Mb.__name__ = ["openfl", "display", "Stage"];
        Mb.__super__ = ua;
        Mb.prototype = R(ua.prototype, {
            _broadcastMouseEvent: function(a) {
                var b = this.mouseOver,
                    c;
                a.stageX = this.mousePos.x;
                a.stageY = this.mousePos.y;
                this.broadcastMouse(this.mouseMtxDepth,
                    a, this.mouseMtxStack, this.mouseMtxCache);
                this.mouseOver = c = a.relatedObject;
                b != c && (null != b && b.dispatchEvent(this._alterMouseEvent(a, "mouseOut")), null != c && c.dispatchEvent(this._alterMouseEvent(a, "mouseOver")))
            },
            _broadcastTouchEvent: function(a, b, c) {
                a.stageX = b;
                a.stageY = c;
                this.broadcastMouse(this.mouseMtxDepth, a, this.mouseMtxStack, this.mouseMtxCache)
            },
            getMouseUntrigger: function(a) {
                var b = this;
                return function() {
                    b.mouseTriggered[a] = !1
                }
            },
            _alterMouseEvent: function(a, b) {
                var c = new fb(b, a.bubbles, a.cancelable,
                    a.localX, a.localY, a.relatedObject, a.ctrlKey, a.altKey, a.shiftKey, a.buttonDown, a.delta);
                c.stageX = a.stageX;
                c.stageY = a.stageY;
                return c
            },
            _translateMouseEvent: function(a, b) {
                return new fb(b, !0, !1, null, null, null, a.ctrlKey, a.altKey, a.shiftKey)
            },
            _translateTouchEvent: function(a, b, c) {
                b = new lc(c, !0, !1, b.identifier, !1, null, null, b.radiusX, b.radiusY, b.force, null, a.ctrlKey, a.altKey, a.shiftKey);
                b.__jsEvent = a;
                return b
            },
            mouseEventPrevent: function(a, b, c) {
                var d = this.mousePos,
                    d = d.x == b && d.y == c;
                if (0 <= a && d && this.mouseTriggered[a]) return !0;
                d || this.mousePos.setTo(b, c);
                0 <= a && !this.mouseTriggered[a] && (this.mouseTriggered[a] = !0, window.setTimeout(this.mouseUntrigger[a], 0));
                1 == a ? this.mouseDown ? this._broadcastMouseEvent(this._alterMouseEvent(this.mouseLastEvent, "mouseUp")) : this.mouseDown = !0 : 2 == a && (this.mouseDown ? this.mouseDown = !1 : this._broadcastMouseEvent(new fb("mouseDown")));
                return !1
            },
            getOnTouch: function(a) {
                var b = this;
                return function(c) {
                    b.onTouch(c, a)
                }
            },
            onTouch: function(a, b) {
                var c = a.targetTouches,
                    d = c.length,
                    e = a.changedTouches,
                    p = e.length,
                    c = 0 < d ? c[0] : 0 < p ? e[0] : null,
                    f;
                a.preventDefault();
                this.isTouchScreen = !0;
                null != c && (0 == b || 1 == b && d == p || 2 == b && 0 == d && 0 < p) && !this.mouseEventPrevent(b, c.pageX, c.pageY) && (this.mouseLastEvent = new fb(1 == b ? "mouseDown" : 2 == b ? "mouseUp" : "mouseMove"), this.mouseLastEvent.__jsEvent = a, this._broadcastMouseEvent(this.mouseLastEvent), 2 == b && (d = new fb("mouseClick"), d.__jsEvent = a, this._broadcastMouseEvent(d)));
                if (0 < p) {
                    switch (b) {
                        case 1:
                            c = "touchBegin";
                            break;
                        case 2:
                            c = "touchEnd";
                            break;
                        default:
                            c = "touchMove"
                    }
                    for (d = -1; ++d < p;) f = e[d],
                        this._broadcastTouchEvent(this._translateTouchEvent(a, f, c), f.pageX, f.pageY)
                }
            },
            onWheel: function(a) {
                var b = this._translateMouseEvent(a, "mouseWheel"),
                    c = a.wheelDelta,
                    c = null != c ? 40 < Math.abs(c) ? Math.round(c / 40) : 0 > c ? -1 : 0 < c ? 1 : 0 : -a.detail;
                b.delta = c;
                this.mousePos.setTo(a.pageX, a.pageY);
                this._broadcastMouseEvent(b)
            },
            onMouse: function(a) {
                var b = null,
                    c = -1,
                    d;
                if ("mousemove" == a.type) b = "mouseMove", c = 0;
                else switch (d = a.button, a.type) {
                    case "click":
                        0 == d ? b = "mouseClick" : 1 == d ? b = "rightClick" : 2 == d && (b = "middleClick");
                        break;
                    case "mousedown":
                        0 ==
                            d ? b = "mouseDown" : 1 == d ? b = "middleMouseDown" : 2 == d && (b = "rightMouseDown");
                        c = 1;
                        break;
                    case "mouseup":
                        0 == d ? b = "mouseUp" : 1 == d ? b = "middleMouseUp" : 2 == d && (b = "rightMouseUp");
                        c = 2;
                        break;
                    default:
                        return
                }
                this.mouseEventPrevent(c, a.pageX, a.pageY) || (this.mouseLastEvent = new fb(b), this.mouseLastEvent.__jsEvent = a, this._broadcastMouseEvent(this.mouseLastEvent))
            },
            hitTestLocal: function(a, b, c, d) {
                return d ? this.visible : !0
            },
            addEventListener: function(a, b, c, d, e) {
                null == e && (e = !1);
                null == d && (d = 0);
                null == c && (c = !1);
                var p = this.component;
                this.component =
                    window;
                ua.prototype.addEventListener.call(this, a, b, c, d, e);
                this.component = p
            },
            removeEventListener: function(a, b, c) {
                null == c && (c = !1);
                var d = this.component;
                this.component = window;
                ua.prototype.removeEventListener.call(this, a, b, c);
                this.component = d
            },
            get_focus: function() {
                var a = document.activeElement,
                    b;
                null != a ? (a = a.node, b = S.__instanceof(a, Wa)) : b = !1;
                return b ? a : null
            },
            set_focus: function(a) {
                null != a ? a.giveFocus() : this.component.blur();
                return a
            },
            get_stageWidth: function() {
                return window.innerWidth
            },
            get_stageHeight: function() {
                return window.innerHeight
            },
            get_stage: function() {
                return this
            },
            set_frameRate: function(a) {
                this.frameRate != a && (null != this.intervalHandle && (0 >= this.frameRate ? window._cancelAnimationFrame(this.intervalHandle) : window.clearInterval(this.intervalHandle)), this.intervalHandle = 0 >= (this.frameRate = a) ? window._requestAnimationFrame(ea(this, this.onTimer)) : window.setInterval(ea(this, this.onTimer), Math.max(0, 1E3 / a) | 0));
                return a
            },
            onTimer: function() {
                H.getTimer();
                for (var a = -1; ++a < H.schLength;) H.schList[a](), H.schList[a] = null;
                H.schLength = 0;
                this.broadcastEvent(new fa("enterFrame"));
                0 >= this.frameRate && (this.intervalHandle = window._requestAnimationFrame(ea(this, this.onTimer)))
            },
            __class__: Mb,
            __properties__: R(ua.prototype.__properties__, {
                get_stageHeight: "get_stageHeight",
                get_stageWidth: "get_stageWidth",
                set_focus: "set_focus",
                get_focus: "get_focus",
                set_frameRate: "set_frameRate"
            })
        });
        var sc = function(a) {
            if (null == a) throw new D("Cannot create Transform with no DisplayObject.");
            this._displayObject = a;
            this._matrix = new na;
            this._fullMatrix = new na;
            this.set_colorTransform(new Vb)
        };
        s["openfl.geom.Transform"] =
            sc;
        sc.__name__ = ["openfl", "geom", "Transform"];
        sc.prototype = {
            set_colorTransform: function(a) {
                return this.colorTransform = a
            },
            get_matrix: function() {
                var a = this._matrix;
                return new na(a.a, a.b, a.c, a.d, a.tx, a.ty)
            },
            __class__: sc,
            __properties__: {
                get_matrix: "get_matrix",
                set_colorTransform: "set_colorTransform"
            }
        };
        var na = function(a, b, c, d, e, p) {
            this.a = null == a ? 1 : a;
            this.b = null == b ? 0 : b;
            this.c = null == c ? 0 : c;
            this.d = null == d ? 1 : d;
            this.tx = null == e ? 0 : e;
            this.ty = null == p ? 0 : p
        };
        s["openfl.geom.Matrix"] = na;
        na.__name__ = ["openfl", "geom", "Matrix"];
        na.create = function() {
            var a = na.pool;
            return 0 < a.length ? a.pop() : new na
        };
        na.prototype = {
            identity: function() {
                this.a = this.d = 1;
                this.b = this.c = this.tx = this.ty = 0
            },
            isIdentity: function() {
                return 1 == this.a && 1 == this.d && 0 == this.tx && 0 == this.ty && 0 == this.b ? 0 == this.c : !1
            },
            copy: function(a) {
                this.a = a.a;
                this.b = a.b;
                this.c = a.c;
                this.d = a.d;
                this.tx = a.tx;
                this.ty = a.ty
            },
            invert: function() {
                var a, b = this.a * this.d - this.b * this.c;
                0 == b ? (this.a = this.b = this.c = this.d = 0, this.tx = -this.tx, this.ty = -this.ty) : (b = 1 / b, a = this.d * b, this.d = this.a * b, this.a =
                    a, this.b *= -b, this.c *= -b, a = -this.a * this.tx - this.c * this.ty, this.ty = -this.b * this.tx - this.d * this.ty, this.tx = a)
            },
            translate: function(a, b) {
                this.tx += a;
                this.ty += b
            },
            rotate: function(a) {
                var b = Math.cos(a);
                a = Math.sin(a);
                var c = this.a * b - this.b * a;
                this.b = this.a * a + this.b * b;
                this.a = c;
                c = this.c * b - this.d * a;
                this.d = this.c * a + this.d * b;
                this.c = c;
                c = this.tx * b - this.ty * a;
                this.ty = this.tx * a + this.ty * b;
                this.tx = c
            },
            scale: function(a, b) {
                this.a *= a;
                this.b *= b;
                this.c *= a;
                this.d *= b;
                this.tx *= a;
                this.ty *= b
            },
            concat: function(a) {
                var b = this.a * a.a + this.b *
                    a.c;
                this.b = this.a * a.b + this.b * a.d;
                this.a = b;
                b = this.c * a.a + this.d * a.c;
                this.d = this.c * a.b + this.d * a.d;
                this.c = b;
                b = this.tx * a.a + this.ty * a.c + a.tx;
                this.ty = this.tx * a.b + this.ty * a.d + a.ty;
                this.tx = b
            },
            __class__: na
        };
        var Vb = function(a, b, c, d, e, p, f, g) {
            this.redMultiplier = null != a ? a : 1;
            this.greenMultiplier = null != b ? b : 1;
            this.blueMultiplier = null != c ? c : 1;
            this.alphaMultiplier = null != d ? d : 1;
            this.redOffset = null != e ? e : 0;
            this.greenOffset = null != p ? p : 0;
            this.blueOffset = null != f ? f : 0;
            this.alphaOffset = null != g ? g : 0
        };
        s["openfl.geom.ColorTransform"] =
            Vb;
        Vb.__name__ = ["openfl", "geom", "ColorTransform"];
        Vb.prototype = {
            __class__: Vb
        };
        var dc = function() {};
        s["haxe.IMap"] = dc;
        dc.__name__ = ["haxe", "IMap"];
        var Oa = function() {
            this.h = {
                __keys__: {}
            }
        };
        s["haxe.ds.ObjectMap"] = Oa;
        Oa.__name__ = ["haxe", "ds", "ObjectMap"];
        Oa.__interfaces__ = [dc];
        Oa.assignId = function(a) {
            return a.__id__ = ++Oa.count
        };
        Oa.getId = function(a) {
            return a.__id__
        };
        Oa.prototype = {
            set: function(a, b) {
                var c = a.__id__ || (a.__id__ = ++Oa.count);
                this.h[c] = b;
                this.h.__keys__[c] = a
            },
            remove: function(a) {
                a = a.__id__;
                if (null ==
                    this.h.__keys__[a]) return !1;
                delete this.h[a];
                delete this.h.__keys__[a];
                return !0
            },
            keys: function() {
                var a = [],
                    b;
                for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
                return J.iter(a)
            },
            __class__: Oa
        };
        var H = function() {};
        s["openfl.Lib"] = H;
        H.__name__ = ["openfl", "Lib"];
        H.__properties__ = {
            get_stage: "get_stage",
            get_current: "get_current"
        };
        H.__init = function() {
            H.schList = [];
            H.schLength = 0;
            var a = window,
                b = "equestAnimationFrame";
            H.getTimer();
            a._requestAnimationFrame = a["r" + b] || a["webkitR" + b] || a["mozR" +
                b] || a["oR" + b] || a["msR" + b] || function(b) {
                var d = 700 / H.get_stage().frameRate | 0;
                return a.setTimeout(b, d)
            };
            b = "ancelAnimationFrame";
            a._cancelAnimationFrame = a["c" + b] || a["webkitC" + b] || a["mozC" + b] || a["oC" + b] || a["msC" + b] || function(b) {
                a.clearTimeout(b)
            }
        };
        H.getTimer = function() {
            return new Date - H.qTimeStamp | 0
        };
        H.getURL = function(a, b) {
            window.open(a.url, b)
        };
        H.jsNode = function(a) {
            var b = document.createElement(a),
                c = b.style;
            c.position = "absolute";
            switch (a) {
                case "canvas":
                    c.setProperty("-webkit-touch-callout", "none", null);
                    H.setCSSProperties(c, "user-select", "none", 47);
                    break;
                case "input":
                case "textarea":
                    c.outline = "none"
            }
            return b
        };
        H.get_current = function() {
            null == H.qCurrent && H.get_stage().addChild(H.qCurrent = new Wb);
            return H.qCurrent
        };
        H.get_stage = function() {
            null == H.qStage && document.body.appendChild((H.qStage = new Mb).component);
            return H.qStage
        };
        H.schedule = function(a) {
            H.schList[H.schLength++] = a
        };
        H.rgbf = function(a, b) {
            return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + b.toFixed(4) + ")"
        };
        H.setCSSProperties = function(a, b,
            c, d) {
            d || (d = 31);
            d & 1 && a.setProperty(b, c, null);
            d & 2 && a.setProperty("-webkit-" + b, c, null);
            d & 4 && a.setProperty("-moz-" + b, c, null);
            d & 8 && a.setProperty("-ms-" + b, c, null);
            d & 16 && a.setProperty("-o-" + b, c, null);
            d & 32 && a.setProperty("-khtml-" + b, c, null)
        };
        var Wb = function() {
            ua.call(this);
            this.enabled = !0;
            this.qIndex = this.qTotal = 0;
            this.loaderInfo = kb.create()
        };
        s["openfl.display.MovieClip"] = Wb;
        Wb.__name__ = ["openfl", "display", "MovieClip"];
        Wb.__super__ = Aa;
        Wb.prototype = R(Aa.prototype, {
            __class__: Wb
        });
        var kb = function() {
            this.eventList =
                new X;
            this.bytesLoaded = this.bytesTotal = 0;
            this.childAllowsParent = !0;
            this.parameters = {}
        };
        s["openfl.display.LoaderInfo"] = kb;
        kb.__name__ = ["openfl", "display", "LoaderInfo"];
        kb.create = function(a) {
            var b = new kb;
            null != a ? b.loader = a : b.url = "";
            return b
        };
        kb.__super__ = ta;
        kb.prototype = R(ta.prototype, {
            __class__: kb
        });
        var K = function() {};
        s.Std = K;
        K.__name__ = ["Std"];
        K.string = function(a) {
            return S.__string_rec(a, "")
        };
        K.parseInt = function(a) {
            var b = parseInt(a, 10);
            0 != b || 120 != J.cca(a, 1) && 88 != J.cca(a, 1) || (b = parseInt(a));
            return isNaN(b) ?
                null : b
        };
        var pa = function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = d
        };
        s["openfl.geom.Rectangle"] = pa;
        pa.__name__ = ["openfl", "geom", "Rectangle"];
        pa.prototype = {
            equals: function(a) {
                return this.x == a.x && this.y == a.y && this.width == a.width ? this.height == a.height : !1
            },
            setVoid: function() {
                this.width -= 2147483647 - this.x;
                this.x = 2147483647;
                this.width = -2147483648 - this.x;
                this.height -= 2147483647 - this.y;
                this.y = 2147483647;
                this.height = -2147483648 - this.y
            },
            contains: function(a, b) {
                return 0 <= (a -= this.x) && 0 <= (b -= this.y) && a < this.width ? b < this.height : !1
            },
            __class__: pa
        };
        var Zc = function() {};
        s["openfl.bitfive.NodeTools"] = Zc;
        Zc.__name__ = ["openfl", "bitfive", "NodeTools"];
        Zc.createCanvasElement = function() {
            var a = window.document.createElement("canvas"),
                b = a.style;
            b.position = "absolute";
            b.setProperty("-webkit-touch-callout", "none", null);
            $c.setProperties(b, "user-select", "none", 63);
            return a
        };
        var $c = function() {};
        s["openfl.bitfive.StyleTools"] = $c;
        $c.__name__ = ["openfl", "bitfive",
            "StyleTools"
        ];
        $c.setProperties = function(a, b, c, d) {
            null == d && (d = 31);
            d & 1 && a.setProperty("" + b, c, null);
            d & 2 && a.setProperty("-webkit-" + b, c, null);
            d & 4 && a.setProperty("-moz-" + b, c, null);
            d & 8 && a.setProperty("-ms-" + b, c, null);
            d & 16 && a.setProperty("-o-" + b, c, null);
            d & 32 && a.setProperty("-khtml-" + b, c, null)
        };
        var Ba = function(a, b, c, d) {
            a = Ba.image;
            ia.call(this, a.width, a.height, !0, 0);
            this.context.drawImage(a, 0, 0)
        };
        s.PreloaderLogoBMD = Ba;
        Ba.__name__ = ["PreloaderLogoBMD"];
        Ba.preload = function() {
            var a = document.createElement("img");
            C.loadEmbed(Ba.image = a);
            a.src = "data:image/png;base64,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"
        };
        Ba.__super__ = ia;
        Ba.prototype = R(ia.prototype, {
            __class__: Ba
        });
        var G = function() {};
        s["haxe.Log"] = G;
        G.__name__ = ["haxe", "Log"];
        G.trace = function(a, b) {
            S.__trace(a, b)
        };
        var S = function() {};
        s["js.Boot"] = S;
        S.__name__ = ["js", "Boot"];
        S.__unhtml = function(a) {
            return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
        };
        S.__trace = function(a, b) {
            var c = null != b ? b.fileName + ":" + b.lineNumber + ": " : "",
                c = c + S.__string_rec(a, "");
            if (null != b && null != b.customParams)
                for (var d = 0, e = b.customParams; d < e.length;) {
                    var p =
                        e[d];
                    ++d;
                    c += "," + S.__string_rec(p, "")
                }
            var f;
            "undefined" != typeof document ? (f = document.getElementById("haxe:trace"), d = null != f) : d = !1;
            d ? f.innerHTML += S.__unhtml(c) + "<br/>" : "undefined" != typeof console && null != console.log && console.log(c)
        };
        S.getClass = function(a) {
            if (a instanceof Array && null == a.__enum__) return Array;
            var b = a.__class__;
            if (null != b) return b;
            a = S.__nativeClassName(a);
            return null != a ? S.__resolveNativeClass(a) : null
        };
        S.__string_rec = function(a, b) {
            if (null == a) return "null";
            if (5 <= b.length) return "<...>";
            var c =
                typeof a;
            "function" == c && (a.__name__ || a.__ename__) && (c = "object");
            switch (c) {
                case "function":
                    return "<function>";
                case "object":
                    if (a instanceof Array) {
                        if (a.__enum__) {
                            if (2 == a.length) return a[0];
                            c = a[0] + "(";
                            b += "\t";
                            for (var d = 2, e = a.length; d < e;) var p = d++,
                                c = 2 != p ? c + ("," + S.__string_rec(a[p], b)) : c + S.__string_rec(a[p], b);
                            return c + ")"
                        }
                        c = a.length;
                        d = "[";
                        b += "\t";
                        for (e = 0; e < c;) p = e++, d += (0 < p ? "," : "") + S.__string_rec(a[p], b);
                        return d + "]"
                    }
                    try {
                        d = a.toString
                    } catch (f) {
                        return "???"
                    }
                    if (null != d && d != Object.toString && "function" == typeof d &&
                        (c = a.toString(), "[object Object]" != c)) return c;
                    c = null;
                    d = "{\n";
                    b += "\t";
                    e = null != a.hasOwnProperty;
                    for (c in a) e && !a.hasOwnProperty(c) || "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + S.__string_rec(a[c], b));
                    b = b.substring(1);
                    return d + ("\n" + b + "}");
                case "string":
                    return a;
                default:
                    return String(a)
            }
        };
        S.__interfLoop = function(a, b) {
            if (null == a) return !1;
            if (a == b) return !0;
            var c = a.__interfaces__;
            if (null != c)
                for (var d = 0, e = c.length; d < e;) {
                    var p =
                        d++,
                        p = c[p];
                    if (p == b || S.__interfLoop(p, b)) return !0
                }
            return S.__interfLoop(a.__super__, b)
        };
        S.__instanceof = function(a, b) {
            if (null == b) return !1;
            switch (b) {
                case Array:
                    return a instanceof Array ? null == a.__enum__ : !1;
                case nd:
                    return "boolean" == typeof a;
                case Bd:
                    return !0;
                case od:
                    return "number" == typeof a;
                case Cd:
                    return "number" == typeof a ? (a | 0) === a : !1;
                case String:
                    return "string" == typeof a;
                default:
                    if (null != a)
                        if ("function" == typeof b) {
                            if (a instanceof b || S.__interfLoop(S.getClass(a), b)) return !0
                        } else {
                            if ("object" == typeof b &&
                                S.__isNativeObj(b) && a instanceof b) return !0
                        }
                    else return !1;
                    return b == pd && null != a.__name__ || b == qd && null != a.__ename__ ? !0 : a.__enum__ == b
            }
        };
        S.__cast = function(a, b) {
            if (S.__instanceof(a, b)) return a;
            throw new D("Cannot cast " + K.string(a) + " to " + K.string(b));
        };
        S.__nativeClassName = function(a) {
            a = S.__toStr.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        };
        S.__isNativeObj = function(a) {
            return null != S.__nativeClassName(a)
        };
        S.__resolveNativeClass = function(a) {
            return Yc[a]
        };
        var Ac = function() {};
        s["openfl.display.ILoader"] = Ac;
        Ac.__name__ = ["openfl", "display", "ILoader"];
        Ac.prototype = {
            __class__: Ac
        };
        var ac = function() {
            ua.call(this);
            this.contentLoaderInfo = kb.create(this)
        };
        s["openfl.display.Loader"] = ac;
        ac.__name__ = ["openfl", "display", "Loader"];
        ac.__interfaces__ = [Ac];
        ac.__super__ = Aa;
        ac.prototype = R(Aa.prototype, {
            load: function(a, b) {
                var c = a.url.split(".");
                0 < c.length && c[c.length - 1].toLowerCase();
                var c = a.url,
                    d = c.lastIndexOf(".");
                if (0 > d) throw new D('Extension must be specified, got "' + c + '"');
                var e = !0,
                    d = c.substring(d + 1);
                switch (d) {
                    case "gif":
                        d = "image/gif";
                        break;
                    case "jpeg":
                    case "jpg":
                        e = !1;
                        d = "image/jpeg";
                        break;
                    case "png":
                        d = "image/png";
                        break;
                    case "swf":
                        d = "application/x-shockwave-flash";
                        break;
                    default:
                        throw new D('Unrecognized extension "' + d + '" in "' + c + '"');
                }
                this.contentLoaderInfo.url = c;
                this.contentLoaderInfo.contentType = d;
                this.mImage = new ia(0, 0, e);
                try {
                    this.contentLoaderInfo.addEventListener("complete", ea(this, this.handleLoad), !1), this.mImage.nmeLoadFromFile(a.url, this.contentLoaderInfo), this.content =
                        new Sa(this.mImage), this.contentLoaderInfo.content = this.content, this.addChild(this.content)
                } catch (p) {
                    p instanceof D && (p = p.val);
                    G.trace("Error " + K.string(p), {
                        fileName: "Loader.hx",
                        lineNumber: 62,
                        className: "openfl.display.Loader",
                        methodName: "load"
                    });
                    c = new ec("ioError");
                    c.set_currentTarget(this);
                    this.contentLoaderInfo.dispatchEvent(c);
                    return
                }
                null == this.mShape && (this.mShape = new gb, this.addChild(this.mShape))
            },
            handleLoad: function(a) {
                a.set_currentTarget(this);
                this.contentLoaderInfo.removeEventListener("complete",
                    ea(this, this.handleLoad))
            },
            __class__: ac
        });
        var Ra = function() {};
        s["haxe.Resource"] = Ra;
        Ra.__name__ = ["haxe", "Resource"];
        Ra.listNames = function() {
            for (var a = [], b = 0, c = Ra.content; b < c.length;) {
                var d = c[b];
                ++b;
                a.push(d.name)
            }
            return a
        };
        Ra.getString = function(a) {
            for (var b = 0, c = Ra.content; b < c.length;) {
                var d = c[b];
                ++b;
                if (d.name == a) return null != d.str ? d.str : Ib.decode(d.data).toString()
            }
            return null
        };
        var ma = function() {};
        s.StringTools = ma;
        ma.__name__ = ["StringTools"];
        ma.htmlEscape = function(a, b) {
            a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
            return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a
        };
        ma.startsWith = function(a, b) {
            return a.length >= b.length ? J.substr(a, 0, b.length) == b : !1
        };
        ma.isSpace = function(a, b) {
            var c = J.cca(a, b);
            return 8 < c && 14 > c ? !0 : 32 == c
        };
        ma.ltrim = function(a) {
            for (var b = a.length, c = 0; c < b && ma.isSpace(a, c);) ++c;
            return 0 < c ? J.substr(a, c, b - c) : a
        };
        ma.rtrim = function(a) {
            for (var b = a.length, c = 0; c < b && ma.isSpace(a, b - c - 1);) ++c;
            return 0 < c ? J.substr(a, 0, b - c) : a
        };
        ma.trim = function(a) {
            return ma.ltrim(ma.rtrim(a))
        };
        ma.replace = function(a, b,
            c) {
            return a.split(b).join(c)
        };
        var U = function() {};
        s.Type = U;
        U.__name__ = ["Type"];
        U.getClassName = function(a) {
            a = a.__name__;
            return null == a ? null : a.join(".")
        };
        U.getEnumName = function(a) {
            return a.__ename__.join(".")
        };
        U.resolveClass = function(a) {
            a = s[a];
            return null != a && a.__name__ ? a : null
        };
        U.resolveEnum = function(a) {
            a = s[a];
            return null != a && a.__ename__ ? a : null
        };
        U.createInstance = function(a, b) {
            switch (b.length) {
                case 0:
                    return new a;
                case 1:
                    return new a(b[0]);
                case 2:
                    return new a(b[0], b[1]);
                case 3:
                    return new a(b[0], b[1], b[2]);
                case 4:
                    return new a(b[0], b[1], b[2], b[3]);
                case 5:
                    return new a(b[0], b[1], b[2], b[3], b[4]);
                case 6:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
                case 7:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
                case 8:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
                case 9:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
                case 10:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9]);
                case 11:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10]);
                case 12:
                    return new a(b[0], b[1],
                        b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11]);
                case 13:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12]);
                case 14:
                    return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13]);
                default:
                    throw new D("Too many arguments");
            }
        };
        U.createEmptyInstance = function(a) {
            function b() {}
            b.prototype = a.prototype;
            return new b
        };
        U.createEnum = function(a, b, c) {
            var d = Z.field(a, b);
            if (null == d) throw new D("No such constructor " + b);
            if (Z.isFunction(d)) {
                if (null == c) throw new D("Constructor " +
                    b + " need parameters");
                return d.apply(a, c)
            }
            if (null != c && 0 != c.length) throw new D("Constructor " + b + " does not need parameters");
            return d
        };
        U["typeof"] = function(a) {
            switch (typeof a) {
                case "boolean":
                    return aa.TBool;
                case "function":
                    return a.__name__ || a.__ename__ ? aa.TObject : aa.TFunction;
                case "number":
                    return Math.ceil(a) == a % 2147483648 ? aa.TInt : aa.TFloat;
                case "object":
                    if (null == a) return aa.TNull;
                    var b = a.__enum__;
                    if (null != b) return aa.TEnum(b);
                    a = S.getClass(a);
                    return null != a ? aa.TClass(a) : aa.TObject;
                case "string":
                    return aa.TClass(String);
                case "undefined":
                    return aa.TNull;
                default:
                    return aa.TUnknown
            }
        };
        var ga = function() {};
        s["platforms.PlatformHTML5"] = ga;
        ga.__name__ = ["platforms", "PlatformHTML5"];
        ga.hasInside = function(a) {
            return 0 <= window.location.href.indexOf(a)
        };
        ga.invalidRect = function() {
            return ga.resizeW == ga.getWidth() ? ga.resizeH != ga.getHeight() : !0
        };
        ga.getWidth = function() {
            return window.innerWidth
        };
        ga.getHeight = function() {
            return window.innerHeight
        };
        ga.resize = function() {
            var a = window.innerWidth,
                b = window.innerHeight;
            G.trace("new size: ", {
                fileName: "PlatformHTML5.hx",
                lineNumber: 64,
                className: "platforms.PlatformHTML5",
                methodName: "resize",
                customParams: [a, b]
            });
            ga.resizeW = a;
            ga.resizeH = b;
            var c = a,
                d = b,
                e = c / d;
            ga.offsetX = ga.offsetY = 0;
            var p = 1,
                p = !0;
            if (d > c && l.PORTRAIT_HEIGHT_MIN < l.PORTRAIT_HEIGHT_MAX || l.LANDSCAPE_WIDTH_MIN == l.LANDSCAPE_WIDTH_MAX) p = !1;
            if (p) {
                var p = 1 * l.LANDSCAPE_WIDTH_MAX / l.LANDSCAPE_HEIGHT,
                    f = 1 * l.LANDSCAPE_WIDTH_MIN / l.LANDSCAPE_HEIGHT;
                e > p ? (c = d * p, ga.offsetX = (a - c) / 2, l.WIDTH = l.LANDSCAPE_WIDTH_MAX) : e < f ? (d = c / f, ga.offsetY = (b - d) / 2, l.WIDTH =
                    l.LANDSCAPE_WIDTH_MIN) : (ga.offsetY = ga.offsetX = 0, l.WIDTH = Math.round(e * l.LANDSCAPE_HEIGHT));
                p = d / l.LANDSCAPE_HEIGHT;
                l.HEIGHT = l.LANDSCAPE_HEIGHT
            } else p = 1 * l.PORTRAIT_WIDTH / l.PORTRAIT_HEIGHT_MIN, f = 1 * l.PORTRAIT_WIDTH / l.PORTRAIT_HEIGHT_MAX, e > p ? (c = d * p, ga.offsetX = (a - c) / 2, l.HEIGHT = l.PORTRAIT_HEIGHT_MIN) : e < f ? (d = c / f, ga.offsetY = (b - d) / 2, l.HEIGHT = l.PORTRAIT_HEIGHT_MAX) : (ga.offsetY = ga.offsetX = 0, l.HEIGHT = Math.round(l.PORTRAIT_WIDTH / e)), p = c / l.PORTRAIT_WIDTH, l.WIDTH = l.PORTRAIT_WIDTH;
            l.instance.set_scaleX(p);
            l.instance.set_scaleY(p);
            a = l.instance.rotateDeviceSprite;
            null != a && a.set_visible(!1);
            a = $("#oz_game");
            b = 0;
            for (e = a.length; b < e;) p = b++, p = a[p], p.style.width = c + "px", p.style.height = d + "px", p.style.left = ga.offsetX + "px", p.style.top = ga.offsetY + "px", p.style.position = "absolute";
            window.scrollTo(0, 1)
        };
        var f = function(a, b) {
            this.dispatchLock = !1;
            this.animation = this.eventListeners = null;
            this.showRight = -1;
            this.colorTransform = null;
            this.reset();
            this.PoolId = -1;
            null == b && (b = W.EMPTY);
            this.mc = a;
            this.type = null != a ? W.BITMAP : b;
            b == W.POLYGON ? this.flSprite =
                new Aa : b == W.TEXT && (this.textAlign = V.LEFT, this.text = "")
        };
        s["oz.OzSprite"] = f;
        f.__name__ = ["oz", "OzSprite"];
        f.StaticInit = function() {
            f.Sprites = [];
            for (var a = f.FreeId = 0; 1E3 > a;) {
                var b = a++;
                f.Sprites[b] = new f;
                f.Sprites[b].PoolId = b
            }
            f.toRemove = [];
            f.toRemoveId = 0;
            f.TilesheetId = -1;
            f.DrawingAlpha = !1;
            f.DrawingSmooth = l.DEFAULT_SMOOTH;
            f.FloatArrays = new va;
            f.ShowRights = new va;
            f.DrawArray = [];
            f.DrawArrayLength = 0;
            f.Tilesheets = [];
            f.Bitmaps = [];
            f.BitmapsIds = [];
            f.BitmapsNames = [];
            f.TilesheetFrames = [];
            f.TilesheetBitmapDatas = [];
            f.DrawMatrix = new na;
            f.MainMatrix = new na;
            f.TileMatrix = new na;
            f.DrawPoint = new xa;
            f.DrawRect = new pa;
            f.AlphaColorTransform = new Vb
        };
        f.appendTilesheetFrame = function(a, b, c, d, e, p, r, g, k) {
            f.DrawRect.x = d;
            f.DrawRect.y = e;
            f.DrawRect.width = p;
            f.DrawRect.height = r;
            f.DrawPoint.x = f.DrawPoint.y = 0;
            c = f.TilesheetFrames[a.tilesheetId].length;
            b = new M(b, [c], a.tilesheetId);
            f.TilesheetFrames[a.tilesheetId].push([f.DrawRect.x, f.DrawRect.y, f.DrawRect.width, f.DrawRect.height, g, k]);
            f.Tilesheets[a.tilesheetId].addTileRect(new pa(f.DrawRect.x,
                f.DrawRect.y, f.DrawRect.width, f.DrawRect.height), new xa(g, k));
            f.Bitmaps.push(b);
            f.BitmapsIds.push(f.BitmapsIds.length);
            f.BitmapsNames.push(b.name);
            return c
        };
        f.ExpandTiles = function(a) {
            x.SortIdsByName(f.BitmapsIds, f.BitmapsNames);
            var b = new X,
                c = null;
            if (null != a)
                for (a = a.elementsNamed("objects"); a.hasNext();) {
                    c = a.next();
                    break
                }
            for (c = c.elements(); c.hasNext();)
                for (a = c.next().elementsNamed("graphics"); a.hasNext();) {
                    var d = a.next();
                    if ("tile" == d.get("type") && "1" == d.get("spriteTile")) {
                        var e = d.get("src");
                        if (null !=
                            O[e] ? !b.existsReserved(e) : !b.h.hasOwnProperty(e))
                            if (e = f.GetMCByString(e), null == e) G.trace("ERROR: Cannot expand tile thats not found in bitmaps", {
                                fileName: "OzSprite.hx",
                                lineNumber: 275,
                                className: "oz.OzSprite",
                                methodName: "ExpandTiles"
                            });
                            else {
                                var p = 40;
                                if (null == d.get("size")) p = K.parseInt("240");
                                else throw new D("Size shouldn't be defined here, try project.xml");
                                f.SliceExpandTile(e, p);
                                x.SortIdsByName(f.BitmapsIds, f.BitmapsNames)
                            }
                    }
                }
        };
        f.SliceExpandTile = function(a, b, c) {
            null == c && (c = 1);
            var d = f.TilesheetFrames[a.tilesheetId][a.frames[c -
                1]];
            c = f.GetTilesheetBitmapData(a.tilesheetId, a.frames[c - 1]);
            for (var e = Math.ceil((c.component.height - 1) / b), p = Math.ceil((c.component.width - 1) / b), r = c.component.height % b, g = 0; g < e;)
                for (var k = g++, I = 0, h = p; I < h;) {
                    var w = I++;
                    0 != r ? 0 == k ? (f.DrawRect.x = w * b, f.DrawRect.y = 0, f.DrawRect.width = Math.min(b, c.component.width - f.DrawRect.x), f.DrawRect.height = Math.min(b, r), f.DrawPoint.x = 0, f.DrawPoint.y = b - r) : (f.DrawRect.x = w * b, f.DrawRect.y = (k - 1) * b + r, f.DrawRect.width = Math.min(b, c.component.width - f.DrawRect.x), f.DrawRect.height =
                        Math.min(b, c.component.height - f.DrawRect.y), f.DrawPoint.x = 0, f.DrawPoint.y = 0) : (f.DrawRect.x = w * b, f.DrawRect.y = k * b, f.DrawRect.width = Math.min(b, c.component.width - f.DrawRect.x), f.DrawRect.height = Math.min(b, c.component.height - f.DrawRect.y), f.DrawPoint.x = 0, f.DrawPoint.y = 0);
                    a.frames.push(f.TilesheetFrames[a.tilesheetId].length);
                    f.TilesheetFrames[a.tilesheetId].push([d[0] + f.DrawRect.x, d[1] + f.DrawRect.y, f.DrawRect.width, f.DrawRect.height, -f.DrawPoint.x, -f.DrawPoint.y]);
                    f.Tilesheets[a.tilesheetId].addTileRect(new pa(d[0] +
                        f.DrawRect.x, d[1] + f.DrawRect.y, f.DrawRect.width, f.DrawRect.height), new xa(-f.DrawPoint.x, -f.DrawPoint.y))
                }
        };
        f.RegisterTilesheet = function(a, b, c, d, e, p) {
            null == p && (p = !1);
            null == e && (e = !1);
            var r = d;
            G.trace("calling get bitmapdata with", {
                fileName: "OzSprite.hx",
                lineNumber: 489,
                className: "oz.OzSprite",
                methodName: "RegisterTilesheet",
                customParams: ["assets/" + a]
            });
            null == d && (r = la.getBitmapData("assets/" + a));
            G.trace("end of call of getbitmapdata", {
                fileName: "OzSprite.hx",
                lineNumber: 495,
                className: "oz.OzSprite",
                methodName: "RegisterTilesheet"
            });
            a = new Bc(r);
            G.trace("end create tilesheet", {
                fileName: "OzSprite.hx",
                lineNumber: 497,
                className: "oz.OzSprite",
                methodName: "RegisterTilesheet"
            });
            var g = [];
            d = 0;
            for (var k = c.length; d < k;) {
                var I = d++;
                g[I] = !1
            }
            d = f.Tilesheets.length;
            G.trace("got through", {
                fileName: "OzSprite.hx",
                lineNumber: 503,
                className: "oz.OzSprite",
                methodName: "RegisterTilesheet",
                customParams: [b.length, " clips"]
            });
            k = 0;
            for (I = b.length; k < I;) {
                var h = k++;
                b[h].tilesheetId = d;
                f.Bitmaps.push(b[h]);
                f.BitmapsIds.push(f.BitmapsIds.length);
                f.BitmapsNames.push(b[h].name);
                var w = 0 == b[h].name.indexOf("tile");
                if (!p && !w && 0 != b[h].name.indexOf("bmp") && 0 != b[h].name.indexOf("sys") && 0 != b[h].name.indexOf("_f") && 0 != b[h].name.indexOf("oza"))
                    for (var w = 0, l = b[h].frames.length; w < l;) {
                        var m = w++,
                            m = b[h].frames[m];
                        g[m] || (g[m] = !0, c[m][0] -= 1, c[m][1] -= 1, c[m][2] += 2, c[m][3] += 2, c[m][4] += 1, c[m][5] += 1)
                    }
            }
            b = 0;
            for (p = c.length; b < p;) g = b++, a.addTileRect(new pa(c[g][0], c[g][1], c[g][2], c[g][3]), new xa(c[g][4], c[g][5]));
            f.Tilesheets.push(a);
            f.TilesheetFrames.push(c);
            f.TilesheetBitmapDatas.push([]);
            f.TilesheetAssetBMDs.push(r);
            if (e)
                for (e = 0, c = c.length; e < c;) r = e++, f.LoadSingleBitmapData(f.TilesheetFrames.length - 1, r);
            return d
        };
        f.LoadSingleBitmapData = function(a, b) {
            var c = f.TilesheetFrames[a];
            if (1 <= c[b][2] && 1 <= c[b][3]) {
                var d = f.TilesheetAssetBMDs[a];
                f.DrawPoint.x = f.DrawPoint.y = 0;
                f.DrawRect.x = c[b][0];
                f.DrawRect.y = c[b][1];
                f.DrawRect.width = c[b][2];
                f.DrawRect.height = c[b][3];
                if (1 > f.DrawRect.height || 1 > f.DrawRect.width) return !0;
                c = null;
                c = new ia(Math.round(f.DrawRect.width), Math.round(f.DrawRect.height), !0, -1);
                c.copyPixels(d, f.DrawRect,
                    f.DrawPoint, null, null, !1);
                f.TilesheetBitmapDatas[a][b] = c;
                return !0
            }
            return !1
        };
        f.New = function(a, b, c, d) {
            null == d && (d = !0);
            null == c && (c = !0);
            var e = f.Sprites[f.FreeId++];
            e.reset();
            e.stateBound = c;
            null == b && (b = W.EMPTY);
            null != a ? (e.type = W.BITMAP, d && null != t.ext && 0 < t.ext.length && (c = x.FindStringId(f.BitmapsNames, a.name + t.ext), 0 <= c && (a = f.Bitmaps[f.BitmapsIds[c]])), e.mc = a) : e.type = b;
            b == W.POLYGON ? (e.flSprite = new Aa, e.flSprite.set_visible(!1)) : b == W.TEXT && (e.textAlign = V.LEFT, e.text = "");
            return e
        };
        f.GetMCByString = function(a) {
            a =
                x.FindStringId(f.BitmapsNames, a);
            return 0 > a ? null : f.Bitmaps[f.BitmapsIds[a]]
        };
        f.GetTilesheetBitmapData = function(a, b) {
            null == f.TilesheetBitmapDatas[a][b] && f.LoadSingleBitmapData(a, b);
            return f.TilesheetBitmapDatas[a][b]
        };
        f.RemoveRequested = function() {
            for (var a = 0, b = f.toRemoveId; a < b;) {
                var c = a++,
                    c = f.toRemove[c];
                null != c.parent && c.parent.removeChild(c);
                f.Dispose(c)
            }
            f.toRemoveId = 0
        };
        f.Dispose = function(a) {
            n.TargetKill(a);
            null != a.parent && a.parent.removeChild(a);
            null != a.flSprite && null != a.flSprite.parent && a.flSprite.parent.removeChild(a.flSprite);
            a.flSprite = null;
            a.buttonFunc = null;
            a.funcEnd = null;
            a.prev = a.next = a;
            if (0 <= a.PoolId) {
                var b = f.FreeId - 1,
                    c = a.PoolId,
                    d = f.Sprites[b];
                f.Sprites[b] = f.Sprites[c];
                f.Sprites[c] = d;
                a.PoolId = b;
                f.Sprites[c].PoolId = c;
                f.FreeId--
            }
        };
        f.TextToSprites = function(a, b, c, d, e, p, r) {
            r = !1;
            var g = a.numChildren();
            if (a.type != W.EMPTY || g != b.length) r = !0;
            else
                for (var k = a.child, I = 0; I < g;) {
                    I++;
                    if (k.mc != c) {
                        r = !0;
                        break
                    }
                    k = k.next
                }
            if (r)
                for (a.clear(), a.mouseEnabled = !1, r = (b.length - 1) * e, g = 0, k = b.length; g < k;) {
                    var h = g++,
                        I = f.New(c);
                    I.set_x(h * e);
                    I.set_y(0);
                    p == V.RIGHT ? (h = I, h.set_x(h.get_x() - r)) : p == V.CENTER && (h = I, h.set_x(h.get_x() - r / 2));
                    a.addChild(I);
                    I.mouseEnabled = !1;
                    I._updateOldValues()
                }
            a = a.child;
            c = 0;
            for (e = b.length; c < e;) p = c++, p = b.charAt(p), " " == p ? (a.gotoAndStop(1), a.set_visible(!1)) : (p = d.indexOf(p) + 1, a.gotoAndStop(p), a.set_visible(!0)), a = a.next
        };
        f.GetSpriteAtPoint = function(a, b, c, d, e, p, r, g) {
            null == g && (g = 0);
            null == r && (r = 1);
            null == p && (p = 1);
            null == e && (e = 0);
            null == d && (d = 0);
            if (1E-4 > a.get_alpha() || !1 == a.get_visible()) return null;
            if (null != a.child)
                for (var k = a.child.prev,
                        I = k;;) {
                    var h = f.GetSpriteAtPoint(k, b, c, d + a.get_x() * p, e + a.get_y() * r, p * a.get_scaleX(), r * a.get_scaleY(), g * a.get_rotation());
                    if (null != h) return h;
                    k = k.prev;
                    if (k == I) break
                }
            return a.type == W.BITMAP && a.mouseEnabled && (g = f.TilesheetFrames[a.mc.tilesheetId][a.mc.frames[a.get_currentFrame() - 1]], k = d + a.get_x() - g[4] * a.get_scaleX() * p, d = d + a.get_x() + (g[2] - g[4]) * a.get_scaleX() * p, k > d && (p = k, k = d, d = p), k <= b && b <= d && (b = e + a.get_y() - g[5] * a.get_scaleY() * r, e = e + a.get_y() + (g[3] - g[5]) * a.get_scaleY() * r, b > e && (r = b, b = e, e = r), b <= c && c <= e)) ?
                a : null
        };
        f.BGInit = function(a, b) {
            a.clear();
            a.set_x(-(l.WIDTH_MAX - l.WIDTH_MIN) / 2);
            a.type = W.BACKGROUND;
            a.arg1 = b;
            f.UpdateBG(a, 0, 0, 0, 1)
        };
        f.UpdateBG = function(a, b, c, d, e) {
            null != a && (a.set_x(b), a.set_y(c), f.BGMinY = d, f.BGMaxY = e)
        };
        f.RenderBGImage = function(a, b, c, d, e, p, r, g, k) {
            null == k && (k = !1);
            null == g && (g = !0);
            null == r && (r = -1);
            null == p && (p = -1);
            null == e && (e = 1);
            null == d && (d = 1);
            f.TilesheetId != a.tilesheetId && (f.Flush(), f.TilesheetId = a.tilesheetId);
            var I = f.TilesheetFrames[a.tilesheetId][a.frames[0]];
            0 > p && (p = Math.round(I[2] *
                d));
            0 > r && (r = Math.round(I[3] * d));
            b %= p;
            0 < b && (b -= p);
            var h = c;
            k && (h = c % r, 0 < h && (h -= r));
            c = Math.round(b);
            var w = Math.round(h);
            null == f.TilesheetBitmapDatas[a.tilesheetId][a.frames[0]] && f.LoadSingleBitmapData(a.tilesheetId, a.frames[0]);
            for (var m = 0, s = 0;;) {
                for (var n = 0; ++m, f.BGbmdMatrix.tx = c - I[4] + n * p, f.BGbmdMatrix.ty = w - I[5] + s * r, f.BGbmdMatrix.a = d, f.BGbmdMatrix.b = 0, f.BGbmdMatrix.c = 0, f.BGbmdMatrix.d = d, f.DrawingAlpha ? (f.BGbmdColorTransform.alphaMultiplier = e, l.instance.ScreenBMD.draw(f.TilesheetBitmapDatas[a.tilesheetId][a.frames[0]],
                        f.BGbmdMatrix, f.BGbmdColorTransform)) : l.instance.ScreenBMD.draw(f.TilesheetBitmapDatas[a.tilesheetId][a.frames[0]], f.BGbmdMatrix), ++n, g && n * p + b < l.WIDTH;);
                ++s;
                if (!(k && s * r + h < l.HEIGHT)) break
            }
        };
        f.Flush = function() {
            if (0 < f.DrawArrayLength) {
                if (f.DrawingAlpha)
                    for (var a = null == f.CT ? 8 : 11, b = 0, c = f.DrawArrayLength / a | 0; b < c;) {
                        var d = b++ * a,
                            e = null;
                        if (!f.MinimumBMD && (e = f.GetTilesheetBitmapData(f.TilesheetId, f.DrawArray[d + 2] | 0), null == e)) continue;
                        f.DrawMatrix.tx = f.DrawArray[d];
                        f.DrawMatrix.ty = f.DrawArray[d + 1];
                        f.DrawMatrix.a =
                            f.DrawArray[d + 3];
                        f.DrawMatrix.b = f.DrawArray[d + 4];
                        f.DrawMatrix.c = f.DrawArray[d + 5];
                        f.DrawMatrix.d = f.DrawArray[d + 6];
                        f.AlphaColorTransform.alphaMultiplier = f.DrawArray[d + 7];
                        f.MinimumBMD ? (d = f.TilesheetFrames[f.TilesheetId][f.DrawArray[d + 2] | 0], f.DrawRect.x = d[0], f.DrawRect.y = d[1], f.DrawRect.width = d[2], f.DrawRect.height = d[3], f.DrawPart(l.instance.ScreenBMD, f.TilesheetAssetBMDs[f.TilesheetId], f.DrawMatrix, f.AlphaColorTransform, null, f.DrawRect, f.DrawingSmooth)) : l.instance.ScreenBMD.draw(e, f.DrawMatrix, f.AlphaColorTransform,
                            null, null, f.DrawingSmooth)
                    } else
                        for (a = null == f.CT ? 7 : 10, b = 0, c = f.DrawArrayLength / a | 0; b < c;)
                            if (d = b++ * a, f.DrawMatrix.tx = f.DrawArray[d], f.DrawMatrix.ty = f.DrawArray[d + 1], f.DrawMatrix.a = f.DrawArray[d + 3], f.DrawMatrix.b = f.DrawArray[d + 4], f.DrawMatrix.c = f.DrawArray[d + 5], f.DrawMatrix.d = f.DrawArray[d + 6], f.DrawingSmooth ? e = !1 : (e = f.DrawMatrix.a, e = 0.9999994 <= e ? 1.0000006 >= e : !1), e ? (e = f.DrawMatrix.d, e = 0.9999994 <= e ? 1.0000006 >= e : !1) : e = !1, e ? (e = f.DrawMatrix.c, e = -6E-7 <= e ? 6E-7 >= e : !1) : e = !1, e ? (e = f.DrawMatrix.b, e = -6E-7 <= e ? 6E-7 >=
                                    e : !1) : e = !1, e && null == f.CT) f.CopyMcToBmd(l.instance.ScreenBMD, f.TilesheetId, f.DrawArray[d + 2] | 0, f.DrawMatrix.tx, f.DrawMatrix.ty);
                            else {
                                e = null;
                                if (!f.MinimumBMD && (e = f.GetTilesheetBitmapData(f.TilesheetId, f.DrawArray[d + 2] | 0), null == e)) continue;
                                f.MinimumBMD ? (d = f.TilesheetFrames[f.TilesheetId][f.DrawArray[d + 2] | 0], f.DrawRect.x = d[0], f.DrawRect.y = d[1], f.DrawRect.width = d[2], f.DrawRect.height = d[3], f.DrawPart(l.instance.ScreenBMD, f.TilesheetAssetBMDs[f.TilesheetId], f.DrawMatrix, f.CT, null, f.DrawRect, f.DrawingSmooth)) :
                                    l.instance.ScreenBMD.draw(e, f.DrawMatrix, f.CT, null, null, f.DrawingSmooth)
                            }
                f.DrawArrayLength = 0
            }
            f.ShowFlushInfo = -1
        };
        f.CopyMcToBmd = function(a, b, c, d, e, p, r) {
            null == r && (r = -1);
            null == p && (p = !0);
            c = f.TilesheetFrames[b][c];
            0 > r ? (f.DrawRect.x = c[0], f.DrawRect.y = c[1], f.DrawRect.width = c[2], f.DrawRect.height = c[3], f.DrawPoint.x = Math.round(d + 1E-4), f.DrawPoint.y = Math.round(e + 1E-4), a.copyPixels(f.TilesheetAssetBMDs[b], f.DrawRect, f.DrawPoint, null, null, p)) : (f.TileMatrix.identity(), f.TileMatrix.translate(-c[0], -c[1]), f.TileMatrix.scale(r /
                c[2], r / c[3]), f.TileMatrix.translate(Math.round(d + 1E-4), Math.round(e + 1E-4)), f.DrawRect.x = Math.round(d + 1E-4), f.DrawRect.y = Math.round(e + 1E-4), f.DrawRect.width = f.DrawRect.height = r, a.draw(f.TilesheetAssetBMDs[b], f.TileMatrix, null, null, f.DrawRect, p))
        };
        f.DrawPart = function(a, b, c, d, e, p, f) {
            e = a.context;
            a.syncCanvas();
            e.save();
            null != d && (e.globalAlpha *= d.alphaMultiplier);
            null != f && ia.setSmoothing(e, f);
            null != c && e.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty);
            null != p ? (c = p.width, d = p.height, (1 > d || 1 > c || 0 > p.x || 0 > p.y) && G.trace("ERROR DRAW IMAGE", {
                fileName: "OzSprite.hx",
                lineNumber: 2876,
                className: "oz.OzSprite",
                methodName: "DrawPart",
                customParams: [c, d, p.x, p.y]
            }), e.drawImage(b.handle(), p.x, p.y, c, d, 0, 0, c, d)) : e.drawImage(b.handle(), 0, 0);
            e.restore();
            a.__sync |= 5
        };
        f.prototype = {
            tweenScale: function(a) {
                0.5 <= a && (a = 1 - a);
                a *= 2;
                this.set_scaleX(this.startScaleX * (1 - a) + this.endScaleX * a);
                this.set_scaleY(this.startScaleY * (1 - a) + this.endScaleY * a)
            },
            makeLink: function(a, b) {
                null == b && (b = !0);
                this.buttonMode = !0;
                b && (this.flags |= 512);
                if (t.is4399) {
                    if (a == t.solution || a == t.twitter ||
                        a == t.facebook || a == t.googleplay || a == t.appstore || a == t.amazon || "crossButton" == this.name || "btnMore" == this.name) {
                        this.set_visible(!1);
                        return
                    }
                    if ("btnMoreChinese" == this.name) G.trace("allowing more", {
                        fileName: "OzSprite.hx",
                        lineNumber: 899,
                        className: "oz.OzSprite",
                        methodName: "makeLink"
                    });
                    else {
                        G.trace("not allowing this link", {
                            fileName: "OzSprite.hx",
                            lineNumber: 902,
                            className: "oz.OzSprite",
                            methodName: "makeLink"
                        });
                        return
                    }
                }
                this.flags |= 1;
                this.buttonFunc = a;
                this.addEventListener(2, ea(this, this.buttonClick))
            },
            makeButton: function(a,
                b) {
                null == b && (b = !0);
                var c = this;
                this.buttonMode = !0;
                b && (this.flags |= 512, this.flags |= 1024);
                this.gotoAndStop(1);
                a == t.moreGames ? this.makeLink(a, b) : (this.buttonFunc = a, this.addEventListener(3, function(a) {
                    1 < c.get_totalFrames() && c.gotoAndStop(2)
                }), this.addEventListener(4, function(a) {
                    c.gotoAndStop(1)
                }), this.addEventListener(2, function(a) {
                    2 < c.get_totalFrames() && c.gotoAndStop(3)
                }), this.addEventListener(1, function(a) {
                    c.buttonFunc(a)
                }))
            },
            voidButtonFunc: function() {
                this.flags &= 16777213;
                this.buttonFunc(new Hb(this))
            },
            buttonClick: function(a) {
                0 < (this.flags & 2) || (0 < (this.flags & 1) ? this.buttonFunc(a) : (this.flags |= 2, a = P.New(), a.duration = 6, this.startScaleX = this.get_scaleX(), this.endScaleX = 0.95 * this.startScaleX, this.startScaleY = this.get_scaleY(), this.endScaleY = 0.95 * this.startScaleY, a.updateFunc = ea(this, this.tweenScale), a.endFunc = ea(this, this.voidButtonFunc), P.Add(a)))
            },
            hasEventListener: function(a) {
                return null != this.eventListeners && this.eventListeners.h.hasOwnProperty(a) ? 0 < this.eventListeners.h[a].length : !1
            },
            addEventListener: function(a,
                b) {
                null == this.eventListeners && (this.eventListeners = new va);
                this.eventListeners.h.hasOwnProperty(a) || (this.eventListeners.h[a] = []);
                0 > this.eventListeners.h[a].indexOf(b) && this.eventListeners.h[a].push(b)
            },
            dispatchEvent: function(a) {
                var b = a.type;
                if (null != this.eventListeners && this.eventListeners.h.hasOwnProperty(b)) {
                    b = this.eventListeners.h[b];
                    this.dispatchLock = !0;
                    for (var c = 0; c < b.length;) {
                        if (null != b[c]) b[c](a);
                        ++c
                    }
                    this.dispatchLock = !1;
                    for (a = b.length - 1; 0 <= a;) null == b[a] && b.splice(a, 0), --a
                }
            },
            reset: function() {
                this._reset();
                this.eventListeners = this.name = null;
                this.startX = this.startY = this.flags = this.padFlags = this.arg1 = 0;
                this.stateBound = !0;
                this.parent = this.child = this.mc = this.funcEnd = null;
                this.next = this;
                this.prev = this;
                this.type = W.EMPTY;
                this._oldRotation = this._rotation = this._oldY = this._y = this._oldX = this._x = 0;
                this._oldAlpha = this._alpha = this._oldScaleY = this._scaleY = this._oldScaleX = this._scaleX = 1;
                this._oldPlaying = this._playing = this._oldVisible = this._visible = !0;
                this._oldLineLength = this._lineLength = this._oldCurrentFrame = this._currentFrame =
                    1;
                this.buttonMode = !1;
                this.mouseEnabled = !0;
                this.colorTransform = this.tileMap = null;
                this.smooth = l.DEFAULT_SMOOTH;
                this.toBeRemoved = !1;
                this.animation = null;
                this.showRight = -1
            },
            get_totalFrames: function() {
                return null != this.mc ? this.mc.frames.length : 1
            },
            gotoAndStop: function(a) {
                1 > a || a > this.mc.frames.length ? G.trace("Error! Invalid frame", {
                    fileName: "OzSprite.hx",
                    lineNumber: 1215,
                    className: "oz.OzSprite",
                    methodName: "gotoAndStop",
                    customParams: [a]
                }) : this.set_currentFrame(a);
                this.set_playing(!1)
            },
            setFluid: function(a, b,
                c) {
                null == c && (c = -1E6);
                null == b && (b = -1E6);
                null == a && (a = 0);
                this.padFlags = a; - 99999 >= b && (b = this.get_x()); - 99999 >= c && (c = this.get_y());
                this.startX = b;
                this.startY = c
            },
            adjustAllLayouts: function() {
                0 < this.padFlags && this.adjustLayout();
                if (null != this.child)
                    for (var a = this.child; a.adjustAllLayouts(), a = a.next, a != this.child;);
            },
            adjustLayout: function() {
                var a = l.HEIGHT - l.HEIGHT_MIN;
                0 < (this.padFlags & 1) ? this.set_y(Math.round(this.startY + a + f.EPS)) : 0 < (this.padFlags & 2) ? this.set_y(Math.round(this.startY + a / 2 + f.EPS)) : 0 < (this.padFlags &
                    4) ? this.set_y(Math.round(this.startY - a + f.EPS)) : 0 < (this.padFlags & 8) ? this.set_y(Math.round(this.startY - a / 2 + f.EPS)) : 0 < (this.padFlags & 16) && this.set_y(Math.round(l.HEIGHT / 2 + f.EPS));
                a = l.WIDTH - l.WIDTH_MIN;
                0 < (this.padFlags & 32) ? this.set_x(Math.round(this.startX + a + f.EPS)) : 0 < (this.padFlags & 64) ? this.set_x(Math.round(this.startX + a / 2 + f.EPS)) : 0 < (this.padFlags & 128) ? this.set_x(Math.round(this.startX - a + f.EPS)) : 0 < (this.padFlags & 256) ? this.set_x(Math.round(this.startX - a / 2 + f.EPS)) : 0 < (this.padFlags & 512) && this.set_x(Math.round(l.WIDTH /
                    2 + f.EPS))
            },
            getChild: function(a) {
                if (null != this.child)
                    for (var b = this.child;;) {
                        if (null != b.name && b.name == a) return b;
                        b = b.next;
                        if (b == this.child) break
                    }
                return null
            },
            numChildren: function() {
                var a = 0;
                if (null != this.child)
                    for (var b = this.child; ++a, b = b.next, b != this.child;);
                return a
            },
            createLineSegmentGFX: function(a, b, c, d, e, p) {
                var r = a.component.height,
                    g = Math.atan2(p - d, e - c),
                    r = r / 2,
                    k = Math.cos(g),
                    I = Math.sin(g);
                f.PathMatrix.identity();
                f.PathMatrix.translate(-b, 0);
                f.PathMatrix.rotate(g);
                f.PathMatrix.translate(c + r * I, d - r *
                    k);
                this.flSprite.get_graphics().beginBitmapFill(a, f.PathMatrix, !0, !0);
                this.flSprite.get_graphics().moveTo(c + r * I, d - r * k);
                this.flSprite.get_graphics().lineTo(e + r * I, p - r * k);
                this.flSprite.get_graphics().lineTo(e - r * I, p + r * k);
                this.flSprite.get_graphics().lineTo(c - r * I, d + r * k);
                this.flSprite.get_graphics().lineTo(c + r * I, d - r * k);
                this.flSprite.get_graphics().endFill()
            },
            createLineGFX: function(a, b, c) {
                null == c && (c = 10);
                null == b && (b = -1);
                0 > b && (b = a.component.height);
                this.flSprite.get_graphics().clear();
                f.DrawMatrix.identity();
                f.DrawMatrix.translate(0, b / 2);
                this.flSprite.get_graphics().beginBitmapFill(a, f.DrawMatrix, !0, !0);
                this.flSprite.get_graphics().moveTo(-c / 2, -b / 2);
                this.flSprite.get_graphics().lineTo(c / 2, -b / 2);
                this.flSprite.get_graphics().lineTo(c / 2, b / 2);
                this.flSprite.get_graphics().lineTo(-c / 2, b / 2);
                this.flSprite.get_graphics().lineTo(-c / 2, -b / 2);
                this.flSprite.get_graphics().endFill();
                this.fillLength = c;
                this.set_lineLength(c)
            },
            dispose: function() {
                f.Dispose(this)
            },
            removeChild: function(a) {
                if (null != a && a.parent == this) {
                    this.child ==
                        a && (this.child = this.child.next == this.child ? null : this.child.next);
                    var b = a.prev,
                        c = a.next;
                    null != b && (b.next = c);
                    null != c && (c.prev = b);
                    a.prev = a;
                    a.next = a;
                    a.parent = null
                }
            },
            clear: function() {
                this.clearChildren();
                this.mc = null;
                this.type = W.EMPTY
            },
            clearChildren: function() {
                for (; null != this.child;) this.child.clearChildren(), f.Dispose(this.child)
            },
            addChild: function(a, b) {
                null == b && (b = -1);
                if (null != a)
                    if (a._oldVisible = !1, null != a.parent && a.parent.removeChild(a), a.parent = this, null == this.child) this.child = a, a.prev = a, a.next = a;
                    else {
                        var c = this.child.prev,
                            d = this.child;
                        if (-1 < b)
                            if (0 == b) this.child = a;
                            else
                                for (; c = c.next, d = d.next, --b, 0 < b && d != this.child;);
                        c.next = a;
                        d.prev = a;
                        a.prev = c;
                        a.next = d
                    }
            },
            setTileLayer: function(a) {
                this.arg1 = a
            },
            getTileLayer: function() {
                return this.arg1
            },
            draw: function(a) {
                null == a && (a = 1);
                var b = !1;
                a *= (1 - f.DeltaT) * this._oldAlpha + f.DeltaT * this._alpha;
                if (this._oldVisible && !(0.001 > a)) {
                    T.PushMatrix();
                    if (this.type == W.EMPTY) {
                        b = T.getCurrentMatrix();
                        b.PostTranslate(this.noInterpolation ? this._x : Math.round(128 * ((1 - f.DeltaT) *
                            this._oldX + f.DeltaT * this._x)) / 128, this.noInterpolation ? this._y : Math.round(128 * ((1 - f.DeltaT) * this._oldY + f.DeltaT * this._y)) / 128);
                        var c;
                        this.noInterpolation ? c = this._rotation : (c = this._rotation - this._oldRotation, 180 < Math.abs(c) && (c = 0 > c ? c + 360 : c - 360), c = this._oldRotation + f.DeltaT * c);
                        b.PostRotate(c);
                        b.PostScale((1 - f.DeltaT) * this._oldScaleX + f.DeltaT * this._scaleX, (1 - f.DeltaT) * this._oldScaleY + f.DeltaT * this._scaleY)
                    } else if (this.type == W.BITMAP) {
                        -1 == f.TilesheetId && (f.TilesheetId = this.mc.tilesheetId);
                        f.TilesheetId !=
                            this.mc.tilesheetId && (f.Flush(), f.TilesheetId = this.mc.tilesheetId);
                        if (0.999 > a && !f.DrawingAlpha || 0.999 < a && f.DrawingAlpha) f.Flush(), f.DrawingAlpha = !f.DrawingAlpha;
                        f.DrawingSmooth != this.smooth && (f.Flush(), f.DrawingSmooth = this.smooth);
                        f.CT != this.colorTransform && (f.Flush(), f.CT = this.colorTransform);
                        c = T.getCurrentMatrix();
                        c.PostTranslate(this.noInterpolation ? this._x : Math.round(128 * ((1 - f.DeltaT) * this._oldX + f.DeltaT * this._x)) / 128, this.noInterpolation ? this._y : Math.round(128 * ((1 - f.DeltaT) * this._oldY + f.DeltaT *
                            this._y)) / 128);
                        var d;
                        this.noInterpolation ? d = this._rotation : (d = this._rotation - this._oldRotation, 180 < Math.abs(d) && (d = 0 > d ? d + 360 : d - 360), d = this._oldRotation + f.DeltaT * d);
                        c.PostRotate(d);
                        c.PostScale((1 - f.DeltaT) * this._oldScaleX + f.DeltaT * this._scaleX, (1 - f.DeltaT) * this._oldScaleY + f.DeltaT * this._scaleY);
                        d = f.TilesheetFrames[this.mc.tilesheetId][this.mc.frames[this.get_currentFrame() - 1]];
                        var e = this.mc.frames[this.get_currentFrame() - 1];
                        if (0 <= this.showRight) {
                            var p = Math.min(d[2], Math.round(d[2] * this.showRight)) |
                                0;
                            0 < p ? (e = 1E7 * this.mc.tilesheetId + 1E4 * this.mc.frames[this.get_currentFrame() - 1] + p, f.ShowRights.h.hasOwnProperty(e) || (d = f.appendTilesheetFrame(this.mc, this.mc.name + "_" + p, this.get_currentFrame(), Math.round(d[0]), Math.round(d[1]), p, Math.round(d[3]), Math.round(d[4]), Math.round(d[5])), f.ShowRights.h[e] = d, x.SortIdsByName(f.BitmapsIds, f.BitmapsNames)), e = f.ShowRights.h[e], d = f.TilesheetFrames[this.mc.tilesheetId][e]) : b = !0
                        }
                        p = T.getTemp(1);
                        p.Translation(-d[4], -d[5]);
                        T.Multiply(p, c, p);
                        b || (b = p.outside(d[2], d[3],
                            l.WIDTH, l.HEIGHT, !1));
                        b || (f.DrawArray[f.DrawArrayLength++] = p.m02, f.DrawArray[f.DrawArrayLength++] = p.m12, f.DrawArray[f.DrawArrayLength++] = e, f.DrawArray[f.DrawArrayLength++] = p.m00, f.DrawArray[f.DrawArrayLength++] = p.m10, f.DrawArray[f.DrawArrayLength++] = p.m01, f.DrawArray[f.DrawArrayLength++] = p.m11, null != this.colorTransform && (f.DrawArray[f.DrawArrayLength++] = this.colorTransform.redMultiplier, f.DrawArray[f.DrawArrayLength++] = this.colorTransform.greenMultiplier, f.DrawArray[f.DrawArrayLength++] = this.colorTransform.blueMultiplier),
                            f.DrawingAlpha && (f.DrawArray[f.DrawArrayLength++] = a))
                    } else if (this.type == W.POLYGON) {
                        f.Flush();
                        b = T.getCurrentMatrix();
                        if (0.999 > a && !f.DrawingAlpha || 0.999 < a && f.DrawingAlpha) f.DrawingAlpha = !f.DrawingAlpha;
                        f.DrawingSmooth != this.smooth && (f.DrawingSmooth = this.smooth);
                        if (0 < (this.flags & 4)) {
                            c = Math.cos(this._oldRotation / 180 * Math.PI);
                            d = Math.sin(this._oldRotation / 180 * Math.PI);
                            c = c * this._oldLineLength / 2;
                            d = d * this._oldLineLength / 2;
                            var p = Math.cos(this._rotation / 180 * Math.PI),
                                e = Math.sin(this._rotation / 180 * Math.PI),
                                r =
                                p * this._lineLength / 2,
                                g = e * this._lineLength / 2,
                                p = (c + this._oldX) * (1 - f.DeltaT) + (r + this._x) * f.DeltaT,
                                e = (d + this._oldY) * (1 - f.DeltaT) + (g + this._y) * f.DeltaT,
                                r = (-c + this._oldX) * (1 - f.DeltaT) + (-r + this._x) * f.DeltaT,
                                g = (-d + this._oldY) * (1 - f.DeltaT) + (-g + this._y) * f.DeltaT;
                            c = (p + r) / 2;
                            d = (e + g) / 2;
                            p -= r;
                            g = e - g;
                            r = p * p + g * g;
                            e = 0;
                            1E-4 < r && (e = 180 / Math.PI * Math.atan2(g, p));
                            p = 1;
                            r = Math.sqrt(r);
                            0 < (this.flags & 8) && (p = r / this.fillLength);
                            b.PostTranslate(c, d);
                            b.PostRotate(e);
                            b.PostScale(p, (1 - f.DeltaT) * this._oldScaleY + f.DeltaT * this._scaleY)
                        } else b.PostTranslate(this.noInterpolation ?
                            this._x : Math.round(128 * ((1 - f.DeltaT) * this._oldX + f.DeltaT * this._x)) / 128, this.noInterpolation ? this._y : Math.round(128 * ((1 - f.DeltaT) * this._oldY + f.DeltaT * this._y)) / 128), this.noInterpolation ? c = this._rotation : (c = this._rotation - this._oldRotation, 180 < Math.abs(c) && (c = 0 > c ? c + 360 : c - 360), c = this._oldRotation + f.DeltaT * c), b.PostRotate(c), b.PostScale((1 - f.DeltaT) * this._oldScaleX + f.DeltaT * this._scaleX, (1 - f.DeltaT) * this._oldScaleY + f.DeltaT * this._scaleY);
                        b.toMatrix(f.DrawMatrix);
                        f.DrawingAlpha ? (f.AlphaColorTransform.alphaMultiplier =
                            a, l.instance.ScreenBMD.draw(this.flSprite, f.DrawMatrix, f.AlphaColorTransform, null, null, !0)) : l.instance.ScreenBMD.draw(this.flSprite, f.DrawMatrix, null, null, null, !0)
                    } else if (this.type == W.TEXT) {
                        -1 == f.TilesheetId && (f.TilesheetId = this.font.tilesheetId);
                        f.TilesheetId != this.font.tilesheetId && (f.Flush(), f.TilesheetId = this.font.tilesheetId);
                        if (0.999 > a && !f.DrawingAlpha || 0.999 < a && f.DrawingAlpha) f.Flush(), f.DrawingAlpha = !f.DrawingAlpha;
                        f.DrawingSmooth != this.smooth && (f.Flush(), f.DrawingSmooth = this.smooth);
                        T.PushMatrix();
                        b = T.getCurrentMatrix();
                        e = 0;
                        this.textAlign == V.CENTER ? e = -Math.round(this.getLineLength() / 2) : this.textAlign == V.RIGHT && (e = -this.getLineLength());
                        p = 0;
                        e *= this.get_scaleX();
                        c = p *= this.get_scaleY();
                        d = T.getCurrentMatrix();
                        d.PostTranslate((this.noInterpolation ? this._x : Math.round(128 * ((1 - f.DeltaT) * this._oldX + f.DeltaT * this._x)) / 128) + e, (this.noInterpolation ? this._y : Math.round(128 * ((1 - f.DeltaT) * this._oldY + f.DeltaT * this._y)) / 128) + p);
                        this.noInterpolation ? e = this._rotation : (e = this._rotation - this._oldRotation, 180 < Math.abs(e) &&
                            (e = 0 > e ? e + 360 : e - 360), e = this._oldRotation + f.DeltaT * e);
                        d.PostRotate(e);
                        d.PostScale((1 - f.DeltaT) * this._oldScaleX + f.DeltaT * this._scaleX, (1 - f.DeltaT) * this._oldScaleY + f.DeltaT * this._scaleY);
                        e = 0;
                        for (p = this.text.length; e < p;) {
                            var r = e++,
                                g = J.cca(this.text, r),
                                k = this.font.chars[g],
                                I = k.xOffset + this.font.defaultKern;
                            if (0 < r) {
                                var h = J.cca(this.text, r - 1),
                                    I = I + this.font.chars[h].xAdvance;
                                null == this.font.kernings[h] || isNaN(this.font.kernings[h][g]) || (I += this.font.kernings[h][g])
                            }
                            k = 0 + k.yOffset - c;
                            c += k;
                            d.PostTranslate(I, k);
                            32 != g && (f.DrawArray[f.DrawArrayLength++] = b.m02, f.DrawArray[f.DrawArrayLength++] = b.m12, f.DrawArray[f.DrawArrayLength++] = this.font.chars[J.cca(this.text, r)].movieClip.frames[0], f.DrawArray[f.DrawArrayLength++] = b.m00, f.DrawArray[f.DrawArrayLength++] = b.m10, f.DrawArray[f.DrawArrayLength++] = b.m01, f.DrawArray[f.DrawArrayLength++] = b.m11, f.DrawingAlpha && (f.DrawArray[f.DrawArrayLength++] = a))
                        }
                        T.PopMatrix()
                    } else this.type == W.TILEMAP ? (f.Flush(), b = f.DrawingSmooth, c = f.DrawingAlpha, f.DrawingSmooth = !0, f.DrawingAlpha = !1, this.tileMap.draw(this, this.getTileLayer()), f.Flush(), f.DrawingSmooth = b, f.DrawingAlpha = c) : this.type == W.BACKGROUND && (f.Flush(), b = f.DrawingSmooth, c = f.DrawingAlpha, f.DrawingSmooth = !0, f.DrawingAlpha = 0.999 > (1 - f.DeltaT) * this._oldAlpha + f.DeltaT * this._alpha, yb.DrawBG(this.arg1, this.noInterpolation ? this._x : Math.round(128 * ((1 - f.DeltaT) * this._oldX + f.DeltaT * this._x)) / 128, this.noInterpolation ? this._y : Math.round(128 * ((1 - f.DeltaT) * this._oldY + f.DeltaT * this._y)) / 128, this.get_alpha()), f.Flush(), f.DrawingSmooth =
                        b, f.DrawingAlpha = c);
                    if (null != this.child)
                        for (b = this.child; b.draw(a), b = b.next, b != this.child;);
                    T.PopMatrix()
                }
            },
            getLineLength: function(a) {
                null == a && (a = 0);
                for (var b = 0; a < this.text.length && J.cca("\n", 0) != J.cca(this.text, a);) {
                    var c = J.cca(this.text, a),
                        d = this.font.chars[c],
                        d = d.xOffset + d.xAdvance + this.font.defaultKern;
                    if (0 < a) {
                        var e = J.cca(this.text, a - 1);
                        null == this.font.kernings[e] || isNaN(this.font.kernings[e][c]) || (d += this.font.kernings[e][c])
                    }
                    b += d;
                    ++a
                }
                return b
            },
            updateAnimations: function(a) {
                null == a && (a = -1);
                null !=
                    this.animation && this.animation.Update(a);
                if (null != this.child)
                    for (a = this.child; a.updateAnimations(), a = a.next, a != this.child;);
            },
            get_x: function() {
                return this._x
            },
            set_x: function(a) {
                return this._x = a
            },
            get_y: function() {
                return this._y
            },
            set_y: function(a) {
                return this._y = a
            },
            get_rotation: function() {
                return this._rotation
            },
            set_rotation: function(a) {
                a %= 360;
                0 > a && (a += 360);
                return this._rotation = a
            },
            get_scaleX: function() {
                return this._scaleX
            },
            set_scaleX: function(a) {
                return this._scaleX = a
            },
            get_scaleY: function() {
                return this._scaleY
            },
            set_scaleY: function(a) {
                return this._scaleY = a
            },
            get_alpha: function() {
                return this._alpha
            },
            set_alpha: function(a) {
                return this._alpha = a
            },
            get_visible: function() {
                return this._visible
            },
            set_visible: function(a) {
                return this._visible = a
            },
            get_playing: function() {
                return this._playing
            },
            set_playing: function(a) {
                return this._playing = a
            },
            get_currentFrame: function() {
                return this._currentFrame
            },
            set_currentFrame: function(a) {
                return this._currentFrame = a
            },
            set_lineLength: function(a) {
                return this._lineLength = a
            },
            _reset: function() {
                this._oldPlaying =
                    this._oldVisible = !1
            },
            _updateOldValues: function() {
                this._oldX = this._x;
                this._oldY = this._y;
                this._oldRotation = this._rotation;
                this._oldScaleX = this._scaleX;
                this._oldScaleY = this._scaleY;
                this._oldAlpha = this._alpha;
                this._oldVisible = this._visible;
                this._oldPlaying = this._playing;
                this._oldCurrentFrame = this._currentFrame;
                this._oldLineLength = this._lineLength;
                this.noInterpolation = !1;
                this.type == W.BITMAP && (this.get_currentFrame() == this.mc.frames.length && null != this.funcEnd && this.funcEnd(), this.get_playing() && this.set_currentFrame(1 +
                    this.get_currentFrame() % this.mc.frames.length));
                if (null != this.child)
                    for (var a = this.child; a._updateOldValues(), a = a.next, a != this.child;);
            },
            __class__: f,
            __properties__: {
                set_lineLength: "set_lineLength",
                set_currentFrame: "set_currentFrame",
                get_currentFrame: "get_currentFrame",
                set_playing: "set_playing",
                get_playing: "get_playing",
                set_visible: "set_visible",
                get_visible: "get_visible",
                set_alpha: "set_alpha",
                get_alpha: "get_alpha",
                set_scaleY: "set_scaleY",
                get_scaleY: "get_scaleY",
                set_scaleX: "set_scaleX",
                get_scaleX: "get_scaleX",
                set_rotation: "set_rotation",
                get_rotation: "get_rotation",
                set_y: "set_y",
                get_y: "get_y",
                set_x: "set_x",
                get_x: "get_x",
                get_totalFrames: "get_totalFrames"
            }
        };
        var x = function() {};
        s["oz.OzUtil"] = x;
        x.__name__ = ["oz", "OzUtil"];
        x.Reverse_oz_OzSprite = function(a, b, c) {
            null == c && (c = 5E6);
            null == b && (b = 0);
            c > a.length && (c = a.length);
            for (var d, e = 0, p = (c - b) / 2 | 0; e < p;) {
                var f = e++;
                d = a[b + f];
                a[b + f] = a[c - f - 1];
                a[c - f - 1] = d
            }
        };
        x.getURL = function(a) {
            H.getURL(new Eb(a))
        };
        x.StringReplace = function(a, b, c) {
            a = a.split(b);
            b = null;
            0 < a.length && (b = a[0]);
            for (var d = 1, e = a.length; d < e;) {
                var p = d++;
                null == a[p] || 1 > a[p].length || (b = b + c + a[p])
            }
            return b
        };
        x.CommaStringToArray = function(a) {
            var b = [],
                c = 0;
            for (a = a.split(","); c < a.length;) {
                var d = a[c];
                for (++c;
                    " " == d.charAt(0);) d = J.substr(d, 1, null);
                for (;
                    " " == d.charAt(d.length - 1);) d = J.substr(d, 0, d.length - 1);
                null != d && 0 < d.length && b.push(d)
            }
            return b
        };
        x.BitCount = function(a) {
            for (var b = 0; 0 != a;) a &= a - 1, ++b;
            return b
        };
        x.StringToIntArray = function(a) {
            if (null == a) return [];
            a = a.split(",");
            for (var b = 0, c = [], d = 0; d < a.length;) {
                var e = a[d];
                ++d;
                null != e && 0 < e.length && (c[b] = K.parseInt(e), ++b)
            }
            return c
        };
        x.IndexOfInt = function(a, b) {
            for (var c = 0, d = a.length; c < d;) {
                var e = c++;
                if (a[e] == b) return e
            }
            return -1
        };
        x.SortIdsByName = function(a, b) {
            var c, d;
            for (c = a.length - 1; 0 <= c;) {
                for (d = 0; d < c;) {
                    if (b[d] > b[d + 1]) {
                        var e = b[d];
                        b[d] = b[d + 1];
                        b[d + 1] = e;
                        e = a[d];
                        a[d] = a[d + 1];
                        a[d + 1] = e
                    }++d
                }--c
            }
        };
        x.FindStringId = function(a, b) {
            for (var c = -1, d = a.length; c + 1 < d;) {
                var e = Math.floor((c + d) / 2);
                if (a[e] < b) c = e;
                else if (a[e] > b) d = e;
                else return e
            }
            return -1
        };
        x.round = function(a, b) {
            null == b && (b = 2);
            for (var c =
                    1, d = 0, e = b; d < e;) d++, c *= 10;
            return Math.round(a * c) / c
        };
        x.ProjectPointOnLineSegment = function(a, b, c, d, e, p, f) {
            e -= c;
            p -= d;
            a = e * (a - c) + p * (b - d);
            b = e * e + p * p;
            f[0] = c + a * e / b;
            f[1] = d + a * p / b
        };
        x.rotateAroundPoint = function(a, b, c, d, e, p) {
            var f = Math.sin(c / 180 * Math.PI);
            c = Math.cos(c / 180 * Math.PI);
            a -= d;
            b -= e;
            p[0] = d + a * c - b * f;
            p[1] = e + b * c + a * f
        };
        x.DotPoints = function(a, b, c, d, e, p, f, g) {
            return (c - a) * (f - e) + (d - b) * (g - p)
        };
        x.CrossPoints = function(a, b, c, d, e, p) {
            return (c - a) * (p - b) - (d - b) * (e - a)
        };
        x.AngleFromSegment = function(a, b, c, d) {
            a -= c;
            b -= d;
            return 1E-6 >
                a * a + b * b ? 0 : 180 / Math.PI * Math.atan2(b, a)
        };
        x.DistancePoints = function(a, b, c, d) {
            a -= c;
            b -= d;
            return Math.sqrt(a * a + b * b)
        };
        x.PointLineDistance = function(a, b, c, d, e, p, f) {
            var g = x.CrossPoints(a, b, c, d, e, p) / x.DistancePoints(a, b, c, d);
            if (f) {
                if (0 < x.DotPoints(a, b, c, d, c, d, e, p)) return x.PLDNearest = 2, x.DistancePoints(c, d, e, p);
                if (0 < x.DotPoints(c, d, a, b, a, b, e, p)) return x.PLDNearest = 1, x.DistancePoints(a, b, e, p)
            }
            x.PLDNearest = 0;
            return Math.abs(g)
        };
        x.ReachMaxSpeed2D = function(a, b, c, d, e, p) {
            var f = c - a,
                g = d - b,
                k = Math.sqrt(f * f + g * g);
            k <= e ?
                (p[0] = c, p[1] = d) : (c = e / k, p[0] = a + f * c, p[1] = b + g * c)
        };
        x.GenerateControlPointsFromPath = function(a, b) {
            for (var c = [], d = x.ComputeControlPoints(a), e = x.ComputeControlPoints(b), p = 0, f = d.length; p < f;) {
                var g = p++;
                c.push(new Cc(d[g].x, e[g].x, d[g].y, e[g].y))
            }
            return c
        };
        x.ComputeControlPoints = function(a) {
            var b = [],
                c = [],
                d = a.length - 1,
                e = [],
                p = [],
                f = [],
                g = [];
            e[0] = 0;
            p[0] = 2;
            f[0] = 1;
            g[0] = a[0] + 2 * a[1];
            for (var k = 1, I = d - 1; k < I;) {
                var h = k++;
                e[h] = 1;
                p[h] = 4;
                f[h] = 1;
                g[h] = 4 * a[h] + 2 * a[h + 1]
            }
            e[d - 1] = 2;
            p[d - 1] = 7;
            f[d - 1] = 0;
            g[d - 1] = 8 * a[d - 1] + a[d];
            for (k = 1; k <
                d;) I = k++, h = e[I] / p[I - 1], p[I] -= h * f[I - 1], g[I] -= h * g[I - 1];
            b[d - 1] = g[d - 1] / p[d - 1];
            e = 0;
            for (k = d - 1; e < k;) I = e++, I = d - 2 - I, b[I] = (g[I] - f[I] * b[I + 1]) / p[I];
            p = 0;
            for (f = d - 1; p < f;) g = p++, c[g] = 2 * a[g + 1] - b[g + 1];
            c[d - 1] = 0.5 * (a[d] + b[d - 1]);
            a = [];
            for (p = 0; p < d;) f = p++, a.push(new xa(b[f], c[f]));
            return a
        };
        x.ReverseFloats = function(a, b, c) {
            null == c && (c = 5E7);
            null == b && (b = 0);
            5E7 == c && (c = a.length);
            for (var d, e = 0, p = (c - b) / 2 | 0; e < p;) {
                var f = e++;
                d = a[b + f];
                a[b + f] = a[c - f - 1];
                a[c - f - 1] = d
            }
        };
        var X = function() {
            this.h = {}
        };
        s["haxe.ds.StringMap"] = X;
        X.__name__ = ["haxe",
            "ds", "StringMap"
        ];
        X.__interfaces__ = [dc];
        X.prototype = {
            setReserved: function(a, b) {
                null == this.rh && (this.rh = {});
                this.rh["$" + a] = b
            },
            getReserved: function(a) {
                return null == this.rh ? null : this.rh["$" + a]
            },
            existsReserved: function(a) {
                return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a)
            },
            remove: function(a) {
                if (null != O[a]) {
                    a = "$" + a;
                    if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                    delete this.rh[a]
                } else {
                    if (!this.h.hasOwnProperty(a)) return !1;
                    delete this.h[a]
                }
                return !0
            },
            keys: function() {
                return J.iter(this.arrayKeys())
            },
            arrayKeys: function() {
                var a = [],
                    b;
                for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
                if (null != this.rh)
                    for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
                return a
            },
            __class__: X
        };
        var W = s["oz.SpriteType"] = {
            __ename__: ["oz", "SpriteType"],
            __constructs__: "EMPTY BITMAP TEXT POLYGON TILEMAP BACKGROUND BACKGROUNDIMAGE".split(" ")
        };
        W.EMPTY = ["EMPTY", 0];
        W.EMPTY.toString = F;
        W.EMPTY.__enum__ = W;
        W.BITMAP = ["BITMAP", 1];
        W.BITMAP.toString = F;
        W.BITMAP.__enum__ = W;
        W.TEXT = ["TEXT", 2];
        W.TEXT.toString = F;
        W.TEXT.__enum__ = W;
        W.POLYGON = ["POLYGON", 3];
        W.POLYGON.toString = F;
        W.POLYGON.__enum__ = W;
        W.TILEMAP = ["TILEMAP", 4];
        W.TILEMAP.toString = F;
        W.TILEMAP.__enum__ = W;
        W.BACKGROUND = ["BACKGROUND", 5];
        W.BACKGROUND.toString = F;
        W.BACKGROUND.__enum__ = W;
        W.BACKGROUNDIMAGE = ["BACKGROUNDIMAGE", 6];
        W.BACKGROUNDIMAGE.toString = F;
        W.BACKGROUNDIMAGE.__enum__ = W;
        var V = s["oz.TextAlign"] = {
            __ename__: ["oz", "TextAlign"],
            __constructs__: ["LEFT", "RIGHT", "CENTER", "JUSTIFIED"]
        };
        V.LEFT = ["LEFT", 0];
        V.LEFT.toString = F;
        V.LEFT.__enum__ = V;
        V.RIGHT = ["RIGHT", 1];
        V.RIGHT.toString =
            F;
        V.RIGHT.__enum__ = V;
        V.CENTER = ["CENTER", 2];
        V.CENTER.toString = F;
        V.CENTER.__enum__ = V;
        V.JUSTIFIED = ["JUSTIFIED", 3];
        V.JUSTIFIED.toString = F;
        V.JUSTIFIED.__enum__ = V;
        var tc = function() {};
        s["platforms.WindowsPhone"] = tc;
        tc.__name__ = ["platforms", "WindowsPhone"];
        tc.ScriptNotify = function(a) {};
        var Eb = function(a) {
            null != a && (this.url = a);
            this.requestHeaders = [];
            this.method = "GET";
            this.contentType = null
        };
        s["openfl.net.URLRequest"] = Eb;
        Eb.__name__ = ["openfl", "net", "URLRequest"];
        Eb.prototype = {
            formatRequestHeaders: function() {
                var a =
                    this.requestHeaders;
                null == a && (a = []);
                if ("GET" == this.method || null == this.data) return a;
                if ("string" == typeof this.data || S.__instanceof(this.data, zb)) a = a.slice(), a.push(new uc("Content-Type", null != this.contentType ? this.contentType : "application/x-www-form-urlencoded"));
                return a
            },
            __class__: Eb
        };
        var cb = function(a, b, c, d) {
            a = cb.image;
            ia.call(this, a.width, a.height, !0, 0);
            this.context.drawImage(a, 0, 0)
        };
        s.PreloaderBarBMD = cb;
        cb.__name__ = ["PreloaderBarBMD"];
        cb.preload = function() {
            var a = document.createElement("img");
            C.loadEmbed(cb.image = a);
            a.src = "data:image/png;base64,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"
        };
        cb.__super__ = ia;
        cb.prototype = R(ia.prototype, {
            __class__: cb
        });
        var Z = function() {};
        s.Reflect = Z;
        Z.__name__ = ["Reflect"];
        Z.field = function(a, b) {
            try {
                return a[b]
            } catch (c) {
                return null
            }
        };
        Z.getProperty = function(a, b) {
            var c;
            if (null == a) return null;
            var d;
            d = a.__properties__ ? c = a.__properties__["get_" + b] : !1;
            return d ? a[c]() : a[b]
        };
        Z.setProperty = function(a, b, c) {
            var d, e;
            e = a.__properties__ ? d = a.__properties__["set_" + b] : !1;
            if (e) a[d](c);
            else a[b] = c
        };
        Z.fields = function(a) {
            var b = [];
            if (null != a) {
                var c = Object.prototype.hasOwnProperty,
                    d;
                for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d)
            }
            return b
        };
        Z.isFunction = function(a) {
            return "function" == typeof a ? !(a.__name__ || a.__ename__) : !1
        };
        Z.compare = function(a, b) {
            return a == b ? 0 : a > b ? 1 : -1
        };
        Z.compareMethods = function(a, b) {
            return a == b ? !0 : Z.isFunction(a) && Z.isFunction(b) ? a.scope == b.scope && a.method == b.method ? null != a.method : !1 : !1
        };
        Z.isEnumValue = function(a) {
            return null != a ? null != a.__enum__ : !1
        };
        Z.deleteField = function(a, b) {
            if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
            delete a[b];
            return !0
        };
        var nb = function() {
            this.b = ""
        };
        s.StringBuf = nb;
        nb.__name__ = ["StringBuf"];
        nb.prototype = {
            __class__: nb
        };
        var aa = s.ValueType = {
            __ename__: ["ValueType"],
            __constructs__: "TNull TInt TFloat TBool TObject TFunction TClass TEnum TUnknown".split(" ")
        };
        aa.TNull = ["TNull", 0];
        aa.TNull.toString = F;
        aa.TNull.__enum__ = aa;
        aa.TInt = ["TInt", 1];
        aa.TInt.toString = F;
        aa.TInt.__enum__ = aa;
        aa.TFloat = ["TFloat", 2];
        aa.TFloat.toString = F;
        aa.TFloat.__enum__ = aa;
        aa.TBool = ["TBool", 3];
        aa.TBool.toString = F;
        aa.TBool.__enum__ = aa;
        aa.TObject = ["TObject", 4];
        aa.TObject.toString = F;
        aa.TObject.__enum__ = aa;
        aa.TFunction = ["TFunction", 5];
        aa.TFunction.toString = F;
        aa.TFunction.__enum__ = aa;
        aa.TClass = function(a) {
            a = ["TClass", 6, a];
            a.__enum__ = aa;
            a.toString = F;
            return a
        };
        aa.TEnum = function(a) {
            a = ["TEnum", 7, a];
            a.__enum__ = aa;
            a.toString = F;
            return a
        };
        aa.TUnknown = ["TUnknown", 8];
        aa.TUnknown.toString = F;
        aa.TUnknown.__enum__ = aa;
        var B = function(a) {
            this.nodeType = a;
            this.children = [];
            this.attributeMap = new X
        };
        s.Xml = B;
        B.__name__ = ["Xml"];
        B.parse = function(a) {
            return Ab.parse(a)
        };
        B.createElement = function(a) {
            var b = new B(B.Element);
            if (b.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + b.nodeType);
            b.nodeName = a;
            return b
        };
        B.createPCData = function(a) {
            var b = new B(B.PCData);
            if (b.nodeType == B.Document || b.nodeType == B.Element) throw new D("Bad node type, unexpected " + b.nodeType);
            b.nodeValue = a;
            return b
        };
        B.createCData = function(a) {
            var b = new B(B.CData);
            if (b.nodeType == B.Document || b.nodeType == B.Element) throw new D("Bad node type, unexpected " + b.nodeType);
            b.nodeValue =
                a;
            return b
        };
        B.createComment = function(a) {
            var b = new B(B.Comment);
            if (b.nodeType == B.Document || b.nodeType == B.Element) throw new D("Bad node type, unexpected " + b.nodeType);
            b.nodeValue = a;
            return b
        };
        B.createDocType = function(a) {
            var b = new B(B.DocType);
            if (b.nodeType == B.Document || b.nodeType == B.Element) throw new D("Bad node type, unexpected " + b.nodeType);
            b.nodeValue = a;
            return b
        };
        B.createProcessingInstruction = function(a) {
            var b = new B(B.ProcessingInstruction);
            if (b.nodeType == B.Document || b.nodeType == B.Element) throw new D("Bad node type, unexpected " +
                b.nodeType);
            b.nodeValue = a;
            return b
        };
        B.createDocument = function() {
            return new B(B.Document)
        };
        B.prototype = {
            get: function(a) {
                if (this.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + this.nodeType);
                var b = this.attributeMap;
                return null != O[a] ? b.getReserved(a) : b.h[a]
            },
            set: function(a, b) {
                if (this.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + this.nodeType);
                var c = this.attributeMap;
                null != O[a] ? c.setReserved(a, b) : c.h[a] = b
            },
            exists: function(a) {
                if (this.nodeType !=
                    B.Element) throw new D("Bad node type, expected Element but found " + this.nodeType);
                var b = this.attributeMap;
                return null != O[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)
            },
            attributes: function() {
                if (this.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + this.nodeType);
                return this.attributeMap.keys()
            },
            elements: function() {
                if (this.nodeType != B.Document && this.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + this.nodeType);
                for (var a = [], b = 0, c = this.children; b <
                    c.length;) {
                    var d = c[b];
                    ++b;
                    d.nodeType == B.Element && a.push(d)
                }
                return J.iter(a)
            },
            elementsNamed: function(a) {
                if (this.nodeType != B.Document && this.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + this.nodeType);
                for (var b = [], c = 0, d = this.children; c < d.length;) {
                    var e = d[c];
                    ++c;
                    var p;
                    if (e.nodeType == B.Element) {
                        if (e.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + e.nodeType);
                        p = e.nodeName == a
                    } else p = !1;
                    p && b.push(e)
                }
                return J.iter(b)
            },
            firstElement: function() {
                if (this.nodeType !=
                    B.Document && this.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + this.nodeType);
                for (var a = 0, b = this.children; a < b.length;) {
                    var c = b[a];
                    ++a;
                    if (c.nodeType == B.Element) return c
                }
                return null
            },
            addChild: function(a) {
                if (this.nodeType != B.Document && this.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + this.nodeType);
                null != a.parent && a.parent.removeChild(a);
                this.children.push(a);
                a.parent = this
            },
            removeChild: function(a) {
                if (this.nodeType !=
                    B.Document && this.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + this.nodeType);
                return J.remove(this.children, a) ? (a.parent = null, !0) : !1
            },
            __class__: B
        };
        var Dc = function(a, b) {
            this.high = a;
            this.low = b
        };
        s["haxe._Int64.___Int64"] = Dc;
        Dc.__name__ = ["haxe", "_Int64", "___Int64"];
        Dc.prototype = {
            __class__: Dc
        };
        var Ia = function() {
            this.buf = new nb;
            this.cache = [];
            this.useCache = Ia.USE_CACHE;
            this.useEnumIndex = Ia.USE_ENUM_INDEX;
            this.shash = new X;
            this.scount = 0
        };
        s["haxe.Serializer"] = Ia;
        Ia.__name__ = ["haxe", "Serializer"];
        Ia.run = function(a) {
            var b = new Ia;
            b.serialize(a);
            return b.toString()
        };
        Ia.prototype = {
            toString: function() {
                return this.buf.b
            },
            serializeString: function(a) {
                var b = this.shash,
                    b = null != O[a] ? b.getReserved(a) : b.h[a];
                if (null != b) this.buf.b += "R", this.buf.b += null == b ? "null" : "" + b;
                else {
                    var b = this.shash,
                        c = this.scount++;
                    null != O[a] ? b.setReserved(a, c) : b.h[a] = c;
                    this.buf.b += "y";
                    a = encodeURIComponent(a);
                    this.buf.b += K.string(a.length);
                    this.buf.b += ":";
                    this.buf.b += null == a ? "null" : "" + a
                }
            },
            serializeRef: function(a) {
                for (var b =
                        typeof a, c = 0, d = this.cache.length; c < d;) {
                    var e = c++,
                        p = this.cache[e];
                    if (typeof p == b && p == a) return this.buf.b += "r", this.buf.b += null == e ? "null" : "" + e, !0
                }
                this.cache.push(a);
                return !1
            },
            serializeFields: function(a) {
                for (var b = 0, c = Z.fields(a); b < c.length;) {
                    var d = c[b];
                    ++b;
                    this.serializeString(d);
                    this.serialize(Z.field(a, d))
                }
                this.buf.b += "g"
            },
            serialize: function(a) {
                var b = U["typeof"](a);
                switch (b[1]) {
                    case 0:
                        this.buf.b += "n";
                        break;
                    case 1:
                        if (0 == a) {
                            this.buf.b += "z";
                            break
                        }
                        this.buf.b += "i";
                        this.buf.b += null == a ? "null" : "" + a;
                        break;
                    case 2:
                        isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b += null == a ? "null" : "" + a) : this.buf.b += 0 > a ? "m" : "p";
                        break;
                    case 3:
                        this.buf.b += a ? "t" : "f";
                        break;
                    case 4:
                        if (S.__instanceof(a, pd)) a = U.getClassName(a), this.buf.b += "A", this.serializeString(a);
                        else if (S.__instanceof(a, qd)) this.buf.b += "B", this.serializeString(U.getEnumName(a));
                        else {
                            if (this.useCache && this.serializeRef(a)) break;
                            this.buf.b += "o";
                            this.serializeFields(a)
                        }
                        break;
                    case 5:
                        throw new D("Cannot serialize function");
                    case 6:
                        b = b[2];
                        if (b == String) {
                            this.serializeString(a);
                            break
                        }
                        if (this.useCache && this.serializeRef(a)) break;
                        switch (b) {
                            case Array:
                                b = 0;
                                this.buf.b += "a";
                                for (var c = 0, d = a.length; c < d;) {
                                    var e = c++;
                                    null == a[e] ? ++b : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == b ? "null" : "" + b), b = 0), this.serialize(a[e]))
                                }
                                0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == b ? "null" : "" + b));
                                this.buf.b += "h";
                                break;
                            case Date:
                                this.buf.b += "v";
                                this.buf.b += K.string(a.getTime());
                                break;
                            case cc:
                                this.buf.b += "l";
                                for (a = a.h; null != a;) b = a.item, a = a.next, this.serialize(b);
                                this.buf.b +=
                                    "h";
                                break;
                            case va:
                                this.buf.b += "q";
                                for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b += null == c ? "null" : "" + c, this.serialize(a.h[c]);
                                this.buf.b += "h";
                                break;
                            case Oa:
                                this.buf.b += "M";
                                for (b = a.keys(); b.hasNext();) c = b.next(), d = Z.field(c, "__id__"), Z.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                                this.buf.b += "h";
                                break;
                            case X:
                                this.buf.b += "b";
                                for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != O[c] ? a.getReserved(c) : a.h[c]);
                                this.buf.b +=
                                    "h";
                                break;
                            case Ja:
                                this.buf.b += "s";
                                this.buf.b += K.string(Math.ceil(8 * a.length / 6));
                                this.buf.b += ":";
                                c = 0;
                                d = a.length - 2;
                                b = Ia.BASE64_CODES;
                                if (null == b) {
                                    for (var b = Array(Ia.BASE64.length), e = 0, p = Ia.BASE64.length; e < p;) {
                                        var f = e++;
                                        b[f] = J.cca(Ia.BASE64, f)
                                    }
                                    Ia.BASE64_CODES = b
                                }
                                for (; c < d;) e = a.b[c++], p = a.b[c++], f = a.b[c++], this.buf.b += String.fromCharCode(b[e >> 2]), this.buf.b += String.fromCharCode(b[(e << 4 | p >> 4) & 63]), this.buf.b += String.fromCharCode(b[(p << 2 | f >> 6) & 63]), this.buf.b += String.fromCharCode(b[f & 63]);
                                c == d ? (d = a.b[c++],
                                    a = a.b[c++], this.buf.b += String.fromCharCode(b[d >> 2]), this.buf.b += String.fromCharCode(b[(d << 4 | a >> 4) & 63]), this.buf.b += String.fromCharCode(b[a << 2 & 63])) : c == d + 1 && (a = a.b[c++], this.buf.b += String.fromCharCode(b[a >> 2]), this.buf.b += String.fromCharCode(b[a << 4 & 63]));
                                break;
                            default:
                                this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(U.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(U.getClassName(b)),
                                    this.useCache && this.cache.push(a), this.serializeFields(a))
                        }
                        break;
                    case 7:
                        b = b[2];
                        if (this.useCache) {
                            if (this.serializeRef(a)) break;
                            this.cache.pop()
                        }
                        this.buf.b += K.string(this.useEnumIndex ? "j" : "w");
                        this.serializeString(U.getEnumName(b));
                        this.useEnumIndex ? (this.buf.b += ":", this.buf.b += K.string(a[1])) : this.serializeString(a[0]);
                        this.buf.b += ":";
                        b = a.length;
                        this.buf.b += K.string(b - 2);
                        for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                        this.useCache && this.cache.push(a);
                        break;
                    default:
                        throw new D("Cannot serialize " + K.string(a));
                }
            },
            __class__: Ia
        };
        var wb = function(a) {
            var b = this;
            this.id = setInterval(function() {
                b.run()
            }, a)
        };
        s["haxe.Timer"] = wb;
        wb.__name__ = ["haxe", "Timer"];
        wb.stamp = function() {
            return (new Date).getTime() / 1E3
        };
        wb.prototype = {
            run: function() {},
            __class__: wb
        };
        var Xb = function() {};
        s["haxe._Unserializer.DefaultResolver"] = Xb;
        Xb.__name__ = ["haxe", "_Unserializer", "DefaultResolver"];
        Xb.prototype = {
            resolveClass: function(a) {
                return U.resolveClass(a)
            },
            resolveEnum: function(a) {
                return U.resolveEnum(a)
            },
            __class__: Xb
        };
        var Qa = function(a) {
            this.buf =
                a;
            this.length = a.length;
            this.pos = 0;
            this.scache = [];
            this.cache = [];
            a = Qa.DEFAULT_RESOLVER;
            null == a && (a = new Xb, Qa.DEFAULT_RESOLVER = a);
            this.resolver = a
        };
        s["haxe.Unserializer"] = Qa;
        Qa.__name__ = ["haxe", "Unserializer"];
        Qa.initCodes = function() {
            for (var a = [], b = 0, c = Qa.BASE64.length; b < c;) {
                var d = b++;
                a[Qa.BASE64.charCodeAt(d)] = d
            }
            return a
        };
        Qa.prototype = {
            setResolver: function(a) {
                null == a ? (null == ob.instance && (ob.instance = new ob), this.resolver = ob.instance) : this.resolver = a
            },
            readDigits: function() {
                for (var a = 0, b = !1, c = this.pos;;) {
                    var d =
                        this.buf.charCodeAt(this.pos);
                    if (d != d) break;
                    if (45 == d) {
                        if (this.pos != c) break;
                        b = !0
                    } else {
                        if (48 > d || 57 < d) break;
                        a = 10 * a + (d - 48)
                    }
                    this.pos++
                }
                b && (a *= -1);
                return a
            },
            readFloat: function() {
                for (var a = this.pos;;) {
                    var b = this.buf.charCodeAt(this.pos);
                    if (b != b) break;
                    if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                    else break
                }
                return parseFloat(J.substr(this.buf, a, this.pos - a))
            },
            unserializeObject: function(a) {
                for (;;) {
                    if (this.pos >= this.length) throw new D("Invalid object");
                    if (103 == this.buf.charCodeAt(this.pos)) break;
                    var b = this.unserialize();
                    if ("string" != typeof b) throw new D("Invalid object key");
                    var c = this.unserialize();
                    a[b] = c
                }
                this.pos++
            },
            unserializeEnum: function(a, b) {
                if (58 != this.buf.charCodeAt(this.pos++)) throw new D("Invalid enum format");
                var c = this.readDigits();
                if (0 == c) return U.createEnum(a, b);
                for (var d = []; 0 < c--;) d.push(this.unserialize());
                return U.createEnum(a, b, d)
            },
            unserialize: function() {
                switch (this.buf.charCodeAt(this.pos++)) {
                    case 65:
                        var a = this.unserialize(),
                            b = this.resolver.resolveClass(a);
                        if (null == b) throw new D("Class not found " +
                            a);
                        return b;
                    case 66:
                        a = this.unserialize();
                        b = this.resolver.resolveEnum(a);
                        if (null == b) throw new D("Enum not found " + a);
                        return b;
                    case 67:
                        a = this.unserialize();
                        b = this.resolver.resolveClass(a);
                        if (null == b) throw new D("Class not found " + a);
                        a = U.createEmptyInstance(b);
                        this.cache.push(a);
                        a.hxUnserialize(this);
                        if (103 != this.buf.charCodeAt(this.pos++)) throw new D("Invalid custom data");
                        return a;
                    case 77:
                        a = new Oa;
                        for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                        this.pos++;
                        return a;
                    case 82:
                        a = this.readDigits();
                        if (0 > a || a >= this.scache.length) throw new D("Invalid string reference");
                        return this.scache[a];
                    case 97:
                        a = [];
                        for (this.cache.push(a);;) {
                            b = this.buf.charCodeAt(this.pos);
                            if (104 == b) {
                                this.pos++;
                                break
                            }
                            117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                        }
                        return a;
                    case 98:
                        a = new X;
                        for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) {
                            var b = this.unserialize(),
                                c = this.unserialize();
                            null != O[b] ? a.setReserved(b, c) : a.h[b] = c
                        }
                        this.pos++;
                        return a;
                    case 99:
                        a = this.unserialize();
                        b = this.resolver.resolveClass(a);
                        if (null == b) throw new D("Class not found " + a);
                        a = U.createEmptyInstance(b);
                        this.cache.push(a);
                        this.unserializeObject(a);
                        return a;
                    case 100:
                        return this.readFloat();
                    case 102:
                        return !1;
                    case 105:
                        return this.readDigits();
                    case 106:
                        a = this.unserialize();
                        b = this.resolver.resolveEnum(a);
                        if (null == b) throw new D("Enum not found " + a);
                        this.pos++;
                        var c = this.readDigits(),
                            d = b.__constructs__.slice()[c];
                        if (null == d) throw new D("Unknown enum index " + a + "@" +
                            c);
                        a = this.unserializeEnum(b, d);
                        this.cache.push(a);
                        return a;
                    case 107:
                        return NaN;
                    case 108:
                        a = new cc;
                        for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                        this.pos++;
                        return a;
                    case 109:
                        return -Infinity;
                    case 110:
                        return null;
                    case 111:
                        return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                    case 112:
                        return Infinity;
                    case 113:
                        a = new va;
                        this.cache.push(a);
                        for (b = this.buf.charCodeAt(this.pos++); 58 == b;) b = this.readDigits(), c = this.unserialize(), a.h[b] = c, b = this.buf.charCodeAt(this.pos++);
                        if (104 != b) throw new D("Invalid IntMap format");
                        return a;
                    case 114:
                        a = this.readDigits();
                        if (0 > a || a >= this.cache.length) throw new D("Invalid reference");
                        return this.cache[a];
                    case 115:
                        a = this.readDigits();
                        d = this.buf;
                        if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < a) throw new D("Invalid bytes length");
                        var e = Qa.CODES;
                        null == e && (e = Qa.initCodes(), Qa.CODES = e);
                        for (var p = this.pos, f = a & 3, g = p + (a - f), b = new Ja(new Nb(3 * (a >> 2) + (2 <= f ? f - 1 : 0))), c = 0; p < g;) {
                            var k = e[d.charCodeAt(p++)],
                                I = e[d.charCodeAt(p++)];
                            b.b[c++] =
                                (k << 2 | I >> 4) & 255;
                            k = e[d.charCodeAt(p++)];
                            b.b[c++] = (I << 4 | k >> 2) & 255;
                            I = e[d.charCodeAt(p++)];
                            b.b[c++] = (k << 6 | I) & 255
                        }
                        2 <= f && (I = e[d.charCodeAt(p++)], g = e[d.charCodeAt(p++)], b.b[c++] = (I << 2 | g >> 4) & 255, 3 == f && (d = e[d.charCodeAt(p++)], b.b[c++] = (g << 4 | d >> 2) & 255));
                        this.pos += a;
                        this.cache.push(b);
                        return b;
                    case 116:
                        return !0;
                    case 118:
                        return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >=
                            this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = J.strDate(J.substr(this.buf, this.pos, 19)), this.pos += 19) : (a = this.readFloat(), a = new Date(a)), this.cache.push(a), a;
                    case 119:
                        a = this.unserialize();
                        b = this.resolver.resolveEnum(a);
                        if (null == b) throw new D("Enum not found " + a);
                        a = this.unserializeEnum(b, this.unserialize());
                        this.cache.push(a);
                        return a;
                    case 120:
                        throw D.wrap(this.unserialize());
                    case 121:
                        a = this.readDigits();
                        if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < a) throw new D("Invalid string length");
                        b = J.substr(this.buf, this.pos, a);
                        this.pos += a;
                        b = decodeURIComponent(b.split("+").join(" "));
                        this.scache.push(b);
                        return b;
                    case 122:
                        return 0
                }
                this.pos--;
                throw new D("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
            },
            __class__: Qa
        };
        var ob = function() {};
        s["haxe._Unserializer.NullResolver"] = ob;
        ob.__name__ = ["haxe", "_Unserializer", "NullResolver"];
        ob.prototype = {
            resolveClass: function(a) {
                return null
            },
            resolveEnum: function(a) {
                return null
            },
            __class__: ob
        };
        var Ja = function(a) {
            this.length = a.byteLength;
            this.b = new hb(a);
            this.b.bufferValue = a;
            a.hxBytes = this;
            a.bytes = this.b
        };
        s["haxe.io.Bytes"] = Ja;
        Ja.__name__ = ["haxe", "io", "Bytes"];
        Ja.alloc = function(a) {
            return new Ja(new Nb(a))
        };
        Ja.ofString = function(a) {
            for (var b = [], c = 0; c < a.length;) {
                var d = a.charCodeAt(c++);
                55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023);
                127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 |
                    d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63))
            }
            return new Ja((new hb(b)).buffer)
        };
        Ja.ofData = function(a) {
            var b = a.hxBytes;
            return null != b ? b : new Ja(a)
        };
        Ja.fastGet = function(a, b) {
            return a.bytes[b]
        };
        Ja.prototype = {
            getString: function(a, b) {
                if (0 > a || 0 > b || a + b > this.length) throw new D(Ka.OutsideBounds);
                for (var c = "", d = this.b, e = String.fromCharCode, p = a, f = a + b; p < f;) {
                    var g = d[p++];
                    if (128 > g) {
                        if (0 == g) break;
                        c += e(g)
                    } else if (224 > g) c += e((g & 63) << 6 | d[p++] & 127);
                    else if (240 > g) var k = d[p++],
                        c = c + e((g & 31) << 12 | (k & 127) << 6 | d[p++] & 127);
                    else var k = d[p++],
                        I = d[p++],
                        g = (g & 15) << 18 | (k & 127) << 12 | (I & 127) << 6 | d[p++] & 127,
                        c = c + e((g >> 10) + 55232),
                        c = c + e(g & 1023 | 56320)
                }
                return c
            },
            toString: function() {
                return this.getString(0, this.length)
            },
            __class__: Ja
        };
        var Ib = function() {};
        s["haxe.crypto.Base64"] = Ib;
        Ib.__name__ = ["haxe", "crypto", "Base64"];
        Ib.decode = function(a, b) {
            null == b && (b = !0);
            if (b)
                for (; 61 == J.cca(a, a.length - 1);) a = J.substr(a, 0, -1);
            return (new Nc(Ib.BYTES)).decodeBytes(Ja.ofString(a))
        };
        var Nc = function(a) {
            for (var b = a.length, c = 1; b > 1 << c;) ++c;
            if (8 < c || b != 1 << c) throw new D("BaseCode : base length must be a power of two.");
            this.base = a;
            this.nbits = c
        };
        s["haxe.crypto.BaseCode"] = Nc;
        Nc.__name__ = ["haxe", "crypto", "BaseCode"];
        Nc.prototype = {
            initTable: function() {
                for (var a = [], b = 0; 256 > b;) {
                    var c = b++;
                    a[c] = -1
                }
                b = 0;
                for (c = this.base.length; b < c;) {
                    var d = b++;
                    a[this.base.b[d]] = d
                }
                this.tbl = a
            },
            decodeBytes: function(a) {
                var b = this.nbits;
                null == this.tbl && this.initTable();
                for (var c = this.tbl, d = a.length * b >> 3, e = new Ja(new Nb(d)), p = 0, f = 0, g = 0, k = 0; k < d;) {
                    for (; 8 > f;) {
                        var f = f + b,
                            p = p << b,
                            I = c[a.b[g++]];
                        if (-1 == I) throw new D("BaseCode : invalid encoded char");
                        p |=
                            I
                    }
                    f -= 8;
                    e.b[k++] = p >> f & 255
                }
                return e
            },
            __class__: Nc
        };
        var fc = function() {};
        s["haxe.ds.BalancedTree"] = fc;
        fc.__name__ = ["haxe", "ds", "BalancedTree"];
        fc.prototype = {
            set: function(a, b) {
                this.root = this.setLoop(a, b, this.root)
            },
            get: function(a) {
                for (var b = this.root; null != b;) {
                    var c = this.compare(a, b.key);
                    if (0 == c) return b.value;
                    b = 0 > c ? b.left : b.right
                }
                return null
            },
            exists: function(a) {
                for (var b = this.root; null != b;) {
                    var c = this.compare(a, b.key);
                    if (0 == c) return !0;
                    b = 0 > c ? b.left : b.right
                }
                return !1
            },
            setLoop: function(a, b, c) {
                if (null == c) return new wa(null,
                    a, b, null);
                var d = this.compare(a, c.key);
                if (0 == d) return new wa(c.left, a, b, c.right, null == c ? 0 : c._height);
                if (0 > d) return a = this.setLoop(a, b, c.left), this.balance(a, c.key, c.value, c.right);
                a = this.setLoop(a, b, c.right);
                return this.balance(c.left, c.key, c.value, a)
            },
            balance: function(a, b, c, d) {
                var e = null == a ? 0 : a._height,
                    p = null == d ? 0 : d._height;
                return e > p + 2 ? (e = a.left, p = a.right, (null == e ? 0 : e._height) >= (null == p ? 0 : p._height) ? new wa(a.left, a.key, a.value, new wa(a.right, b, c, d)) : new wa(new wa(a.left, a.key, a.value, a.right.left),
                    a.right.key, a.right.value, new wa(a.right.right, b, c, d))) : p > e + 2 ? (e = d.right, p = d.left, (null == e ? 0 : e._height) > (null == p ? 0 : p._height) ? new wa(new wa(a, b, c, d.left), d.key, d.value, d.right) : new wa(new wa(a, b, c, d.left.left), d.left.key, d.left.value, new wa(d.left.right, d.key, d.value, d.right))) : new wa(a, b, c, d, (e > p ? e : p) + 1)
            },
            compare: function(a, b) {
                return Z.compare(a, b)
            },
            __class__: fc
        };
        var wa = function(a, b, c, d, e) {
            null == e && (e = -1);
            this.left = a;
            this.key = b;
            this.value = c;
            this.right = d; - 1 == e ? (a = this.left, b = this.right, a = (null == a ?
                0 : a._height) > (null == b ? 0 : b._height) ? this.left : this.right, a = null == a ? 0 : a._height, this._height = a + 1) : this._height = e
        };
        s["haxe.ds.TreeNode"] = wa;
        wa.__name__ = ["haxe", "ds", "TreeNode"];
        wa.prototype = {
            __class__: wa
        };
        var Jb = function() {};
        s["haxe.ds.EnumValueMap"] = Jb;
        Jb.__name__ = ["haxe", "ds", "EnumValueMap"];
        Jb.__interfaces__ = [dc];
        Jb.__super__ = fc;
        Jb.prototype = R(fc.prototype, {
            compare: function(a, b) {
                var c = a[1] - b[1];
                if (0 != c) return c;
                var c = a.slice(2),
                    d = b.slice(2);
                return 0 == c.length && 0 == d.length ? 0 : this.compareArgs(c, d)
            },
            compareArgs: function(a, b) {
                var c = a.length - b.length;
                if (0 != c) return c;
                for (var c = 0, d = a.length; c < d;) {
                    var e = c++,
                        e = this.compareArg(a[e], b[e]);
                    if (0 != e) return e
                }
                return 0
            },
            compareArg: function(a, b) {
                return Z.isEnumValue(a) && Z.isEnumValue(b) ? this.compare(a, b) : a instanceof Array && null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : Z.compare(a, b)
            },
            __class__: Jb
        });
        var va = function() {
            this.h = {}
        };
        s["haxe.ds.IntMap"] = va;
        va.__name__ = ["haxe", "ds", "IntMap"];
        va.__interfaces__ = [dc];
        va.prototype = {
            remove: function(a) {
                if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a];
                return !0
            },
            keys: function() {
                var a = [],
                    b;
                for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
                return J.iter(a)
            },
            __class__: va
        };
        var ad = function() {};
        s["haxe.io.Eof"] = ad;
        ad.__name__ = ["haxe", "io", "Eof"];
        ad.prototype = {
            toString: function() {
                return "Eof"
            },
            __class__: ad
        };
        var Ka = s["haxe.io.Error"] = {
            __ename__: ["haxe", "io", "Error"],
            __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
        };
        Ka.Blocked = ["Blocked", 0];
        Ka.Blocked.toString = F;
        Ka.Blocked.__enum__ = Ka;
        Ka.Overflow = ["Overflow", 1];
        Ka.Overflow.toString =
            F;
        Ka.Overflow.__enum__ = Ka;
        Ka.OutsideBounds = ["OutsideBounds", 2];
        Ka.OutsideBounds.toString = F;
        Ka.OutsideBounds.__enum__ = Ka;
        Ka.Custom = function(a) {
            a = ["Custom", 3, a];
            a.__enum__ = Ka;
            a.toString = F;
            return a
        };
        var Ua = function() {};
        s["haxe.io.FPHelper"] = Ua;
        Ua.__name__ = ["haxe", "io", "FPHelper"];
        Ua.i32ToFloat = function(a) {
            var b = a >>> 23 & 255,
                c = a & 8388607;
            return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127)
        };
        Ua.floatToI32 = function(a) {
            if (0 == a) return 0;
            var b = 0 > a ? -a : a,
                c = Math.floor(Math.log(b) / 0.6931471805599453); -
            127 > c ? c = -127 : 128 < c && (c = 128);
            b = Math.round(8388608 * (b / Math.pow(2, c) - 1));
            8388608 == b && 128 > c && (b = 0, ++c);
            return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b
        };
        Ua.i64ToDouble = function(a, b) {
            var c = (b >> 20 & 2047) - 1023,
                d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
            return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c)
        };
        Ua.doubleToI64 = function(a) {
            var b = Ua.i64tmp;
            if (0 == a) b.low = 0, b.high = 0;
            else if (isFinite(a)) {
                var c = 0 > a ? -a : a,
                    d = Math.floor(Math.log(c) / 0.6931471805599453),
                    c = Math.round(4503599627370496 *
                        (c / Math.pow(2, d) - 1));
                b.low = c | 0;
                b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0
            } else 0 < a ? (b.low = 0, b.high = 2146435072) : (b.low = 0, b.high = -1048576);
            return b
        };
        var qa = function(a, b, c) {
            this.xml = b;
            this.message = a;
            this.position = c;
            this.lineNumber = 1;
            for (a = this.positionAtLine = 0; a < c;) {
                var d = a++,
                    d = b.charCodeAt(d);
                10 == d ? (this.lineNumber++, this.positionAtLine = 0) : 13 != d && this.positionAtLine++
            }
        };
        s["haxe.xml.XmlParserException"] = qa;
        qa.__name__ = ["haxe", "xml", "XmlParserException"];
        qa.prototype = {
            toString: function() {
                return U.getClassName(S.getClass(this)) +
                    ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine
            },
            __class__: qa
        };
        var Ab = function() {};
        s["haxe.xml.Parser"] = Ab;
        Ab.__name__ = ["haxe", "xml", "Parser"];
        Ab.parse = function(a, b) {
            null == b && (b = !1);
            var c = B.createDocument();
            Ab.doParse(a, b, 0, c);
            return c
        };
        Ab.doParse = function(a, b, c, d) {
            null == c && (c = 0);
            for (var e = null, p = 1, f = 1, g = null, k = 0, I = 0, h = 0, w = a.charCodeAt(c), m = new nb, l = 1, s = -1; w == w;) {
                switch (p) {
                    case 0:
                        switch (w) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                break;
                            default:
                                p = f;
                                continue
                        }
                        break;
                    case 1:
                        if (60 == w) p =
                            0, f = 2;
                        else {
                            k = c;
                            p = 13;
                            continue
                        }
                        break;
                    case 2:
                        switch (w) {
                            case 33:
                                if (91 == a.charCodeAt(c + 1)) {
                                    c += 2;
                                    if ("CDATA[" != J.substr(a, c, 6).toUpperCase()) throw new D(new qa("Expected <![CDATA[", a, c));
                                    c += 5;
                                    p = 17
                                } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                    if ("OCTYPE" != J.substr(a, c + 2, 6).toUpperCase()) throw new D(new qa("Expected <!DOCTYPE", a, c));
                                    c += 8;
                                    p = 16
                                } else {
                                    if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new D(new qa("Expected \x3c!--", a, c));
                                    c += 2;
                                    p = 15
                                }
                                k = c + 1;
                                break;
                            case 47:
                                if (null == d) throw new D(new qa("Expected node name",
                                    a, c));
                                k = c + 1;
                                p = 0;
                                f = 10;
                                break;
                            case 63:
                                p = 14;
                                k = c;
                                break;
                            default:
                                p = 3;
                                k = c;
                                continue
                        }
                        break;
                    case 3:
                        if (!(97 <= w && 122 >= w || 65 <= w && 90 >= w || 48 <= w && 57 >= w || 58 == w || 46 == w || 95 == w || 45 == w)) {
                            if (c == k) throw new D(new qa("Expected node name", a, c));
                            e = B.createElement(J.substr(a, k, c - k));
                            d.addChild(e);
                            ++I;
                            p = 0;
                            f = 4;
                            continue
                        }
                        break;
                    case 4:
                        switch (w) {
                            case 47:
                                p = 11;
                                break;
                            case 62:
                                p = 9;
                                break;
                            default:
                                p = 5;
                                k = c;
                                continue
                        }
                        break;
                    case 5:
                        if (!(97 <= w && 122 >= w || 65 <= w && 90 >= w || 48 <= w && 57 >= w || 58 == w || 46 == w || 95 == w || 45 == w)) {
                            if (k == c) throw new D(new qa("Expected attribute name",
                                a, c));
                            g = J.substr(a, k, c - k);
                            if (e.exists(g)) throw new D(new qa("Duplicate attribute [" + g + "]", a, c));
                            p = 0;
                            f = 6;
                            continue
                        }
                        break;
                    case 6:
                        if (61 == w) p = 0, f = 7;
                        else throw new D(new qa("Expected =", a, c));
                        break;
                    case 7:
                        switch (w) {
                            case 34:
                            case 39:
                                m = new nb;
                                p = 8;
                                k = c + 1;
                                s = w;
                                break;
                            default:
                                throw new D(new qa('Expected "', a, c));
                        }
                        break;
                    case 8:
                        switch (w) {
                            case 38:
                                l = c - k;
                                m.b += null == l ? J.substr(a, k, null) : J.substr(a, k, l);
                                p = 18;
                                l = 8;
                                k = c + 1;
                                break;
                            case 60:
                            case 62:
                                if (b) throw new D(new qa("Invalid unescaped " + String.fromCharCode(w) + " in attribute value",
                                    a, c));
                                w == s && (f = c - k, m.b += null == f ? J.substr(a, k, null) : J.substr(a, k, f), f = m.b, m = new nb, e.set(g, f), p = 0, f = 4);
                                break;
                            default:
                                w == s && (f = c - k, m.b += null == f ? J.substr(a, k, null) : J.substr(a, k, f), f = m.b, m = new nb, e.set(g, f), p = 0, f = 4)
                        }
                        break;
                    case 9:
                        k = c = Ab.doParse(a, b, c, e);
                        p = 1;
                        break;
                    case 10:
                        if (!(97 <= w && 122 >= w || 65 <= w && 90 >= w || 48 <= w && 57 >= w || 58 == w || 46 == w || 95 == w || 45 == w)) {
                            if (k == c) throw new D(new qa("Expected node name", a, c));
                            f = J.substr(a, k, c - k);
                            if (d.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + d.nodeType);
                            if (f != d.nodeName) {
                                if (d.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + d.nodeType);
                                throw new D(new qa("Expected </" + d.nodeName + ">", a, c));
                            }
                            p = 0;
                            f = 12;
                            continue
                        }
                        break;
                    case 11:
                        if (62 == w) p = 1;
                        else throw new D(new qa("Expected >", a, c));
                        break;
                    case 12:
                        if (62 == w) return 0 == I && d.addChild(B.createPCData("")), c;
                        throw new D(new qa("Expected >", a, c));
                    case 13:
                        60 == w ? (f = c - k, m.b += null == f ? J.substr(a, k, null) : J.substr(a, k, f), f = B.createPCData(m.b), m = new nb, d.addChild(f), ++I, p = 0, f = 2) : 38 == w && (l = c -
                            k, m.b += null == l ? J.substr(a, k, null) : J.substr(a, k, l), p = 18, l = 13, k = c + 1);
                        break;
                    case 14:
                        63 == w && 62 == a.charCodeAt(c + 1) && (++c, w = J.substr(a, k + 1, c - k - 2), d.addChild(B.createProcessingInstruction(w)), ++I, p = 1);
                        break;
                    case 15:
                        45 == w && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.addChild(B.createComment(J.substr(a, k, c - k))), ++I, c += 2, p = 1);
                        break;
                    case 16:
                        91 == w ? ++h : 93 == w ? --h : 62 == w && 0 == h && (d.addChild(B.createDocType(J.substr(a, k, c - k))), ++I, p = 1);
                        break;
                    case 17:
                        93 == w && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (w = B.createCData(J.substr(a,
                            k, c - k)), d.addChild(w), ++I, c += 2, p = 1);
                        break;
                    case 18:
                        if (59 == w) {
                            k = J.substr(a, k, c - k);
                            if (35 == k.charCodeAt(0)) k = 120 == k.charCodeAt(1) ? K.parseInt("0" + J.substr(k, 1, k.length - 1)) : K.parseInt(J.substr(k, 1, k.length - 1)), m.b += String.fromCharCode(k);
                            else if (w = Ab.escapes, null != O[k] ? w.existsReserved(k) : w.h.hasOwnProperty(k)) w = Ab.escapes, k = null != O[k] ? w.getReserved(k) : w.h[k], m.b += K.string(k);
                            else {
                                if (b) throw new D(new qa("Undefined entity: " + k, a, c));
                                m.b += K.string("&" + k + ";")
                            }
                            k = c + 1;
                            p = l
                        } else if (!(97 <= w && 122 >= w || 65 <= w && 90 >=
                                w || 48 <= w && 57 >= w || 58 == w || 46 == w || 95 == w || 45 == w) && 35 != w) {
                            if (b) throw new D(new qa("Invalid character in entity: " + String.fromCharCode(w), a, c));
                            m.b += "&";
                            w = c - k;
                            m.b += null == w ? J.substr(a, k, null) : J.substr(a, k, w);
                            k = c--;
                            p = l
                        }
                }
                w = a.charCodeAt(++c)
            }
            1 == p && (k = c, p = 13);
            if (13 == p) {
                if (c != k || 0 == I) b = c - k, m.b += null == b ? J.substr(a, k, null) : J.substr(a, k, b), d.addChild(B.createPCData(m.b));
                return c
            }
            if (!b && 18 == p && 13 == l) return m.b += "&", b = c - k, m.b += null == b ? J.substr(a, k, null) : J.substr(a, k, b), d.addChild(B.createPCData(m.b)), c;
            throw new D(new qa("Unexpected end",
                a, c));
        };
        var db = function(a) {
            this.output = new nb;
            this.pretty = a
        };
        s["haxe.xml.Printer"] = db;
        db.__name__ = ["haxe", "xml", "Printer"];
        db.print = function(a, b) {
            null == b && (b = !1);
            var c = new db(b);
            c.writeNode(a, "");
            return c.output.b
        };
        db.prototype = {
            writeNode: function(a, b) {
                switch (a.nodeType) {
                    case 0:
                        this.output.b += K.string(b + "<");
                        if (a.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + a.nodeType);
                        this.output.b += K.string(a.nodeName);
                        for (var c = a.attributes(); c.hasNext();) {
                            var d = c.next();
                            this.output.b +=
                                K.string(" " + d + '="');
                            d = ma.htmlEscape(a.get(d), !0);
                            this.output.b += K.string(d);
                            this.output.b += '"'
                        }
                        if (this.hasChildren(a)) {
                            this.output.b += ">";
                            this.pretty && (this.output.b += "\n");
                            if (a.nodeType != B.Document && a.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + a.nodeType);
                            for (c = J.iter(a.children); c.hasNext();) d = c.next(), this.writeNode(d, this.pretty ? b + "\t" : b);
                            this.output.b += K.string(b + "</");
                            if (a.nodeType != B.Element) throw new D("Bad node type, expected Element but found " +
                                a.nodeType);
                            this.output.b += K.string(a.nodeName);
                            this.output.b += ">"
                        } else this.output.b += "/>";
                        this.pretty && (this.output.b += "\n");
                        break;
                    case 1:
                        if (a.nodeType == B.Document || a.nodeType == B.Element) throw new D("Bad node type, unexpected " + a.nodeType);
                        c = a.nodeValue;
                        0 != c.length && (c = b + ma.htmlEscape(c), this.output.b += K.string(c), this.pretty && (this.output.b += "\n"));
                        break;
                    case 2:
                        this.output.b += K.string(b + "<![CDATA[");
                        if (a.nodeType == B.Document || a.nodeType == B.Element) throw new D("Bad node type, unexpected " + a.nodeType);
                        c = ma.trim(a.nodeValue);
                        this.output.b += K.string(c);
                        this.output.b += "]]\x3e";
                        this.pretty && (this.output.b += "\n");
                        break;
                    case 3:
                        if (a.nodeType == B.Document || a.nodeType == B.Element) throw new D("Bad node type, unexpected " + a.nodeType);
                        c = a.nodeValue;
                        c = c.replace(RegExp("[\n\r\t]+", "g"), "");
                        this.output.b += null == b ? "null" : "" + b;
                        c = ma.trim("\x3c!--" + c + "--\x3e");
                        this.output.b += K.string(c);
                        this.pretty && (this.output.b += "\n");
                        break;
                    case 4:
                        if (a.nodeType == B.Document || a.nodeType == B.Element) throw new D("Bad node type, unexpected " +
                            a.nodeType);
                        this.output.b += K.string("<!DOCTYPE " + a.nodeValue + ">");
                        this.pretty && (this.output.b += "\n");
                        break;
                    case 5:
                        if (a.nodeType == B.Document || a.nodeType == B.Element) throw new D("Bad node type, unexpected " + a.nodeType);
                        this.output.b += K.string("<?" + a.nodeValue + "?>");
                        this.pretty && (this.output.b += "\n");
                        break;
                    case 6:
                        if (a.nodeType != B.Document && a.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + a.nodeType);
                        for (c = J.iter(a.children); c.hasNext();) d = c.next(), this.writeNode(d,
                            b)
                }
            },
            hasChildren: function(a) {
                if (a.nodeType != B.Document && a.nodeType != B.Element) throw new D("Bad node type, expected Element or Document but found " + a.nodeType);
                for (a = J.iter(a.children); a.hasNext();) {
                    var b = a.next();
                    switch (b.nodeType) {
                        case 0:
                        case 1:
                            return !0;
                        case 2:
                        case 3:
                            if (b.nodeType == B.Document || b.nodeType == B.Element) throw new D("Bad node type, unexpected " + b.nodeType);
                            if (0 != ma.ltrim(b.nodeValue).length) return !0
                    }
                }
                return !1
            },
            __class__: db
        };
        var D = function(a) {
            Error.call(this);
            this.val = a;
            this.message = String(a);
            Error.captureStackTrace && Error.captureStackTrace(this, D)
        };
        s["js._Boot.HaxeError"] = D;
        D.__name__ = ["js", "_Boot", "HaxeError"];
        D.wrap = function(a) {
            return a instanceof Error ? a : new D(a)
        };
        D.__super__ = Error;
        D.prototype = R(Error.prototype, {
            __class__: D
        });
        var bd = function() {};
        s["js.Browser"] = bd;
        bd.__name__ = ["js", "Browser"];
        bd.getLocalStorage = function() {
            try {
                var a = window.localStorage;
                a.getItem("");
                return a
            } catch (b) {
                return null
            }
        };
        var Za = function(a) {
            if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
            else {
                this.a = [];
                for (var b = 0; b < a;) {
                    var c = b++;
                    this.a[c] = 0
                }
                this.byteLength = a
            }
        };
        s["js.html.compat.ArrayBuffer"] = Za;
        Za.__name__ = ["js", "html", "compat", "ArrayBuffer"];
        Za.sliceImpl = function(a, b) {
            var c = new hb(this, a, null == b ? null : b - a),
                d = new Nb(c.byteLength);
            (new hb(d)).set(c);
            return d
        };
        Za.prototype = {
            slice: function(a, b) {
                return new Za(this.a.slice(a, b))
            },
            __class__: Za
        };
        var Oc = function(a, b, c) {
            this.buf = a;
            this.offset = null == b ? 0 : b;
            this.length = null == c ? a.byteLength - this.offset : c;
            if (0 > this.offset || 0 > this.length || this.offset +
                this.length > a.byteLength) throw new D(Ka.OutsideBounds);
            this.byteLength = this.length;
            this.byteOffset = this.offset;
            this.buffer = this.buf
        };
        s["js.html.compat.DataView"] = Oc;
        Oc.__name__ = ["js", "html", "compat", "DataView"];
        Oc.prototype = {
            getInt8: function(a) {
                a = this.buf.a[this.offset + a];
                return 128 <= a ? a - 256 : a
            },
            getUint8: function(a) {
                return this.buf.a[this.offset + a]
            },
            getInt16: function(a, b) {
                var c = this.getUint16(a, b);
                return 32768 <= c ? c - 65536 : c
            },
            getUint16: function(a, b) {
                return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset +
                    a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1]
            },
            getInt32: function(a, b) {
                var c = this.offset + a,
                    d = this.buf.a[c++],
                    e = this.buf.a[c++],
                    f = this.buf.a[c++],
                    c = this.buf.a[c++];
                return b ? d | e << 8 | f << 16 | c << 24 : c | f << 8 | e << 16 | d << 24
            },
            getUint32: function(a, b) {
                var c = this.getInt32(a, b);
                return 0 > c ? c + 4294967296 : c
            },
            getFloat32: function(a, b) {
                return Ua.i32ToFloat(this.getInt32(a, b))
            },
            getFloat64: function(a, b) {
                var c = this.getInt32(a, b),
                    d = this.getInt32(a + 4, b);
                return Ua.i64ToDouble(b ? c : d, b ? d : c)
            },
            setInt8: function(a, b) {
                this.buf.a[a +
                    this.offset] = 0 > b ? b + 128 & 255 : b & 255
            },
            setUint8: function(a, b) {
                this.buf.a[a + this.offset] = b & 255
            },
            setInt16: function(a, b, c) {
                this.setUint16(a, 0 > b ? b + 65536 : b, c)
            },
            setUint16: function(a, b, c) {
                a += this.offset;
                c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 & 255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255)
            },
            setInt32: function(a, b, c) {
                this.setUint32(a, b, c)
            },
            setUint32: function(a, b, c) {
                a += this.offset;
                c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24,
                    this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255)
            },
            setFloat32: function(a, b, c) {
                this.setUint32(a, Ua.floatToI32(b), c)
            },
            setFloat64: function(a, b, c) {
                b = Ua.doubleToI64(b);
                c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a, b.low))
            },
            __class__: Oc
        };
        var pb = function() {};
        s["js.html.compat.Uint8Array"] = pb;
        pb.__name__ = ["js", "html", "compat", "Uint8Array"];
        pb._new = function(a, b, c) {
            if ("number" == typeof a) {
                c = [];
                for (b = 0; b < a;) {
                    var d = b++;
                    c[d] = 0
                }
                c.byteLength =
                    c.length;
                c.byteOffset = 0;
                c.buffer = new Za(c)
            } else if (S.__instanceof(a, Za)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
            else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new Za(c);
            else throw new D("TODO " + K.string(a));
            c.subarray = pb._subarray;
            c.set = pb._set;
            return c
        };
        pb._set = function(a, b) {
            if (S.__instanceof(a.buffer, Za)) {
                if (a.byteLength + b > this.byteLength) throw new D("set() outside of range");
                for (var c = 0, d = a.byteLength; c < d;) {
                    var e = c++;
                    this[e + b] = a[e]
                }
            } else if (a instanceof Array && null == a.__enum__) {
                if (a.length + b > this.byteLength) throw new D("set() outside of range");
                c = 0;
                for (d = a.length; c < d;) e = c++, this[e + b] = a[e]
            } else throw new D("TODO");
        };
        pb._subarray = function(a, b) {
            var c = pb._new(this.slice(a, b));
            c.byteOffset = a;
            return c
        };
        var Pc = function() {
            this.__enabled = !0;
            this.bitmapData = new X;
            this.font = new X;
            this.sound = new X
        };
        s["openfl.AssetCache"] = Pc;
        Pc.__name__ = ["openfl", "AssetCache"];
        Pc.prototype = {
            get_enabled: function() {
                return this.__enabled
            },
            __class__: Pc,
            __properties__: {
                get_enabled: "get_enabled"
            }
        };
        var la = function() {};
        s["openfl.Assets"] = la;
        la.__name__ = ["openfl", "Assets"];
        la.getBitmapData = function(a, b) {
            null == b && (b = !0);
            la.initialize();
            var c = null,
                d, e, f;
            b ? (d = la.cache, f = d.get_enabled()) : f = !1;
            f ? (f = d.bitmapData, f = null != O[a] ? f.existsReserved(a) : f.h.hasOwnProperty(a)) : f = !1;
            f ? (e = la.cache.bitmapData, e = null != O[a] ? e.getReserved(a) : e.h[a], f = !0) : f = !1;
            if (f) return e;
            f = a.indexOf(":");
            e = a.substring(0, f);
            f = a.substring(f + 1);
            e = la.getLibrary(e);
            null != e && e.exists(f,
                Y.IMAGE) && (c = e.getBitmapData(f), b ? d.get_enabled() && (d = d.bitmapData, null != O[a] ? d.setReserved(a, c) : d.h[a] = c) : c = c.clone());
            return c
        };
        la.getLibrary = function(a) {
            var b = la.libraries;
            a = null == a || "" == a ? "default" : a;
            return null != O[a] ? b.getReserved(a) : b.h[a]
        };
        la.initialize = function() {
            la.initialized || (la.registerLibrary("default", new Ub), la.initialized = !0)
        };
        la.registerLibrary = function(a, b) {
            var c = la.libraries;
            (null != O[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a)) && la.unloadLibrary(a);
            c = la.libraries;
            null != O[a] ? c.setReserved(a,
                b) : c.h[a] = b
        };
        la.unloadLibrary = function(a) {
            la.initialize();
            for (var b = la.cache.bitmapData.keys(); b.hasNext();) {
                var c = b.next();
                c.substring(0, c.indexOf(":")) == a && la.cache.bitmapData.remove(c)
            }
            la.libraries.remove(a)
        };
        var Y = s["openfl.AssetType"] = {
            __ename__: ["openfl", "AssetType"],
            __constructs__: "BINARY FONT IMAGE MOVIE_CLIP MUSIC SOUND TEMPLATE TEXT".split(" ")
        };
        Y.BINARY = ["BINARY", 0];
        Y.BINARY.toString = F;
        Y.BINARY.__enum__ = Y;
        Y.FONT = ["FONT", 1];
        Y.FONT.toString = F;
        Y.FONT.__enum__ = Y;
        Y.IMAGE = ["IMAGE", 2];
        Y.IMAGE.toString =
            F;
        Y.IMAGE.__enum__ = Y;
        Y.MOVIE_CLIP = ["MOVIE_CLIP", 3];
        Y.MOVIE_CLIP.toString = F;
        Y.MOVIE_CLIP.__enum__ = Y;
        Y.MUSIC = ["MUSIC", 4];
        Y.MUSIC.toString = F;
        Y.MUSIC.__enum__ = Y;
        Y.SOUND = ["SOUND", 5];
        Y.SOUND.toString = F;
        Y.SOUND.__enum__ = Y;
        Y.TEMPLATE = ["TEMPLATE", 6];
        Y.TEMPLATE.toString = F;
        Y.TEMPLATE.__enum__ = Y;
        Y.TEXT = ["TEXT", 7];
        Y.TEXT.toString = F;
        Y.TEXT.__enum__ = Y;
        var Sa = function(a, b, c) {
            Fa.call(this);
            this.set_bitmapData(a)
        };
        s["openfl.display.Bitmap"] = Sa;
        Sa.__name__ = ["openfl", "display", "Bitmap"];
        Sa.__interfaces__ = [Pa];
        Sa.__super__ =
            Fa;
        Sa.prototype = R(Fa.prototype, {
            set_bitmapData: function(a) {
                null != this.bitmapData && this.component.removeChild(this.bitmapData.component);
                null != a && this.component.appendChild(a.handle());
                return this.bitmapData = a
            },
            get_width: function() {
                return null != this.__width ? this.__width : null != this.bitmapData ? this.bitmapData.component.width : 0
            },
            get_height: function() {
                return null != this.__height ? this.__height : null != this.bitmapData ? this.bitmapData.component.height : 0
            },
            drawToSurface: function(a, b, c, d, e, f, r) {
                this.bitmapData.drawToSurface(a,
                    b, c, d, e, f, r)
            },
            hitTestLocal: function(a, b, c, d) {
                return (!d || this.visible) && null != this.bitmapData && 0 <= a && 0 <= b && a < this.bitmapData.component.width ? b < this.bitmapData.component.height : !1
            },
            __class__: Sa,
            __properties__: R(Fa.prototype.__properties__, {
                set_bitmapData: "set_bitmapData"
            })
        });
        var cd = function() {};
        s["openfl.display.IGraphics"] = cd;
        cd.__name__ = ["openfl", "display", "IGraphics"];
        cd.__interfaces__ = [Pa];
        var ub = function() {
            this.rgPending = !1;
            this.synced = !0;
            this.component = H.jsNode("canvas");
            this.context = this.component.getContext("2d",
                null);
            this.context.save();
            this.bounds = new pa;
            this.resetBounds();
            this.irec = [];
            this.frec = [];
            this.arec = [];
            this.lineWidth = this.ilen = this.flen = this.alen = 0
        };
        s["openfl.display.Graphics"] = ub;
        ub.__name__ = ["openfl", "display", "Graphics"];
        ub.__interfaces__ = [cd, Pa];
        ub.prototype = {
            regenerate: function() {
                var a = this.component,
                    b = this.component.style,
                    c = this.context,
                    d = this.bounds,
                    e = ~~(d.x - 2),
                    f = ~~(d.y - 2),
                    r = Math.ceil(d.width + 4),
                    g = Math.ceil(d.height + 4);
                this.synced = !0;
                this.rgPending = !1;
                if (0 >= d.width || 0 >= d.height) a.width =
                    a.height = 1, b.top = b.left = "0";
                else {
                    if (this.offsetX != e || this.offsetY != f) b.left = (this.offsetX = e) + "px", b.top = (this.offsetY = f) + "px";
                    r != a.width || g != a.height ? (a.width = r, a.height = g) : c.clearRect(0, 0, r, g);
                    c.save();
                    c.translate(-e, -f);
                    this.render(a, c);
                    c.restore()
                }
            },
            regenerateTask: function() {
                this.rgPending && this.regenerate()
            },
            requestRegeneration: function() {
                H.schedule(ea(this, this.regenerateTask));
                this.rgPending = !0
            },
            set_displayObject: function(a) {
                this.displayObject != a && (this.displayObject = a, this.synced || this.requestRegeneration());
                return a
            },
            resetBounds: function() {
                this.bounds.setVoid();
                this.invalidate()
            },
            grab: function(a, b, c, d) {
                var e = this.bounds.x;
                a < e && (e -= a, this.bounds.x -= e, this.bounds.width += e);
                e = this.bounds.y;
                b < e && (e -= b, this.bounds.y -= e, this.bounds.height += e);
                a = this.bounds;
                e = a.x + a.width;
                c > e && (this.bounds.width += c - e);
                c = this.bounds;
                e = c.y + c.height;
                d > e && (this.bounds.height += d - e);
                this.invalidate()
            },
            invalidate: function() {
                this.synced && (this.synced = !1, this.rgPending || null == this.displayObject || null == this.displayObject.get_stage() ||
                    this.requestRegeneration())
            },
            clear: function() {
                for (var a = 0; a < this.alen;) this.arec[a++] = null;
                this.lineWidth = this.ilen = this.flen = this.alen = 0;
                this.resetBounds();
                this.invalidate()
            },
            lineStyle: function(a, b, c, d, e, f, r, g) {
                this.irec[this.ilen++] = 1;
                this.frec[this.flen++] = this.lineWidth = 0 < a ? a : 0;
                0 < a && (a = H.rgbf(null != b ? b : 0, null != c ? c : 1), this.arec[this.alen++] = a, this.irec[this.ilen++] = "none" == f ? 2 : "square" == f ? 1 : 0, this.irec[this.ilen++] = "bevel" == r ? 2 : "miter" == r ? 1 : 0)
            },
            beginFill: function(a, b) {
                this.irec[this.ilen++] = 2;
                var c = H.rgbf(null != a ? a : 0, null != b ? b : 1);
                this.arec[this.alen++] = c
            },
            beginBitmapFill: function(a, b, c, d) {
                this.irec[this.ilen++] = 3;
                this.arec[this.alen++] = a;
                this.irec[this.ilen++] = !1 != c ? 1 : 0;
                a = null != b ? 1 : 0;
                if (this.irec[this.ilen++] = a) a = this.frec, c = this.flen, a[c++] = b.a, a[c++] = b.b, a[c++] = b.c, a[c++] = b.d, a[c++] = b.tx, a[c++] = b.ty, this.flen = c
            },
            endFill: function() {
                this.irec[this.ilen++] = 9;
                this.invalidate()
            },
            moveTo: function(a, b) {
                this.irec[this.ilen++] = 10;
                this.frec[this.flen++] = a;
                this.frec[this.flen++] = b;
                var c = this.lineWidth /
                    2;
                this.grab(a - c, b - c, a + c, b + c)
            },
            lineTo: function(a, b) {
                this.irec[this.ilen++] = 11;
                this.frec[this.flen++] = a;
                this.frec[this.flen++] = b;
                var c = this.lineWidth / 2;
                this.grab(a - c, b - c, a + c, b + c)
            },
            drawRect: function(a, b, c, d) {
                this.irec[this.ilen++] = 13;
                var e = this.frec,
                    f = this.flen;
                e[f++] = a;
                e[f++] = b;
                e[f++] = c;
                e[f++] = d;
                this.flen = f;
                e = this.lineWidth / 2;
                this.grab(a - e, b - e, a + c + e, b + d + e)
            },
            drawCircle: function(a, b, c) {
                this.irec[this.ilen++] = 14;
                var d = this.frec,
                    e = this.flen;
                d[e++] = a;
                d[e++] = b;
                d[e++] = c;
                this.flen = e;
                c += this.lineWidth / 2;
                this.grab(a -
                    c, b - c, a + c, b + c)
            },
            drawToSurface: function(a, b, c, d, e, f, r) {
                b.save();
                null != c && b.transform(c.a, c.b, c.c, c.d, c.tx, c.ty);
                this.render(a, b);
                b.restore()
            },
            hitTestLocal: function(a, b, c) {
                if (this.bounds.contains(a, b)) {
                    if (c) {
                        this.synced || this.regenerate();
                        try {
                            return 0 != this.context.getImageData(a - this.offsetX, b - this.offsetY, 1, 1).data[3]
                        } catch (d) {}
                    }
                    return !0
                }
                return !1
            },
            _closePath: function(a, b, c, d, e) {
                c & 1 && (b.closePath(), c & 4 ? (b.save(), b.transform(d.a, d.b, d.c, d.d, d.tx, d.ty), b.fillStyle = b.createPattern(e, c & 8 ? "repeat" : "no-repeat"),
                    b.fill(), b.restore()) : b.fill());
                c & 2 && b.stroke();
                b.beginPath();
                return c
            },
            render: function(a, b) {
                var c = 0,
                    d = this._drawMatrix,
                    e, f, r, g = 0,
                    k = null,
                    h = this.irec,
                    m = -1,
                    w = this.ilen - 1,
                    l = this.arec,
                    s = -1,
                    n = this.frec,
                    q = -1;
                null == d && (this._drawMatrix = d = new na);
                b.save();
                try {
                    for (; m < w;) switch (f = h[++m], f) {
                        case 0:
                            throw "__break__";
                        case 1:
                            0 < g && (c = this._closePath(a, b, c, d, k));
                            r = n[++q];
                            b.lineWidth = r;
                            0 < r ? (c |= 2, b.strokeStyle = l[++s], f = h[++m], b.lineCap = 2 == f ? "butt" : 1 == f ? "square" : "round", f = h[++m], b.lineJoin = 2 == f ? "bevel" : 1 == f ? "miter" :
                                "round") : (c &= -3, b.strokeStyle = null);
                            break;
                        case 2:
                        case 3:
                        case 4:
                            0 < g && (c = this._closePath(a, b, c, d, k));
                            c |= 1;
                            3 == f ? (k = l[++s].handle(), f = h[++m], 0 != h[++m] ? (c = 0 != f ? c | 8 : c & -9, d.a = n[++q], d.b = n[++q], d.c = n[++q], d.d = n[++q], d.tx = n[++q], d.ty = n[++q], c |= 4) : (b.fillStyle = b.createPattern(k, 0 != f ? "repeat" : "no-repeat"), c &= -5)) : (b.fillStyle = l[++s], c &= -5);
                            g = 0;
                            break;
                        case 9:
                            0 < g && (c = this._closePath(a, b, c, d, k), g = 0);
                            c &= -2;
                            break;
                        case 10:
                            b.moveTo(n[++q], n[++q]);
                            ++g;
                            break;
                        case 11:
                            b.lineTo(n[++q], n[++q]);
                            ++g;
                            break;
                        case 12:
                            b.quadraticCurveTo(n[++q],
                                n[++q], n[++q], n[++q]);
                            ++g;
                            break;
                        case 13:
                            b.rect(n[++q], n[++q], n[++q], n[++q]);
                            ++g;
                            break;
                        case 14:
                            var v = n[++q],
                                x = n[++q],
                                u = n[++q];
                            0 > u && (u = -u);
                            b.moveTo(v + u, x);
                            0 != u && b.arc(v, x, u, 0, 2 * Math.PI, !0);
                            ++g;
                            break;
                        case 15:
                            var t = n[++q],
                                y = n[++q],
                                A = n[++q],
                                z = n[++q],
                                B = n[++q],
                                E = n[++q];
                            null == E ? (b.moveTo(t + B, y + z), b.arcTo(t + A - B, y + z - B, t + A, y + z - B, B), b.arcTo(t + A, y + B, t + A - B, y, B), b.arcTo(t + B, y, t, y + B, B), b.arcTo(t + B, y + z - B, t + B, y + z, B)) : (b.moveTo(t + B, y + z), b.lineTo(t + A - B, y + z), b.quadraticCurveTo(t + A, y + z, t + A, y + z - E), b.lineTo(t + A, y + E), b.quadraticCurveTo(t +
                                A, y, t + A - B, y), b.lineTo(t + B, y), b.quadraticCurveTo(t, y, t, y + E), b.lineTo(t, y + z - E), b.quadraticCurveTo(t, y + z, t + B, y + z));
                            ++g;
                            break;
                        case 16:
                            var F = l[++s].handle(),
                                C = h[++m],
                                G = 0 != (C & 1),
                                H = 0 != (C & 2),
                                J = 0 != (C & 8),
                                K = 0 != (C & 16),
                                L = h[++m],
                                M, Q, O, T, W, N, P, R;
                            b.save();
                            for (b.globalCompositeOperation = 0 != (C & 65536) ? "lighter" : "source-over"; 0 <= --L;) M = n[++q], Q = n[++q], O = n[++q], T = n[++q], W = n[++q], N = n[++q], P = n[++q], R = n[++q], b.save(), K ? b.transform(n[++q], n[++q], n[++q], n[++q], M, Q) : (b.translate(M, Q), G && (e = n[++q], b.scale(e, e)), H && b.rotate(n[++q])),
                                J && (b.globalAlpha = n[++q]), b.drawImage(F, W, N, P, R, -O, -T, P, R), b.restore();
                            b.restore();
                            break;
                        case 17:
                            var S = n[++q],
                                aa = n[++q],
                                ca = n[++q],
                                Y = n[++q],
                                G = S + ca / 2,
                                H = aa + Y / 2,
                                J = S + ca,
                                K = aa + Y,
                                Z = 0.275892 * ca,
                                da = 0.275892 * Y;
                            b.moveTo(G, aa);
                            b.bezierCurveTo(G + Z, aa, J, H - da, J, H);
                            b.bezierCurveTo(J, H + da, G + Z, K, G, K);
                            b.bezierCurveTo(G - Z, K, S, H + da, S, H);
                            b.bezierCurveTo(S, H - da, G - Z, aa, G, aa);
                            ++g;
                            break;
                        default:
                            throw new D(4E3 + f);
                    }
                } catch (X) {
                    if ("__break__" != X) throw X;
                }
                0 < g && this._closePath(a, b, c, d, k);
                b.restore()
            },
            __class__: ub,
            __properties__: {
                set_displayObject: "set_displayObject"
            }
        };
        var Xa = s["openfl.display.PixelSnapping"] = {
            __ename__: ["openfl", "display", "PixelSnapping"],
            __constructs__: ["ALWAYS", "AUTO", "NEVER"]
        };
        Xa.ALWAYS = ["ALWAYS", 0];
        Xa.ALWAYS.toString = F;
        Xa.ALWAYS.__enum__ = Xa;
        Xa.AUTO = ["AUTO", 1];
        Xa.AUTO.toString = F;
        Xa.AUTO.__enum__ = Xa;
        Xa.NEVER = ["NEVER", 2];
        Xa.NEVER.toString = F;
        Xa.NEVER.__enum__ = Xa;
        var gb = function() {
            (this.graphics = new ub).set_displayObject(this);
            this.component = this.graphics.component;
            Fa.call(this)
        };
        s["openfl.display.Shape"] = gb;
        gb.__name__ = ["openfl", "display", "Shape"];
        gb.__interfaces__ = [Pa];
        gb.__super__ = Fa;
        gb.prototype = R(Fa.prototype, {
            drawToSurface: function(a, b, c, d, e, f, r) {
                this.graphics.drawToSurface(a, b, c, d, e, f, r)
            },
            set_stage: function(a) {
                var b = null == this.get_stage() && null != a;
                a = Fa.prototype.set_stage.call(this, a);
                b && this.graphics.invalidate();
                return a
            },
            hitTestLocal: function(a, b, c, d) {
                return !d || this.visible ? this.graphics.hitTestLocal(a, b, c) : !1
            },
            __class__: gb
        });
        var Bc = function(a) {
            this.nmeBitmap = a;
            this.qOffsets = [];
            this.qRects = [];
            this.bounds = new pa;
            this.tile = new pa;
            this.matrix =
                new na
        };
        s["openfl.display.Tilesheet"] = Bc;
        Bc.__name__ = ["openfl", "display", "Tilesheet"];
        Bc.prototype = {
            addTileRect: function(a, b) {
                null == b && (b = new xa);
                this.qRects.push(a);
                this.qOffsets.push(b);
                return this.qRects.length - 1
            },
            __class__: Bc
        };
        var Bb = function(a, b) {
            null == b && (b = 0);
            null == a && (a = "");
            this.message = a;
            this.errorID = b
        };
        s["openfl.errors.Error"] = Bb;
        Bb.__name__ = ["openfl", "errors", "Error"];
        Bb.prototype = {
            toString: function() {
                return null != this.message ? this.message : "Error"
            },
            __class__: Bb
        };
        var fa = function(a, b, c) {
            null ==
                c && (c = !1);
            null == b && (b = !1);
            this.type = a;
            this.bubbles = b;
            this.cancelable = c
        };
        s["openfl.events.Event"] = fa;
        fa.__name__ = ["openfl", "events", "Event"];
        fa.prototype = {
            get_target: function() {
                return this._target || this.target
            },
            set_target: function(a) {
                return this._target = a
            },
            set_currentTarget: function(a) {
                return this._current = a
            },
            __class__: fa,
            __properties__: {
                set_currentTarget: "set_currentTarget",
                set_target: "set_target",
                get_target: "get_target"
            }
        };
        var Ob = function(a, b, c, d) {
            null == d && (d = "");
            null == c && (c = !1);
            null == b && (b = !1);
            fa.call(this,
                a, b, c);
            this.text = d
        };
        s["openfl.events.TextEvent"] = Ob;
        Ob.__name__ = ["openfl", "events", "TextEvent"];
        Ob.__super__ = fa;
        Ob.prototype = R(fa.prototype, {
            __class__: Ob
        });
        var Cb = function(a, b, c, d) {
            Ob.call(this, a, b, c);
            this.text = d
        };
        s["openfl.events.ErrorEvent"] = Cb;
        Cb.__name__ = ["openfl", "events", "ErrorEvent"];
        Cb.__super__ = Ob;
        Cb.prototype = R(Ob.prototype, {
            __class__: Cb
        });
        var qb = function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            this.status = d;
            fa.call(this, a, b, c)
        };
        s["openfl.events.HTTPStatusEvent"] = qb;
        qb.__name__ = ["openfl", "events", "HTTPStatusEvent"];
        qb.__super__ = fa;
        qb.prototype = R(fa.prototype, {
            __class__: qb
        });
        var ec = function(a, b, c, d) {
            null == d && (d = "");
            null == c && (c = !1);
            null == b && (b = !1);
            fa.call(this, a, b, c);
            this.text = d
        };
        s["openfl.events.IOErrorEvent"] = ec;
        ec.__name__ = ["openfl", "events", "IOErrorEvent"];
        ec.__super__ = fa;
        ec.prototype = R(fa.prototype, {
            __class__: ec
        });
        var Qc = function(a, b, c, d, e) {
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !0);
            fa.call(this, a, b, c);
            this.keyCode = e;
            this.charCode = d
        };
        s["openfl.events.KeyboardEvent"] =
            Qc;
        Qc.__name__ = ["openfl", "events", "KeyboardEvent"];
        Qc.__super__ = fa;
        Qc.prototype = R(fa.prototype, {
            __class__: Qc
        });
        var rb = function(a, b, c) {
            fa.call(this, a, b, c)
        };
        s["openfl.events.UIEvent"] = rb;
        rb.__name__ = ["openfl", "events", "UIEvent"];
        rb.__super__ = fa;
        rb.prototype = R(fa.prototype, {
            __class__: rb
        });
        var fb = function(a, b, c, d, e, f, r, g, k, h, m) {
            fa.call(this, a, null != b ? b : !0, null != c && c);
            this.ctrlKey = null != r && r;
            this.altKey = null != g && g;
            this.shiftKey = null != k && k;
            this.relatedObject = f;
            this.buttonDown = null != h && h;
            this.delta = null !=
                m ? m : 0
        };
        s["openfl.events.MouseEvent"] = fb;
        fb.__name__ = ["openfl", "events", "MouseEvent"];
        fb.__super__ = rb;
        fb.prototype = R(rb.prototype, {
            __class__: fb
        });
        var Yb = function(a, b, c, d, e) {
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            fa.call(this, a, b, c);
            this.bytesLoaded = d;
            this.bytesTotal = e
        };
        s["openfl.events.ProgressEvent"] = Yb;
        Yb.__name__ = ["openfl", "events", "ProgressEvent"];
        Yb.__super__ = fa;
        Yb.prototype = R(fa.prototype, {
            __class__: Yb
        });
        var Pb = function(a, b, c, d) {
            null == d && (d = "");
            null == c && (c = !1);
            null == b &&
                (b = !1);
            Cb.call(this, a, b, c);
            this.text = d
        };
        s["openfl.events.SecurityErrorEvent"] = Pb;
        Pb.__name__ = ["openfl", "events", "SecurityErrorEvent"];
        Pb.__super__ = Cb;
        Pb.prototype = R(Cb.prototype, {
            __class__: Pb
        });
        var lc = function(a, b, c, d, e, f, r, g, k, h, m, w, l, n) {
            fa.call(this, a, b, c);
            this.altKey = l;
            this.shiftKey = n;
            this.ctrlKey = w;
            this.touchPointID = d;
            this.sizeX = g;
            this.sizeY = k;
            this.pressure = h
        };
        s["openfl.events.TouchEvent"] = lc;
        lc.__name__ = ["openfl", "events", "TouchEvent"];
        lc.__super__ = rb;
        lc.prototype = R(rb.prototype, {
            __class__: lc
        });
        var rd = function() {};
        s["openfl.filters.BitmapFilter"] = rd;
        rd.__name__ = ["openfl", "filters", "BitmapFilter"];
        var sb = function(a, b) {
            this.eventList = new X;
            null != a && this.load(a, b)
        };
        s["openfl.media.Sound"] = sb;
        sb.__name__ = ["openfl", "media", "Sound"];
        sb.__super__ = ta;
        sb.prototype = R(ta.prototype, {
            load: function(a, b) {
                var c = a.url,
                    d = sb.library;
                if (null != d && (null != O[c] ? d.existsReserved(c) : d.h.hasOwnProperty(c))) {
                    this.component = null != O[c] ? d.getReserved(c) : d.h[c];
                    var d = sb.library,
                        e = this.component.cloneNode(!0);
                    null != O[c] ?
                        d.setReserved(c, e) : d.h[c] = e
                } else this.component = new u(c);
                this.qCache = []
            },
            __class__: sb
        });
        var Rc = function() {
            this.eventList = new X
        };
        s["openfl.media.SoundChannel"] = Rc;
        Rc.__name__ = ["openfl", "media", "SoundChannel"];
        Rc.__super__ = ta;
        Rc.prototype = R(ta.prototype, {
            __class__: Rc
        });
        var sd = function() {};
        s["openfl.media.SoundLoaderContext"] = sd;
        sd.__name__ = ["openfl", "media", "SoundLoaderContext"];
        var gc = function() {};
        s["openfl.net.IURLLoader"] = gc;
        gc.__name__ = ["openfl", "net", "IURLLoader"];
        gc.__interfaces__ = [Sb];
        gc.prototype = {
            __class__: gc
        };
        var ya = function() {
            this.eventList = new X
        };
        s["openfl.net.SharedObject"] = ya;
        ya.__name__ = ["openfl", "net", "SharedObject"];
        ya.getLocal = function(a, b, c) {
            null == b && (b = window.location.href);
            c = new ya;
            c.nmeKey = b + ":" + a;
            a = null;
            try {
                a = ya.nmeGetLocalStorage().getItem(c.nmeKey)
            } catch (d) {}
            c.data = {};
            null != a && "" != a && (a = new Qa(a), a.setResolver({
                resolveEnum: U.resolveEnum,
                resolveClass: ya.resolveClass
            }), c.data = a.unserialize());
            null == c.data && (c.data = {});
            return c
        };
        ya.nmeGetLocalStorage = function() {
            var a = bd.getLocalStorage();
            if (null == a) throw new D(new Bb("SharedObject not supported"));
            return a
        };
        ya.resolveClass = function(a) {
            return null != a ? U.resolveClass(ma.replace(ma.replace(a, "jeash.", "openfl."), "browser.", "openfl.")) : null
        };
        ya.__super__ = ta;
        ya.prototype = R(ta.prototype, {
            flush: function() {
                var a = Ia.run(this.data);
                try {
                    ya.nmeGetLocalStorage().removeItem(this.nmeKey), ya.nmeGetLocalStorage().setItem(this.nmeKey, a)
                } catch (b) {
                    return eb.PENDING
                }
                return eb.FLUSHED
            },
            __class__: ya
        });
        var eb = s["openfl.net.SharedObjectFlushStatus"] = {
            __ename__: ["openfl",
                "net", "SharedObjectFlushStatus"
            ],
            __constructs__: ["FLUSHED", "PENDING"]
        };
        eb.FLUSHED = ["FLUSHED", 0];
        eb.FLUSHED.toString = F;
        eb.FLUSHED.__enum__ = eb;
        eb.PENDING = ["PENDING", 1];
        eb.PENDING.toString = F;
        eb.PENDING.__enum__ = eb;
        var Zb = function(a) {
            this.eventList = new X;
            this.bytesLoaded = this.bytesTotal = 0;
            this.set_dataFormat(1);
            null != a && this.load(a)
        };
        s["openfl.net.URLLoader"] = Zb;
        Zb.__name__ = ["openfl", "net", "URLLoader"];
        Zb.__interfaces__ = [gc];
        Zb.__super__ = ta;
        Zb.prototype = R(ta.prototype, {
            set_dataFormat: function(a) {
                return this.dataFormat =
                    0 == a && null == window.ArrayBuffer ? 1 : a
            },
            getData: function() {
                return null
            },
            load: function(a) {
                this.requestUrl(a.url, a.method, a.data, a.formatRequestHeaders())
            },
            registerEvents: function(a) {
                var b = this;
                "undefined" != typeof XMLHttpRequestProgressEvent && a.addEventListener("progress", ea(this, this.onProgress), !1);
                a.onreadystatechange = function() {
                    if (4 == a.readyState) {
                        var c;
                        try {
                            c = a.status
                        } catch (d) {
                            c = null
                        }
                        if (null != c) b.onStatus(c);
                        if (null == c) b.onError("Failed to connect or resolve host");
                        else if (200 <= c && 400 > c) b.onData(a.response);
                        else if (12029 == c) b.onError("Failed to connect to host");
                        else if (12007 == c) b.onError("Unknown host");
                        else if (0 == c) b.onError("Unable to make request (may be blocked due to cross-domain permissions)"), b.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
                        else b.onError("Http Error #" + a.status)
                    }
                }
            },
            requestUrl: function(a, b, c, d) {
                var e = new XMLHttpRequest;
                this.getData = function() {
                    return null != e.response ? e.response : e.responseText
                };
                this.registerEvents(e);
                var f = "";
                if (S.__instanceof(c,
                        zb)) f = 0 == this.dataFormat ? c.data.buffer : c.readUTFBytes(c.length);
                else if (S.__instanceof(c, ld))
                    for (var r = 0, g = Z.fields(c); r < g.length;) {
                        var k = g[r];
                        ++r;
                        0 != f.length && (f += "&");
                        var h = encodeURIComponent(k) + "=",
                            k = Z.field(c, k),
                            f = f + (h + encodeURIComponent(k))
                    } else null != c && (f = c.toString());
                try {
                    if ("GET" == b && null != f && "" != f) {
                        var m = 1 >= a.split("?").length;
                        e.open(b, a + (m ? "?" : "&") + K.string(f), !0);
                        f = ""
                    } else e.open(b, a, !0)
                } catch (w) {
                    w instanceof D && (w = w.val);
                    this.onError(w.toString());
                    return
                }
                0 == this.dataFormat && (e.responseType =
                    "arraybuffer");
                for (a = 0; a < d.length;) b = d[a], ++a, e.setRequestHeader(b.name, b.value);
                e.send(f);
                this.onOpen()
            },
            onData: function(a) {
                a = a ? a : this.getData();
                this.data = 0 == this.dataFormat ? zb.nmeOfBuffer(a) : K.string(a);
                a = new fa("complete");
                a.set_currentTarget(this);
                this.dispatchEvent(a)
            },
            onError: function(a) {
                var b = new ec("ioError");
                b.text = a;
                b.set_currentTarget(this);
                this.dispatchEvent(b)
            },
            onOpen: function() {
                var a = new fa("open");
                a.set_currentTarget(this);
                this.dispatchEvent(a)
            },
            onProgress: function(a) {
                var b = new Yb("progress");
                b.set_currentTarget(this);
                b.bytesLoaded = a.loaded;
                b.bytesTotal = a.total;
                this.dispatchEvent(b)
            },
            onSecurityError: function(a) {
                var b = new Pb("securityError");
                b.text = a;
                b.set_currentTarget(this);
                this.dispatchEvent(b)
            },
            onStatus: function(a) {
                a = new qb("httpStatus", !1, !1, a);
                a.set_currentTarget(this);
                this.dispatchEvent(a)
            },
            __class__: Zb,
            __properties__: {
                set_dataFormat: "set_dataFormat"
            }
        });
        var uc = function(a, b) {
            null == b && (b = "");
            null == a && (a = "");
            this.name = a;
            this.value = b
        };
        s["openfl.net.URLRequestHeader"] = uc;
        uc.__name__ = ["openfl", "net", "URLRequestHeader"];
        uc.prototype = {
            __class__: uc
        };
        var ld = function() {};
        s["openfl.net.URLVariables"] = ld;
        ld.__name__ = ["openfl", "net", "URLVariables"];
        var td = function() {};
        s["openfl.text.Font"] = td;
        td.__name__ = ["openfl", "text", "Font"];
        var kd = function() {};
        s["openfl.ui.Multitouch"] = kd;
        kd.__name__ = ["openfl", "ui", "Multitouch"];
        var Ta = s["openfl.ui.MultitouchInputMode"] = {
            __ename__: ["openfl", "ui", "MultitouchInputMode"],
            __constructs__: ["GESTURE", "NONE", "TOUCH_POINT"]
        };
        Ta.GESTURE = ["GESTURE", 0];
        Ta.GESTURE.toString =
            F;
        Ta.GESTURE.__enum__ = Ta;
        Ta.NONE = ["NONE", 1];
        Ta.NONE.toString = F;
        Ta.NONE.__enum__ = Ta;
        Ta.TOUCH_POINT = ["TOUCH_POINT", 2];
        Ta.TOUCH_POINT.toString = F;
        Ta.TOUCH_POINT.__enum__ = Ta;
        var zb = function() {
            this.length = 0;
            this._nmeResizeBuffer(this.allocated = this.position = 0)
        };
        s["openfl.utils.ByteArray"] = zb;
        zb.__name__ = ["openfl", "utils", "ByteArray"];
        zb.fromBytes = function(a) {
            var b = new zb;
            b.byteView = new hb(a.b.bufferValue);
            b.set_length(b.byteView.length);
            b.allocated = b.length;
            return b
        };
        zb.nmeOfBuffer = function(a) {
            var b = new zb;
            b.set_length(b.allocated = a.byteLength);
            b.data = new ud(a);
            b.byteView = new hb(a);
            return b
        };
        zb.prototype = {
            _nmeResizeBuffer: function(a) {
                var b = this.byteView,
                    c = new hb(a);
                null != b && (b.length <= a ? c.set(b) : c.set(b.subarray(0, a)));
                this.byteView = c;
                this.data = new ud(c.buffer)
            },
            readUTFBytes: function(a) {
                var b = "";
                for (a = this.position + a; this.position < a;) {
                    var c = this.data.getUint8(this.position++);
                    if (128 > c) {
                        if (0 == c) break;
                        b += String.fromCharCode(c)
                    } else if (224 > c) b += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) &
                        127);
                    else if (240 > c) var d = this.data.getUint8(this.position++),
                        b = b + String.fromCharCode((c & 31) << 12 | (d & 127) << 6 | this.data.getUint8(this.position++) & 127);
                    else var d = this.data.getUint8(this.position++),
                        e = this.data.getUint8(this.position++),
                        b = b + String.fromCharCode((c & 15) << 18 | (d & 127) << 12 | e << 6 & 127 | this.data.getUint8(this.position++) & 127)
                }
                return b
            },
            set_length: function(a) {
                this.allocated < a ? this._nmeResizeBuffer(this.allocated = Math.max(a, 2 * this.allocated) | 0) : this.allocated > a && this._nmeResizeBuffer(this.allocated =
                    a);
                return this.length = a
            },
            __class__: zb,
            __properties__: {
                set_length: "set_length"
            }
        };
        var dd = function() {};
        s["haxe.lang.Iterator"] = dd;
        dd.__name__ = ["haxe", "lang", "Iterator"];
        dd.prototype = {
            __class__: dd
        };
        var ed = function() {};
        s["haxe.lang.Iterable"] = ed;
        ed.__name__ = ["haxe", "lang", "Iterable"];
        ed.prototype = {
            __class__: ed
        };
        var fd = function() {
            this.time = 0;
            this.frameRate = l.FPS;
            this.isLooping = !1;
            this.doc = null;
            this.frameRate = l.FPS;
            this.time = 0
        };
        s["oz.Animation2D"] = fd;
        fd.__name__ = ["oz", "Animation2D"];
        fd.prototype = {
            Update: function(a) {
                null ==
                    a && (a = -1); - 0.5 > a && (a = 1 / l.FPS);
                var b = Math.floor(this.time * this.frameRate + 1E-4);
                b >= this.frames && (b = this.isLooping ? b % this.frames : this.frames - 1);
                for (var c = 0, d = this.elements.length; c < d;) {
                    var e = c++;
                    this.elements[e].Update(this.doc.getChild(this.elements[e].name), b)
                }
                this.time += a
            },
            __class__: fd
        };
        var hc = function() {};
        s["oz.Easing"] = hc;
        hc.__name__ = ["oz", "Easing"];
        hc.prototype = {
            __class__: hc
        };
        var Qb = function() {};
        s["oz.LinearEaseNone"] = Qb;
        Qb.__name__ = ["oz", "LinearEaseNone"];
        Qb.__interfaces__ = [hc];
        Qb.prototype = {
            calculate: function(a) {
                return a
            },
            __class__: Qb
        };
        var mc = function() {};
        s["oz.QuadEaseIn"] = mc;
        mc.__name__ = ["oz", "QuadEaseIn"];
        mc.__interfaces__ = [hc];
        mc.prototype = {
            calculate: function(a) {
                return a * a
            },
            __class__: mc
        };
        var Ec = function() {};
        s["oz.QuadEaseOut"] = Ec;
        Ec.__name__ = ["oz", "QuadEaseOut"];
        Ec.__interfaces__ = [hc];
        Ec.prototype = {
            calculate: function(a) {
                return -a * (a - 2)
            },
            __class__: Ec
        };
        var Ca = function() {};
        s["oz.Ease"] = Ca;
        Ca.__name__ = ["oz", "Ease"];
        var gd = function(a, b, c, d, e, f, r, g, k, h, m, w, l) {
            this.name = this.mcName = null;
            this.keyframes = [];
            this.mcName = b;
            this.name = c;
            this.x = d;
            this.y = e;
            this.scaleX = f;
            this.scaleY = r;
            this.rotation = g;
            this.r = k;
            this.g = h;
            this.b = m;
            this.a = w
        };
        s["oz.Element2D"] = gd;
        gd.__name__ = ["oz", "Element2D"];
        gd.prototype = {
            Update: function(a, b) {
                for (var c = null, d = null, e = 0, f = this.keyframes.length; e < f;) {
                    var r = e++,
                        r = this.keyframes[r];
                    r.frame <= b && (c = r);
                    r.frame > b && null == d && (d = r)
                }
                null == d ? (d = c, e = 1) : e = (b - c.frame) / (d.frame - c.frame);
                f = c.y + e * (d.y - c.y);
                a.set_x(c.x + e * (d.x - c.x));
                a.set_y(f);
                a.set_scaleX(c.scaleX + e * (d.scaleX - c.scaleX));
                a.set_scaleY(c.scaleY + e *
                    (d.scaleY - c.scaleY));
                f = c.rotation;
                for (r = d.rotation; 0 > f;) f += 360;
                for (; 0 > r;) r += 360;
                var g = r - 360;
                Math.abs(r - f) > Math.abs(g - f) && (r = g);
                g = r + 360;
                Math.abs(r - f) > Math.abs(g - f) && (r = g);
                a.set_rotation(f + e * (r - f));
                a.set_alpha(c.a + e * (d.a - c.a))
            },
            __class__: gd
        };
        var hd = function(a, b, c, d, e, f, r, g, k, h) {
            this.frame = a;
            this.x = b;
            this.y = c;
            this.scaleX = d;
            this.scaleY = e;
            this.rotation = f;
            this.r = r;
            this.g = g;
            this.b = k;
            this.a = h
        };
        s["oz.Keyframe2D"] = hd;
        hd.__name__ = ["oz", "Keyframe2D"];
        hd.prototype = {
            __class__: hd
        };
        var Hb = function(a, b) {
            null == b &&
                (b = 1);
            this.target = a;
            this.type = b
        };
        s["oz.OzEvent"] = Hb;
        Hb.__name__ = ["oz", "OzEvent"];
        Hb.prototype = {
            txy: function(a, b, c) {
                this.target = a;
                this.eventX = b;
                this.eventY = c;
                return this
            },
            __class__: Hb
        };
        var Jc = function() {
            this.defaultKern = 0;
            this.chars = [];
            this.kernings = [];
            this.registered = !1
        };
        s["oz.OzFont"] = Jc;
        Jc.__name__ = ["oz", "OzFont"];
        Jc.prototype = {
            RegisterCharacters: function() {
                if (!this.registered) {
                    this.registered = !0;
                    this.frames = [];
                    this.movieClips = [];
                    for (var a = 0, b = 0, c = this.chars.length; b < c;) {
                        var d = b++;
                        null != this.chars[d] &&
                            32 != d && (this.frames.push([this.chars[d].x, this.chars[d].y, this.chars[d].width, this.chars[d].height, 0, 0]), this.movieClips.push(new M("_f" + this.face + "-" + this.chars[d].letter, [a], -1)), this.chars[d].movieClip = this.movieClips[this.movieClips.length - 1], ++a)
                    }
                    f.RegisterTilesheet(this.bitmapName, this.movieClips, this.frames);
                    this.tilesheetId = this.movieClips[0].tilesheetId
                }
            },
            __class__: Jc
        };
        var T = function() {
            this.identity()
        };
        s["oz.OzMatrix"] = T;
        T.__name__ = ["oz", "OzMatrix"];
        T.getCurrentMatrix = function() {
            return T.matrixStack[T.matrixId]
        };
        T.InitPool = function() {
            T.matrixStack = [];
            for (var a = 0; 200 > a;) {
                var b = a++;
                T.matrixStack[b] = new T
            }
            T.matrixId = 0;
            T.DEG2RAD = Math.PI / 180;
            T.RAD2DEG = 180 / Math.PI;
            T.um = new T
        };
        T.PushMatrix = function() {
            T.matrixStack[T.matrixId + 1].copy(T.matrixStack[T.matrixId]);
            T.matrixId++
        };
        T.PopMatrix = function() {
            T.matrixId--
        };
        T.getTemp = function(a) {
            return T.matrixStack[T.matrixId + a]
        };
        T.Multiply = function(a, b, c) {
            var d = b.m00 * c.m01 + b.m01 * c.m11 + b.m02 * c.m21,
                e = b.m00 * c.m02 + b.m01 * c.m12 + b.m02 * c.m22,
                f = b.m10 * c.m00 + b.m11 * c.m10 + b.m12 * c.m20,
                r =
                b.m10 * c.m01 + b.m11 * c.m11 + b.m12 * c.m21,
                g = b.m10 * c.m02 + b.m11 * c.m12 + b.m12 * c.m22,
                k = b.m20 * c.m00 + b.m21 * c.m10 + b.m22 * c.m20,
                h = b.m20 * c.m01 + b.m21 * c.m11 + b.m22 * c.m21,
                m = b.m20 * c.m02 + b.m21 * c.m12 + b.m22 * c.m22;
            a.m00 = b.m00 * c.m00 + b.m01 * c.m10 + b.m02 * c.m20;
            a.m01 = d;
            a.m02 = e;
            a.m10 = f;
            a.m11 = r;
            a.m12 = g;
            a.m20 = k;
            a.m21 = h;
            a.m22 = m;
            a.transformed = !0
        };
        T.prototype = {
            identity: function() {
                this.m00 = 1;
                this.m10 = this.m02 = this.m01 = 0;
                this.m11 = 1;
                this.m21 = this.m20 = this.m12 = 0;
                this.m22 = 1;
                this.transformed = !1
            },
            copy: function(a) {
                this.m00 = a.m00;
                this.m01 = a.m01;
                this.m02 = a.m02;
                this.m10 = a.m10;
                this.m11 = a.m11;
                this.m12 = a.m12;
                this.m20 = a.m20;
                this.m21 = a.m21;
                this.m22 = a.m22
            },
            PostTranslate: function(a, b) {
                T.um.Translation(a, b);
                T.Multiply(this, this, T.um)
            },
            PostScale: function(a, b) {
                T.um.Scaling(a, b);
                T.Multiply(this, this, T.um)
            },
            PostRotate: function(a) {
                T.um.Rotation(a);
                T.Multiply(this, this, T.um)
            },
            toString: function() {
                var a = "Mtrans=" + K.string(this.transformed) + "\n",
                    a = a + ("{" + this.m00 + ":" + this.m01 + ":" + this.m02 + "}\n"),
                    a = a + ("{" + this.m10 + ":" + this.m11 + ":" + this.m12 + "}\n");
                return a +=
                    "{" + this.m20 + ":" + this.m21 + ":" + this.m22 + "}\n"
            },
            Rotation: function(a) {
                a *= T.DEG2RAD;
                this.m00 = Math.cos(a);
                this.m01 = -Math.sin(a);
                this.m02 = 0;
                this.m10 = -this.m01;
                this.m11 = this.m00;
                this.m21 = this.m20 = this.m12 = 0;
                this.m22 = 1;
                this.transformed = !0
            },
            Translation: function(a, b) {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = a;
                this.m10 = 0;
                this.m11 = 1;
                this.m12 = b;
                this.m21 = this.m20 = 0;
                this.m22 = 1;
                this.transformed = !1
            },
            Scaling: function(a, b) {
                this.m00 = a;
                this.m10 = this.m02 = this.m01 = 0;
                this.m11 = b;
                this.m21 = this.m20 = this.m12 = 0;
                this.m22 = 1;
                this.transformed = !0
            },
            toMatrix: function(a) {
                a.a = this.m00;
                a.c = this.m01;
                a.tx = this.m02;
                a.b = this.m10;
                a.d = this.m11;
                a.ty = this.m12
            },
            outside: function(a, b, c, d, e, f, r) {
                null == r && (r = 0);
                null == f && (f = 0);
                null == e && (e = !1);
                var g = null;
                e ? (T.um.Translation(f, r), T.Multiply(T.um, this, T.um), g = T.um) : g = this;
                var k = g.m02;
                e = g.m12;
                var h = a * g.m00 + g.m02;
                f = a * g.m10 + g.m12;
                var m = b * g.m01 + g.m02;
                r = b * g.m11 + g.m12;
                var w = a * g.m00 + b * g.m01 + g.m02,
                    g = a * g.m10 + b * g.m11 + g.m12;
                a = Math.min(Math.min(k, h), Math.min(m, w));
                b = Math.min(Math.min(e, f), Math.min(r, g));
                k = Math.max(Math.max(k,
                    h), Math.max(m, w));
                e = Math.max(Math.max(e, f), Math.max(r, g));
                return 0 > k || 0 > e || a > c ? !0 : b > d
            },
            __class__: T
        };
        var tb = function() {};
        s["oz.OzMobileUtils"] = tb;
        tb.__name__ = ["oz", "OzMobileUtils"];
        tb.HideLivesDialog = function(a) {
            u.LocallyUnmute()
        };
        tb.HideRateDialog = function(a) {};
        var ca = function() {};
        s["oz.OzParticle"] = ca;
        ca.__name__ = ["oz", "OzParticle"];
        ca.StaticInit = function() {
            ca.Particles = [];
            for (var a = ca.FreeId = 0; 400 > a;) {
                var b = a++;
                ca.Particles[b] = new ca;
                ca.Particles[b].PoolId = b
            }
            ca.Head = ca.New();
            ca.Head.type = -1;
            ca.Head.prev =
                ca.Head.next = ca.Head
        };
        ca.New = function() {
            var a = ca.Particles[ca.FreeId++];
            a.reset();
            return a
        };
        ca.Dispose = function(a) {
            f.Dispose(a.sprite);
            a.sprite = null;
            a.prev.next = a.next;
            a.next.prev = a.prev;
            if (0 <= a.PoolId) {
                var b = ca.FreeId - 1,
                    c = a.PoolId,
                    d = ca.Particles[b];
                ca.Particles[b] = ca.Particles[c];
                ca.Particles[c] = d;
                a.PoolId = b;
                ca.Particles[c].PoolId = c;
                ca.FreeId--
            }
        };
        ca.Add = function(a) {
            a.prev = ca.Head.prev;
            a.next = ca.Head;
            ca.Head.prev.next = a;
            ca.Head.prev = a
        };
        ca.UpdateAll = function() {
            for (var a = ca.Head.next; a != ca.Head;) {
                var b =
                    a,
                    a = a.next;
                b.update()
            }
        };
        ca.EmitInCircle = function(a, b, c, d, e, p, r, g, k, h) {
            null == h && (h = 1);
            null == k && (k = -1);
            r /= g;
            for (var m = 0; m < p;) {
                var w = m++/p*2*Math.PI,l=ca.New();l.duration=g;l.sprite=f.New(b);a.addChild(l.sprite);l.sprite.set_x(c);l.sprite.set_y(d);l.sprite.set_rotation(e);l.sprite.mouseEnabled=!1;l.velX=Math.cos(w)*r;l.velY=Math.sin(w)*r;0<=k&&(l.velAlpha=(k-h)/g);
            ca.Add(l)
        }
    }; ca.prototype = {
        reset: function() {
            this.type = 0;
            this.next = this.prev = null;
            this.duration = this.cnt = 0;
            this.sprite = null;
            this.velScaleX =
                this.velScaleY = this.velRot = this.velAlpha = this.velX = this.velY = this.accelX = this.accelY = 0;
            this.updateFunc = null
        },
        update: function() {
            if (0 < this.duration && this.cnt > this.duration) ca.Dispose(this);
            else {
                if (null != this.updateFunc) this.updateFunc();
                else {
                    var a = this.sprite;
                    a.set_x(a.get_x() + this.velX);
                    a = this.sprite;
                    a.set_y(a.get_y() + this.velY);
                    this.velX += this.accelX;
                    this.velY += this.accelY;
                    a = this.sprite;
                    a.set_alpha(a.get_alpha() + this.velAlpha);
                    a = this.sprite;
                    a.set_rotation(a.get_rotation() + this.velRot);
                    a = this.sprite;
                    a.set_scaleX(a.get_scaleX() + this.velScaleX);
                    a = this.sprite;
                    a.set_scaleY(a.get_scaleY() + this.velScaleY)
                }
                this.cnt++
            }
        },
        __class__: ca
    };
    var v = function(a, b, c, d, e, f, r, g, k, h) {
        null == h && (h = -1);
        null == k && (k = -1);
        null == g && (g = !1);
        null == r && (r = 0);
        null == f && (f = 1);
        this.mapTileObject = null;
        this.minScaledTileSize = this.maxScaledTileSize = -1;
        this.canZoom = !1;
        this.data = this.data = this.colData = this.DSI = this.DSJ = this.DEI = this.DEJ = null;
        this.offsetX = c;
        this.offsetY = d;
        this.scaledTileSize = this.tileSize = e;
        this.allocRows = b;
        this.allocCols =
            a;
        this.numLayers = f;
        this.depthOffset = r;
        this.canZoom = g; - 1 == k && (k = e); - 1 == h && (h = e);
        this.minScaledTileSize = k;
        this.maxScaledTileSize = h;
        this.clearRect = new pa;
        this.filledRect = new pa;
        this.bmdRect = new pa;
        this.bmdPoint = new xa;
        this.MaxBufferPixelW = (Math.ceil(l.instance.ScreenBMD.component.width / e) + 1) * e;
        this.MaxBufferPixelH = (Math.ceil(l.instance.ScreenBMD.component.height / e) + 1) * e;
        if (this.canZoom)
            for (a = k, h += 1; a < h;) b = a++, this.MaxBufferPixelW = Math.max(this.MaxBufferPixelW, (Math.ceil(l.instance.ScreenBMD.component.width /
                b) + 1) * b) | 0, this.MaxBufferPixelH = Math.max(this.MaxBufferPixelH, (Math.ceil(l.instance.ScreenBMD.component.height / b) + 1) * b) | 0;
        this.adjustBuffer();
        this.bmdBuffers = Array(f);
        for (h = 0; h < f;) a = h++, this.bmdBuffers[a] = new ia(this.MaxBufferPixelW, this.MaxBufferPixelH, !0, 16777215);
        this.reset()
    }; s["oz.OzTileMap"] = v; v.__name__ = ["oz", "OzTileMap"]; v.GetSpriteTileFrame = function(a, b, c, d) {
        return 2 + a % c * d + b % d
    }; v.GetScale9Frame = function(a, b, c, d) {
        return 1 == c ? 0 == b ? 22 : b == d - 1 ? 24 : 23 : 0 == a ? 0 == b ? 1 : b == d - 1 ? 3 : 2 : a == c - 1 ? 0 == b ? 7 : b == d - 1 ?
            9 : 8 : 0 == b ? 4 : b == d - 1 ? 6 : 5
    }; v.PTInit = function() {
        v.shouldFillRight = [!1, !0, !0, !1, !0, !0, !1, !0, !0, !1, !0, !0, !1, !1, !0, !0, !0, !1, !1, !1, !0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !0].slice(0);
        v.ptVX = Array(1E3);
        v.ptVY = Array(1E3);
        v.ptHors = Array(101);
        for (var a = 0, b = v.ptHors.length; a < b;) {
            var c = a++;
            v.ptHors[c] = Array(102)
        }
        v.ptVers = Array(102);
        a = 0;
        for (b = v.ptVers.length; a < b;) c = a++, v.ptVers[c] = Array(101);
        v.ptDiags = Array(101);
        a = 0;
        for (b = v.ptDiags.length; a < b;) c = a++, v.ptDiags[c] = Array(101);
        v.ptTiles = Array(101);
        a = 0;
        for (b = v.ptTiles.length; a < b;) c = a++, v.ptTiles[c] = Array(101);
        v.PTClear(101, 101);
        v.initPoly2Tiles = !0
    }; v.PTFrameToTile = function(a, b, c) {
        if (0 == c) return 0;
        switch (v.ptTiles[a][b]) {
            case 2:
                return 2 == c ? 9 : 0 < b && (10 == v.ptTiles[a][b - 1] || 15 == v.ptTiles[a][b - 1]) ? 8 : b + 1 < v.ptTiles[a].length && (12 == v.ptTiles[a][b + 1] || 18 == v.ptTiles[a][b + 1]) ? 8 : 1;
            case 10:
                return 3;
            case 11:
                return 8;
            case 12:
                return 2;
            case 13:
                return 8;
            case 14:
                return 7;
            case 15:
                return 6;
            case 16:
                return 8;
            case 17:
                return 5;
            case 18:
                return 4;
            case 19:
                return 8;
            default:
                return 2 ==
                    c ? 0 == a || 0 == v.ptTiles[a - 1][b] ? 9 : 0 : 1
        }
    }; v.PTClear = function(a, b) {
        null == b && (b = -1);
        null == a && (a = -1);
        0 > a && (a = v.ptN + 1);
        0 > b && (b = v.ptM + 1);
        for (var c = 0, d = a; c < d;)
            for (var e = c++, f = 0, r = b; f < r;) {
                var g = f++;
                v.ptHors[e][g] = 0;
                v.ptVers[e][g] = 0;
                v.ptDiags[e][g] = 0;
                v.ptTiles[e][g] = 0
            }
        v.ptN = v.ptM = 0
    }; v.getPtTile = function(a, b) {
        return 0 > a || 100 < a || 0 > b || 100 < b ? 0 : v.ptTiles[a][b]
    }; v.getPtDiag = function(a, b) {
        return 0 > a || 100 < a || 0 > b || 100 < b ? 0 : v.ptDiags[a][b]
    }; v.getPtHor = function(a, b) {
        return 0 > a || 100 < a || 0 > b || 100 < b ? 0 : v.ptHors[a][b]
    }; v.PolyToTiles =
    function(a, b) {
        if (3 == a.type) {
            v.initPoly2Tiles ? v.PTClear() : v.PTInit();
            var c = 1E6,
                d = 1E6,
                e = -1,
                f = -1;
            v.ptNVertices = a.vx.length;
            for (var r = 0, g = v.ptNVertices; r < g;) {
                var k = r++;
                v.ptVX[k] = Math.round(a.vx[k] / b) | 0;
                v.ptVY[k] = Math.round(a.vy[k] / b) | 0;
                c = Math.min(c, v.ptVY[k]) | 0;
                d = Math.min(d, v.ptVX[k]) | 0;
                e = Math.max(e, v.ptVY[k]) | 0;
                f = Math.max(f, v.ptVX[k]) | 0
            }
            if (0 != c || 0 != d || 100 < e || 100 < f) throw new D(new Bb("You're passing an invalide poly to tile!"));
            c = 0;
            for (d = v.ptNVertices; c < d;) r = c++, g = (r + 1) % v.ptNVertices, v.SetSideSegmentData(v.ptVX[r],
                v.ptVY[r], v.ptVX[g], v.ptVY[g]);
            v.ptN = e;
            v.ptM = f;
            e = 0;
            for (f = v.ptN; e < f;)
                for (var c = e++, k = !1, h = 0, d = 0, r = v.ptM; d < r;) {
                    var g = d++,
                        m = ((v.ptHors[c][g] & 2) >> 1) + ((v.ptVers[c][g + 1] & 1) << 1) + ((v.ptHors[c + 1][g] & 1) << 2) + ((v.ptVers[c][g] & 2) << 2),
                        l = x.BitCount(m);
                    0 == l ? 0 == v.ptDiags[c][g] ? (h = v.getPtTile(c - 1, g), 10 == h ? v.ptTiles[c][g] = 11 : 12 == h ? v.ptTiles[c][g] = 13 : 14 == h ? v.ptTiles[c][g] = 16 : 17 == h ? v.ptTiles[c][g] = 19 : k && (100 > c && 68 == v.ptDiags[c + 1][g] || 100 > g && 68 == v.ptDiags[c][g + 1]) ? v.ptTiles[c][g] = 38 : k && (100 > c && 257 == v.ptDiags[c + 1][g] ||
                            0 < g && 257 == v.ptDiags[c][g - 1]) ? v.ptTiles[c][g] = 40 : k ? 0 < (v.getPtHor(c, g - 1) & 2) || 0 < (v.getPtDiag(c - 1, g - 1) & 256) || 0 < (v.getPtDiag(c, g - 1) & 4) ? 0 < (v.getPtHor(c + 1, g - 1) & 1) ? v.ptTiles[c][g] = 36 : v.ptTiles[c][g] = 21 : 0 < (v.getPtHor(c, g + 1) & 2) || 0 < (v.getPtDiag(c - 1, g + 1) & 64) || 0 < (v.getPtDiag(c, g + 1) & 1) ? 0 < (v.getPtHor(c + 1, g + 1) & 1) ? v.ptTiles[c][g] = 35 : v.ptTiles[c][g] = 20 : 0 < (v.getPtHor(c + 1, g - 1) & 1) ? v.ptTiles[c][g] = 32 : 0 < (v.getPtHor(c + 1, g + 1) & 1) ? v.ptTiles[c][g] = 31 : v.ptTiles[c][g] = 5 : v.ptTiles[c][g] = 0) : v.ptTiles[c][g] = 68 == v.ptDiags[c][g] ? 0 !=
                        h ? 37 : 10 : 257 == v.ptDiags[c][g] ? 0 != h ? 12 : 39 : 96 == v.ptDiags[c][g] ? 14 : 12 == v.ptDiags[c][g] ? 15 : 264 == v.ptDiags[c][g] ? 17 : 33 == v.ptDiags[c][g] ? 18 : 5 : 1 == l ? 1 == m ? 0 < (v.getPtHor(c + 1, g - 1) & 1) ? v.ptTiles[c][g] = 34 : 0 < (v.getPtHor(c + 1, g + 1) & 1) ? v.ptTiles[c][g] = 33 : v.ptTiles[c][g] = 2 : 2 == m ? v.ptTiles[c][g] = 6 : 4 == m ? (k = v.getPtTile(c - 1, g), 10 == k ? v.ptTiles[c][g] = 25 : 12 == k ? v.ptTiles[c][g] = 26 : 14 == k ? v.ptTiles[c][g] = 27 : 17 == k ? v.ptTiles[c][g] = 28 : 0 < (v.getPtHor(c, g - 1) & 2) || 0 < (v.getPtDiag(c - 1, g - 1) & 256) || 0 < (v.getPtDiag(c, g - 1) & 4) ? v.ptTiles[c][g] = 30 :
                            0 < (v.getPtHor(c, g + 1) & 2) || 0 < (v.getPtDiag(c - 1, g + 1) & 64) || 0 < (v.getPtDiag(c, g + 1) & 1) ? v.ptTiles[c][g] = 29 : v.ptTiles[c][g] = 8) : v.ptTiles[c][g] = 4 : v.ptTiles[c][g] = 2 == l ? 9 == m ? 1 : 3 == m ? 3 : 6 == m ? 9 : 12 == m ? 7 : 5 == m ? 23 : 5 : 3 == l ? 13 == m ? 22 : 7 == m ? 24 : 5 : 5;
                    k = v.shouldFillRight[v.ptTiles[c][g]];
                    h = v.ptTiles[c][g]
                }
        }
    }; v.SetSideSegmentData = function(a, b, c, d) {
        a *= 2;
        b *= 2;
        c = 2 * c - a;
        var e = 2 * d - b;
        d = Math.max(Math.abs(c) | 0, Math.abs(e) | 0) / 2 | 0;
        c = c / d | 0;
        for (var e = e / d | 0, f = 0; f < d;) {
            f++;
            var r = b / 2 | 0,
                g = a / 2 | 0;
            0 == c ? 0 < e ? v.ptVers[r][g] |= 1 : v.ptVers[r - 1][g] |= 2 : 0 == e ?
                0 < c ? v.ptHors[r][g] |= 2 : v.ptHors[r][g - 1] |= 1 : (0 > e && (r = (b + e) / 2 | 0), 0 > c && (g = (a + c) / 2 | 0), v.ptDiags[r][g] |= 1 << a - 2 * g + 3 * (b - 2 * r), v.ptDiags[r][g] |= 1 << a + c - 2 * g + 3 * (b + e - 2 * r));
            a += c;
            b += e
        }
    }; v.prototype = {
        setTileObject: function(a, b, c) {
            a.aI.push(b);
            a.aJ.push(c);
            this.mapTileObject.h[b * this.allocCols + c] = a
        },
        getTileObject: function(a, b) {
            return this.mapTileObject.h[a * this.allocCols + b]
        },
        adjustBuffer: function() {
            this.BufferTileW = Math.ceil(l.instance.ScreenBMD.component.width / this.scaledTileSize) + 1;
            this.BufferTileH = Math.ceil(l.instance.ScreenBMD.component.height /
                this.scaledTileSize) + 1;
            this.BufferPixelW = Math.round(this.scaledTileSize * this.BufferTileW);
            this.BufferPixelH = Math.round(this.scaledTileSize * this.BufferTileH)
        },
        reset: function() {
            this.mapTileObject = new va;
            if (null == this.data) {
                this.data = Array(this.numLayers);
                this.DSI = Array(this.numLayers);
                this.DEI = Array(this.numLayers);
                this.DSJ = Array(this.numLayers);
                this.DEJ = Array(this.numLayers);
                for (var a = 0, b = this.numLayers; a < b;) {
                    var c = a++;
                    this.data[c] = Array(this.allocRows);
                    for (var d = 0, e = this.allocRows; d < e;) {
                        var f = d++;
                        this.data[c][f] = Array(this.allocCols);
                        for (var r = 0, g = this.allocCols; r < g;) {
                            var k = r++;
                            this.data[c][f][k] = 0
                        }
                    }
                }
            } else
                for (a = 0, b = this.numLayers; a < b;)
                    for (c = a++, d = 0, e = this.allocRows; d < e;)
                        for (f = d++, r = 0, g = this.allocCols; r < g;) k = r++, this.data[c][f][k] = 0;
            this.makeDirty();
            this.colData = this.data[0]
        },
        makeDirty: function() {
            for (var a = 0, b = this.numLayers; a < b;) {
                var c = a++;
                this.DSI[c] = 0;
                this.DEI[c] = -1;
                this.DSJ[c] = 0;
                this.DEJ[c] = -1
            }
        },
        setTileBlock: function(a, b, c, d, e, f, r, g, k, h) {
            null == h && (h = 1);
            null == k && (k = !1);
            c = Math.round((c -
                this.offsetY) / this.tileSize) | 0;
            b = Math.round((b - this.offsetX) / this.tileSize) | 0;
            for (var m = 0; m < e;)
                for (var l = m++, n = 0, q = d; n < q;) {
                    var s = n++,
                        x = l + c,
                        t = s + b,
                        u;
                    switch (h) {
                        case 0:
                            u = 0;
                            break;
                        case 2:
                            u = 0 == l ? 9 : 0;
                            break;
                        default:
                            u = f
                    }
                    0 <= x && 0 <= t && x < this.colData.length && t < this.colData[0].length && this.setTile(a, l + c, s + b, u, r, k ? v.GetScale9Frame(l, s, e, d) : g)
                }
        },
        setTileObjectBlock: function(a, b, c, d, e) {
            c = Math.round((c - this.offsetY) / this.tileSize);
            b = Math.round((b - this.offsetX) / this.tileSize);
            for (var f = 0; f < e;)
                for (var r = f++, g = 0, k = d; g <
                    k;) {
                    var h = g++;
                    this.setTileObject(a, r + c, h + b)
                }
        },
        setTile: function(a, b, c, d, e, f) {
            null == f && (f = 1);
            0 <= b && 0 <= c && b < this.colData.length && c < this.colData[0].length && (this.data[a][b][c] = null != e ? (e.tilesheetId << 10) + e.frames[f - 1] : 0, 0 < d && (this.colData[b][c] = this.colData[b][c] & -983041 | d << 16), this.bmdRect.width = this.scaledTileSize, this.bmdRect.height = this.scaledTileSize, this.updateTileGFX(a, b, c, !0))
        },
        draw: function(a, b) {
            f.Flush();
            var c = this.scaledTileSize,
                d = oa.instance.camera.gameScreenEdgeX() - this.offsetX,
                e = oa.instance.camera.gameScreenEdgeY() -
                this.offsetY;
            this.canZoom && (c = Math.floor(this.tileSize * oa.instance.camera.getZoomX()), c = Math.min(this.maxScaledTileSize, Math.max(this.minScaledTileSize, c)) | 0);
            this.canZoom && c != this.scaledTileSize && (this.scaledTileSize = c, G.trace("GOT NEW SCALEDTILESIZE ", {
                fileName: "OzTileMap.hx",
                lineNumber: 349,
                className: "oz.OzTileMap",
                methodName: "draw",
                customParams: [this.scaledTileSize, d, e]
            }), this.adjustBuffer(), this.makeDirty());
            var p = (d % this.tileSize + this.tileSize) % this.tileSize,
                r = (e % this.tileSize + this.tileSize) %
                this.tileSize,
                p = this.scaledTileSize / this.tileSize * p,
                r = this.scaledTileSize / this.tileSize * r,
                c = Math.floor(d / this.tileSize),
                g = Math.floor(e / this.tileSize),
                p = Math.ceil((p + l.WIDTH) / this.scaledTileSize),
                r = Math.ceil((r + l.HEIGHT) / this.scaledTileSize),
                k = this.scaledTileSize / this.tileSize;
            this.bmdRect.width = this.bmdRect.height = this.scaledTileSize;
            for (var h = 0, m = 0; m < r;)
                for (var w = m++, w = g + w, n = 0, q = p; n < q;) {
                    var s = n++,
                        s = c + s;
                    0 <= w && 0 <= s && w < this.colData.length && s < this.colData[0].length ? this.updateTileGFX(b, w, s) || ++h : (this.bmdRect.x =
                        (s % this.BufferTileW + this.BufferTileW) % this.BufferTileW * this.scaledTileSize, this.bmdRect.y = (w % this.BufferTileH + this.BufferTileH) % this.BufferTileH * this.scaledTileSize, this.bmdRect.width = this.bmdRect.height = this.scaledTileSize, this.bmdBuffers[b].fillRect(this.bmdRect, 16777215))
                }
            d = ((d * k | 0) % this.BufferPixelW + this.BufferPixelW) % this.BufferPixelW;
            e = ((e * k | 0) % this.BufferPixelH + this.BufferPixelH) % this.BufferPixelH;
            k = Math.min(l.WIDTH, this.BufferPixelW - d) | 0;
            h = Math.min(l.HEIGHT, this.BufferPixelH - e) | 0;
            m = l.WIDTH -
                k;
            w = l.HEIGHT - h;
            this.bmdPoint.x = 0;
            this.bmdPoint.y = 0;
            this.bmdRect.x = d;
            this.bmdRect.y = e;
            this.bmdRect.width = k;
            this.bmdRect.height = h;
            l.instance.ScreenBMD.copyPixels(this.bmdBuffers[b], this.bmdRect, this.bmdPoint, null, null, !0);
            0 < m && (this.bmdPoint.x = k, this.bmdPoint.y = 0, this.bmdRect.x = 0, this.bmdRect.y = e, this.bmdRect.width = m, this.bmdRect.height = h, l.instance.ScreenBMD.copyPixels(this.bmdBuffers[b], this.bmdRect, this.bmdPoint, null, null, !0));
            0 < h && (this.bmdPoint.x = 0, this.bmdPoint.y = h, this.bmdRect.x = d, this.bmdRect.y =
                0, this.bmdRect.width = k, this.bmdRect.height = w, l.instance.ScreenBMD.copyPixels(this.bmdBuffers[b], this.bmdRect, this.bmdPoint, null, null, !0));
            0 < h && 0 < k && (this.bmdPoint.x = k, this.bmdPoint.y = h, this.bmdRect.x = 0, this.bmdRect.y = 0, this.bmdRect.width = m, this.bmdRect.height = w, l.instance.ScreenBMD.copyPixels(this.bmdBuffers[b], this.bmdRect, this.bmdPoint, null, null, !0));
            this.DSI[b] = g;
            this.DEI[b] = g + r;
            this.DSJ[b] = c;
            this.DEJ[b] = c + p
        },
        updateTileGFX: function(a, b, c, d) {
            null == d && (d = !1);
            var e = c >= this.DEJ[a] || b >= this.DEI[a] ||
                c < this.DSJ[a] || b < this.DSI[a];
            d && (e = !e);
            if (e) {
                d = this.data[a][b][c];
                e = d & 1023;
                if (0 != e) {
                    var p = f.TilesheetFrames[d >> 10 & 63][e];
                    this.bmdRect.x = (c % this.BufferTileW + this.BufferTileW) % this.BufferTileW * this.scaledTileSize;
                    this.bmdRect.y = (b % this.BufferTileH + this.BufferTileH) % this.BufferTileH * this.scaledTileSize;
                    this.bmdRect.width = this.bmdRect.height = this.scaledTileSize;
                    this.bmdBuffers[a].fillRect(this.bmdRect, 16777215);
                    f.CopyMcToBmd(this.bmdBuffers[a], d >> 10 & 63, e, -p[4] + c % this.BufferTileW * this.scaledTileSize, -p[5] +
                        b % this.BufferTileH * this.scaledTileSize, !1, this.scaledTileSize == this.tileSize ? -1 : this.scaledTileSize)
                } else this.bmdRect.x = (c % this.BufferTileW + this.BufferTileW) % this.BufferTileW * this.scaledTileSize, this.bmdRect.y = (b % this.BufferTileH + this.BufferTileH) % this.BufferTileH * this.scaledTileSize, this.bmdRect.width = this.bmdRect.height = this.scaledTileSize, this.bmdBuffers[a].fillRect(this.bmdRect, 16777215);
                return !0
            }
            return !1
        },
        horSideHit: function(a, b, c, d, e) {
            var f = Math.floor((-this.offsetY + b - d + 1) / this.tileSize);
            b =
                Math.ceil((-this.offsetY + b + d - 1) / this.tileSize);
            for (a = Math.floor((-this.offsetX + a + (c + 0.01) * e) / this.tileSize); f < b;)
                if (c = f++, 0 <= c && 0 <= a && c < this.colData.length && a < this.colData[0].length && 1 == (this.colData[c][a] >> 16 & 15)) return !0;
            return !1
        },
        verSideHit: function(a, b, c, d, e, f) {
            null == f && (f = !1);
            var r = Math.floor((-this.offsetX + a - c + 1) / this.tileSize);
            a = Math.ceil((-this.offsetX + a + c - 1) / this.tileSize);
            for (b = Math.floor((-this.offsetY + b + (d + 0.01) * e) / this.tileSize); r < a;)
                if (d = r++, 0 <= b && 0 <= d && b < this.colData.length && d < this.colData[0].length &&
                    (1 == (this.colData[b][d] >> 16 & 15) || 1 == e && f && 9 == (this.colData[b][d] >> 16 & 15))) return !0;
            return !1
        },
        horHitSet: function(a, b, c) {
            return (Math.floor((a + (b + 0.01) * c) / this.tileSize) + (0 > c ? 1 : 0)) * this.tileSize - b * c
        },
        verHitSet: function(a, b, c) {
            return (Math.floor((a + (b + 0.01) * c) / this.tileSize) + (0 > c ? 1 : 0)) * this.tileSize - b * c
        },
        GetMaxUpDY: function(a, b, c, d, e) {
            a -= this.offsetX;
            b -= this.offsetX;
            c -= this.offsetY;
            d /= e;
            for (var f = Math.floor((c + e) / this.tileSize), r = Math.floor((c + 1) / this.tileSize) - 1;;) {
                for (var g = (r + 1) * this.tileSize - c, k = g *
                        d, h = Math.floor((a + k) / this.tileSize), k = Math.floor((b + k) / this.tileSize) + 1; h < k;) {
                    var m = h++;
                    if (1 == (this.colData[r][m] >> 16 & 15)) return g
                }--r;
                if (!(r >= f)) break
            }
            return e
        },
        getSlope: function(a, b, c) {
            var d = -this.offsetY + b + c,
                e = -this.offsetX + a;
            a = Math.floor(e / this.tileSize);
            for (var e = e % this.tileSize, f = Math.floor((d - c) / this.tileSize), d = Math.floor(d / this.tileSize) + 1; f < d;) {
                var r = f++;
                if (0 <= r && 0 <= a && r < this.colData.length && a < this.colData[0].length) {
                    var g = this.colData[r][a] >> 16 & 15;
                    if (0 != g && 9 != g && 1 != g) {
                        var r = r * this.tileSize,
                            k;
                        switch (g) {
                            case 2:
                                k = e;
                                break;
                            case 3:
                                k = this.tileSize - e;
                                break;
                            case 4:
                                k = e / 2;
                                break;
                            case 5:
                                k = this.tileSize / 2 + e / 2;
                                break;
                            case 6:
                                k = (this.tileSize - e) / 2;
                                break;
                            case 7:
                                k = this.tileSize / 2 + (this.tileSize - e) / 2;
                                break;
                            default:
                                k = 0
                        }
                        if (r + k + this.offsetY - c < b) switch (g) {
                            case 2:
                                return 1;
                            case 3:
                                return -1;
                            case 4:
                                return 0.5;
                            case 5:
                                return 0.5;
                            case 6:
                                return -0.5;
                            case 7:
                                return -0.5;
                            default:
                                return 0
                        }
                    }
                }
            }
            return 0
        },
        downHitSpecialSet: function(a, b, c) {
            var d = -this.offsetY + b + c,
                e = -this.offsetX + a;
            a = Math.floor(e / this.tileSize);
            for (var e = e % this.tileSize,
                    f = Math.floor((d - c) / this.tileSize), d = Math.floor(d / this.tileSize) + 1; f < d;) {
                var r = f++;
                if (0 <= r && 0 <= a && r < this.colData.length && a < this.colData[0].length) {
                    var g = this.colData[r][a] >> 16 & 15;
                    if (0 != g && 9 != g && 1 != g) {
                        r *= this.tileSize;
                        switch (g) {
                            case 2:
                                g = e;
                                break;
                            case 3:
                                g = this.tileSize - e;
                                break;
                            case 4:
                                g = e / 2;
                                break;
                            case 5:
                                g = this.tileSize / 2 + e / 2;
                                break;
                            case 6:
                                g = (this.tileSize - e) / 2;
                                break;
                            case 7:
                                g = this.tileSize / 2 + (this.tileSize - e) / 2;
                                break;
                            default:
                                g = 0
                        }
                        g = r + g;
                        if (g + this.offsetY - c < b) return g + this.offsetY - c
                    }
                }
            }
            return NaN
        },
        __class__: v
    };
    var P = function() {}; s["oz.OzTween"] = P; P.__name__ = ["oz", "OzTween"]; P.Init = function() {
        P.Tweens = [];
        for (var a = 0; 400 > a;) {
            var b = a++;
            P.Tweens[b] = new P;
            P.Tweens[b].PoolId = b
        }
        P.Head = null;
        P.FreeId = 0;
        P.NumTweens = 0
    }; P.UpdateAll = function() {
        if (null != P.Head) {
            for (var a = P.Head; a.remove || (0 <= a.cnt && null != a.updateFunc && a.updateFunc(a.cnt / a.duration), a.cnt == a.duration && (null != a.endFunc && a.endFunc(), 0 == a.repeat ? a.remove = !0 : (0 < a.repeat && a.repeat--, a.cnt = 0)), a.cnt++), a = a.next, a != P.Head;);
            P.RemoveRemove()
        }
    }; P.RemoveRemove =
    function() {
        for (var a = P.Head, b = 0, c = P.NumTweens; b < c;) {
            b++;
            var d = a.next;
            a.remove && P.Remove(a);
            a = d
        }
    }; P.New = function() {
        var a = P.Tweens[P.FreeId++];
        a.reset();
        return a
    }; P.Dispose = function(a) {
        a.updateFunc = null;
        a.endFunc = null;
        var b = P.FreeId - 1,
            c = a.PoolId,
            d = P.Tweens[b];
        P.Tweens[b] = P.Tweens[c];
        P.Tweens[c] = d;
        a.PoolId = b;
        P.Tweens[c].PoolId = c;
        P.FreeId--
    }; P.Add = function(a) {
        if (null == P.Head) P.Head = a, a.next = a.prev = a;
        else {
            var b = P.Head.prev;
            b.next = a;
            a.prev = b;
            P.Head.prev = a;
            a.next = P.Head
        }
        P.NumTweens++
    }; P.Remove = function(a) {
        if (P.Head ==
            a)
            if (a.next == a) P.Head = null;
            else {
                var b = P.Head.next,
                    c = P.Head.prev;
                c.next = b;
                b.prev = c;
                P.Head = b
            }
        else b = a.next, c = a.prev, c.next = b, b.prev = c;
        P.NumTweens--;
        P.Dispose(a)
    }; P.prototype = {
        reset: function() {
            this.remove = !1;
            this.next = this.prev = this;
            this.endFunc = this.updateFunc = null;
            this.gameBound = this.stateBound = !0;
            this.cnt = this.repeat = this.duration = 0
        },
        __class__: P
    };
    var Cc = function(a, b, c, d) {
        this.x1 = a;
        this.y1 = b;
        this.x2 = c;
        this.y2 = d
    }; s["oz.Point2"] = Cc; Cc.__name__ = ["oz", "Point2"]; Cc.prototype = {
        __class__: Cc
    };
    var Sc = function(a,
        b, c, d, e) {
        null == e && (e = !0);
        this.target = a;
        this.name = b;
        this.start = c;
        this.end = d;
        this.change = this.end - this.start;
        this.isField = e
    }; s["oz.Property"] = Sc; Sc.__name__ = ["oz", "Property"]; Sc.prototype = {
        __class__: Sc
    };
    var n = function(a, b, c) {
        null == b && (b = 1);
        n.Initted || n.Init();
        this.initialized = !1;
        this.alive = !0;
        this.paused = !1;
        this.target = a;
        this.duration = Math.max(1, Math.round(1E3 * b)) | 0;
        this.propertiesObject = c;
        this.properties = [];
        this._repeat = this.initialRepeat = 0;
        this.special = this._snapping = this._smartRotation = this._reflect =
            this._reverse = !1;
        this.toggleVisible = !0;
        this.tweenPrev = this.tweenNext = this;
        this.eventPrev = this.eventNext = this;
        this.targetPrev = this.targetNext = this;
        this.active = !1;
        this.timeDelay = 0;
        this.easing = Ca.Linear;
        this._level = n.CurLevel;
        this._onUpdate = this._onComplete = this._onPause = this._onResume = this._onRepeat = this._onStop = null
    }; s["oz.TweenOz"] = n; n.__name__ = ["oz", "TweenOz"]; n.GetTimeMS = function() {
        return n.CurTimeMS
    }; n.IncreaseLevel = function() {
        n.CurLevel++
    }; n.SetCurrentLevel = function(a) {
        n.CurLevel = a
    }; n.GetCurrentLevel =
    function() {
        return n.CurLevel
    }; n.Init = function(a, b, c) {
        null == b && (b = -1);
        null == a && (a = -1);
        n.Initted || (n.Initted = !0, 0 < b && (n.NumMSBuckets = b), n.MSBuckets = [], n.CurLevel = 2, n.CurTimeMS = 0, n.CustomElapsedMS = n.FrameElapsedMS = 0, n.ActiveTweensHead = new n, n.ProcessedTweensHead = new n, n.ProcessedEventsHead = new n, n.ProcessedTargetHead = new n, n.LevelPauses = [], n.TargetMap = new Oa, n.ResetMSPrecision(a))
    }; n.ResetMSPrecision = function(a) {
        null == a && (a = -1);
        n.CustomElapsedMS += n.FrameElapsedMS;
        n.FrameElapsedMS = 0;
        0 > a && (a = 60);
        n.FPS =
            a;
        n.NumFrameUpdates = 0;
        a = 1E3;
        for (var b = n.FPS, c; 0 != b;) c = b, b = a % b, a = c;
        n.FPS_MOD = n.FPS / a | 0;
        n.FPS_MOD_TIME = 1E3 / a | 0
    }; n.Update = function(a) {
        null == a && (a = -1);
        0 > a ? (n.NumFrameUpdates++, a = Math.floor(n.NumFrameUpdates / n.FPS_MOD) * n.FPS_MOD_TIME + 1E3 / n.FPS * Math.floor(n.NumFrameUpdates % n.FPS_MOD) - n.FrameElapsedMS | 0, n.FrameElapsedMS += a) : n.CustomElapsedMS += a;
        for (var b = 0; b < a;) {
            b++;
            var c = n.MSBuckets[n.CurTimeMS % n.NumMSBuckets];
            if (null != c) {
                for (; c.eventNext != c;) {
                    var d = c.eventNext;
                    d.timeEnd == n.CurTimeMS && d.processEndEvent(n.CurTimeMS);
                    d.eventPrev == c && n.ProcessedEventsHead.listAppendEvent(d)
                }
                c = n.MSBuckets[n.CurTimeMS % n.NumMSBuckets];
                n.MSBuckets[n.CurTimeMS % n.NumMSBuckets] = n.ProcessedEventsHead;
                n.ProcessedEventsHead = c
            }
            n.CurTimeMS++
        }
        for (; n.ActiveTweensHead.tweenNext != n.ActiveTweensHead;) b = n.ActiveTweensHead.tweenNext, n.CurTimeMS >= b.timeOffset && b.update(n.CurTimeMS), b.tweenPrev == n.ActiveTweensHead && n.ProcessedTweensHead.listAppendTween(b);
        b = n.ActiveTweensHead;
        n.ActiveTweensHead = n.ProcessedTweensHead;
        n.ProcessedTweensHead = b
    }; n.Reset =
    function(a) {
        null == a && (a = 1);
        n.StopAll(a);
        n.SetCurrentLevel(a)
    }; n.StopAll = function(a) {
        null == a && (a = 1);
        for (n.Initted || n.Init(); n.ActiveTweensHead.tweenNext != n.ActiveTweensHead;) {
            var b = n.ActiveTweensHead.tweenNext;
            b._level >= a && b.stop();
            b.tweenPrev == n.ActiveTweensHead && n.ProcessedTweensHead.listAppendTween(b)
        }
        a = n.ActiveTweensHead;
        n.ActiveTweensHead = n.ProcessedTweensHead;
        n.ProcessedTweensHead = a
    }; n.PauseActiveAndIncreaseLevel = function() {
        var a = n.GetCurrentLevel();
        n.LevelPauses[a] = n.PauseAndGetAllActive();
        n.IncreaseLevel()
    }; n.PauseAndGetAllActive = function(a) {
        null == a && (a = -1);
        n.Initted || n.Init();
        0 > a && (a = n.CurLevel);
        for (var b = []; n.ActiveTweensHead.tweenNext != n.ActiveTweensHead;) {
            var c = n.ActiveTweensHead.tweenNext;
            c._level == a && (c.pause(), b.push(c));
            c.tweenPrev == n.ActiveTweensHead && n.ProcessedTweensHead.listAppendTween(c)
        }
        a = n.ActiveTweensHead;
        n.ActiveTweensHead = n.ProcessedTweensHead;
        n.ProcessedTweensHead = a;
        return b
    }; n.TargetKill = function(a) {
        if (null != n.TargetMap.h.__keys__[a.__id__])
            for (a = n.TargetMap.h[a.__id__]; a.targetNext !=
                a;) a.targetNext.kill()
    }; n.AddToTarget = function(a) {
        null != a.target && (null == n.TargetMap.h.__keys__[a.target.__id__] && n.TargetMap.set(a.target, new n), n.TargetMap.h[a.target.__id__].listAppendTarget(a))
    }; n.DelayedCall = function(a, b, c, d) {
        a = new n(d, a, null);
        a.onComplete(b, c);
        a.onRepeat(b, c);
        a.start();
        return a
    }; n.To = function(a, b, c) {
        a = new n(a, b, c);
        a.start();
        return a
    }; n.AddToEventQueue = function(a) {
        var b = a.timeEnd % n.NumMSBuckets;
        null == n.MSBuckets[b] && (n.MSBuckets[b] = new n);
        n.MSBuckets[b].listAppendEvent(a)
    }; n.CallMethod =
    function(a, b) {
        if (null == a) return null;
        null == b && (b = []);
        return a.apply(a, b)
    }; n.prototype = {
        kill: function() {
            this.stop();
            this.alive = !1
        },
        listRemoveTarget: function() {
            null != this.target && this.targetPrev != this && (this.targetPrev.targetNext = this.targetNext, this.targetNext.targetPrev = this.targetPrev, this.targetPrev = this.targetNext = this, n.TargetMap.h[this.target.__id__].targetNext == n.TargetMap.h[this.target.__id__] && n.TargetMap.remove(this.target))
        },
        listAppendTarget: function(a) {
            a.listRemoveTarget();
            a.targetPrev =
                this.targetPrev;
            a.targetNext = this;
            this.targetPrev = this.targetPrev.targetNext = a
        },
        listRemoveTween: function() {
            this.tweenPrev.tweenNext = this.tweenNext;
            this.tweenNext.tweenPrev = this.tweenPrev;
            this.tweenPrev = this.tweenNext = this
        },
        listAppendTween: function(a) {
            a.listRemoveTween();
            a.tweenPrev = this.tweenPrev;
            a.tweenNext = this;
            this.tweenPrev = this.tweenPrev.tweenNext = a
        },
        listRemoveEvent: function() {
            this.eventPrev.eventNext = this.eventNext;
            this.eventNext.eventPrev = this.eventPrev;
            this.eventPrev = this.eventNext = this
        },
        listAppendEvent: function(a) {
            a.listRemoveEvent();
            a.eventPrev = this.eventPrev;
            a.eventNext = this;
            this.eventPrev = this.eventPrev.eventNext = a
        },
        setStartEndTimes: function() {
            this.timeOffset = this.timeStart + this.timeDelay;
            this.timeEnd = this.timeOffset + this.duration
        },
        ease: function(a) {
            this.easing = a;
            return this
        },
        update: function(a) {
            if (null != this.target) {
                var b;
                a = (a - this.timeOffset) / this.duration;
                1 < a ? a = 1 : 0 > a && (a = 0);
                this.initialized || this.initialize();
                if (this.special) {
                    a = this.easing.calculate(this._reverse ? 1 - a : a);
                    for (var c,
                            d = 0, e = this.properties.length; d < e;) b = d++, b = this.properties[b], !this._smartRotation || "rotation" != b.name && "rotationX" != b.name && "rotationY" != b.name && "rotationZ" != b.name ? c = b.start + b.change * a : (c = b.change % 360, 180 < c ? c -= 360 : -180 > c && (c += 360), c = b.start + c * a), c = this._snapping ? Math.round(c) : c, b.isField ? b.target[b.name] = c : Z.setProperty(b.target, b.name, c)
                } else
                    for (a = this.easing.calculate(this._reverse ? 1 - a : a), d = 0, e = this.properties.length; d < e;) b = d++, b = this.properties[b], c = b.start + b.change * a, b.isField ? b.target[b.name] =
                        c : Z.setProperty(b.target, b.name, c)
            }
            n.CallMethod(this._onUpdate, this._onUpdateParams)
        },
        processEndEvent: function(a) {
            if (0 == this._repeat) {
                if (null != this.target && this.toggleVisible) {
                    a = this.target;
                    var b = null,
                        b = Object.prototype.hasOwnProperty.call(a, "alpha") ? Z.field(a, "alpha") : Z.getProperty(a, "alpha");
                    a = 0 == b
                } else a = !1;
                a && (a = this.target, !Object.prototype.hasOwnProperty.call(a, "visible") || a.__properties__ && a.__properties__.set_visible ? Z.setProperty(a, "visible", !1) : a.visible = !1);
                this.complete(!0)
            } else this._reflect &&
                (this._reverse = !this._reverse), 0 < this._repeat && this._repeat--, n.CallMethod(this._onRepeat, this._onRepeatParams), this.timeStart = a, this.setStartEndTimes(), n.AddToEventQueue(this)
        },
        complete: function(a) {
            null == a && (a = !0);
            a && (n.CallMethod(this._onUpdate, this._onUpdateParams), n.CallMethod(this._onComplete, this._onCompleteParams));
            this.stop()
        },
        start: function() {
            !this.alive || this.active && !this.paused || (this.active = !0, this.paused = !1, this._repeat = this.initialRepeat, this.timeStart = n.GetTimeMS(), this.setStartEndTimes(),
                n.ActiveTweensHead.listAppendTween(this), n.AddToEventQueue(this), n.AddToTarget(this))
        },
        stop: function() {
            this.active && (this.paused = this.active = !1, n.CallMethod(this._onStop, this._onStopParams), this.listRemoveTween(), this.listRemoveEvent(), this.listRemoveTarget())
        },
        pause: function() {
            !this.paused && this.active && (this.paused = !0, this.timePaused = n.GetTimeMS(), n.CallMethod(this._onPause, this._onPauseParams), this.listRemoveEvent(), this.listRemoveTween(), this.listRemoveTarget())
        },
        reflect: function(a) {
            null == a &&
                (a = !0);
            0 == this._repeat && this.repeat(1);
            this._reflect = a;
            return this
        },
        repeat: function(a) {
            null == a && (a = -1);
            this._repeat = this.initialRepeat = a;
            return this
        },
        onUpdate: function(a, b) {
            this._onUpdate = a;
            this._onUpdateParams = b;
            return this
        },
        onRepeat: function(a, b) {
            this._onRepeat = a;
            this._onRepeatParams = b;
            return this
        },
        onComplete: function(a, b) {
            this._onComplete = a;
            this._onCompleteParams = b;
            return this
        },
        initialize: function() {
            for (var a, b = 0, c = Z.fields(this.propertiesObject); b < c.length;) {
                var d = c[b];
                ++b;
                var e = !0;
                !Object.prototype.hasOwnProperty.call(this.target,
                    d) || this.target.__properties__ && this.target.__properties__["set_" + d] ? (e = !1, a = Z.getProperty(this.target, d)) : a = Z.field(this.target, d);
                if ("number" == typeof a) {
                    var f = this.propertiesObject,
                        r = null,
                        f = r = Object.prototype.hasOwnProperty.call(f, d) ? Z.field(f, d) : Z.getProperty(f, d);
                    null == a && (a = 0);
                    null == f && (f = 0);
                    a = new Sc(this.target, d, a, f, e);
                    this.properties.push(a)
                }
            }
            this.initialized = !0
        },
        __class__: n
    };
    var L = s["ozity.Message"] = {
        __ename__: ["ozity", "Message"],
        __constructs__: "PLAYER_DIE PLAYER_WIN PLAYER_JUMP SMASH_BRICK ENEMY_DIE SHOW_JUMP GET_COIN GET_KEY GET_BANANA OPEN_DOOR SPRING_JUMP BARREL_SHOT ENTER_BARREL TELEPORT TRIGGER".split(" ")
    }; L.PLAYER_DIE = ["PLAYER_DIE", 0]; L.PLAYER_DIE.toString = F; L.PLAYER_DIE.__enum__ = L; L.PLAYER_WIN = ["PLAYER_WIN", 1]; L.PLAYER_WIN.toString = F; L.PLAYER_WIN.__enum__ = L; L.PLAYER_JUMP = ["PLAYER_JUMP", 2]; L.PLAYER_JUMP.toString = F; L.PLAYER_JUMP.__enum__ = L; L.SMASH_BRICK = ["SMASH_BRICK", 3]; L.SMASH_BRICK.toString = F; L.SMASH_BRICK.__enum__ = L; L.ENEMY_DIE = ["ENEMY_DIE", 4]; L.ENEMY_DIE.toString = F; L.ENEMY_DIE.__enum__ = L; L.SHOW_JUMP = ["SHOW_JUMP", 5]; L.SHOW_JUMP.toString = F; L.SHOW_JUMP.__enum__ = L; L.GET_COIN = ["GET_COIN", 6]; L.GET_COIN.toString =
    F; L.GET_COIN.__enum__ = L; L.GET_KEY = function(a) {
        a = ["GET_KEY", 7, a];
        a.__enum__ = L;
        a.toString = F;
        return a
    }; L.GET_BANANA = ["GET_BANANA", 8]; L.GET_BANANA.toString = F; L.GET_BANANA.__enum__ = L; L.OPEN_DOOR = ["OPEN_DOOR", 9]; L.OPEN_DOOR.toString = F; L.OPEN_DOOR.__enum__ = L; L.SPRING_JUMP = ["SPRING_JUMP", 10]; L.SPRING_JUMP.toString = F; L.SPRING_JUMP.__enum__ = L; L.BARREL_SHOT = ["BARREL_SHOT", 11]; L.BARREL_SHOT.toString = F; L.BARREL_SHOT.__enum__ = L; L.ENTER_BARREL = ["ENTER_BARREL", 12]; L.ENTER_BARREL.toString = F; L.ENTER_BARREL.__enum__ =
    L; L.TELEPORT = ["TELEPORT", 13]; L.TELEPORT.toString = F; L.TELEPORT.__enum__ = L; L.TRIGGER = ["TRIGGER", 14]; L.TRIGGER.toString = F; L.TRIGGER.__enum__ = L;
    var Q = s["ozity.ColType"] = {
        __ename__: ["ozity", "ColType"],
        __constructs__: "Player Dispatcher Enemy Key Banana Door TeleportIn AnyType Shuryken Spikes Barrel Bumpy Collector".split(" ")
    }; Q.Player = ["Player", 0]; Q.Player.toString = F; Q.Player.__enum__ = Q; Q.Dispatcher = ["Dispatcher", 1]; Q.Dispatcher.toString = F; Q.Dispatcher.__enum__ = Q; Q.Enemy = ["Enemy", 2]; Q.Enemy.toString = F; Q.Enemy.__enum__ = Q; Q.Key = ["Key", 3]; Q.Key.toString = F; Q.Key.__enum__ = Q; Q.Banana = ["Banana", 4]; Q.Banana.toString = F; Q.Banana.__enum__ = Q; Q.Door = ["Door", 5]; Q.Door.toString = F; Q.Door.__enum__ = Q; Q.TeleportIn = ["TeleportIn", 6]; Q.TeleportIn.toString = F; Q.TeleportIn.__enum__ = Q; Q.AnyType = ["AnyType", 7]; Q.AnyType.toString = F; Q.AnyType.__enum__ = Q; Q.Shuryken = ["Shuryken", 8]; Q.Shuryken.toString = F; Q.Shuryken.__enum__ = Q; Q.Spikes = ["Spikes", 9]; Q.Spikes.toString = F; Q.Spikes.__enum__ = Q; Q.Barrel = ["Barrel", 10]; Q.Barrel.toString =
    F; Q.Barrel.__enum__ = Q; Q.Bumpy = ["Bumpy", 11]; Q.Bumpy.toString = F; Q.Bumpy.__enum__ = Q; Q.Collector = ["Collector", 12]; Q.Collector.toString = F; Q.Collector.__enum__ = Q;
    var Ma = s["ozity.BlockColor"] = {
        __ename__: ["ozity", "BlockColor"],
        __constructs__: ["Purple", "Orange", "Red", "Teal"]
    }; Ma.Purple = ["Purple", 0]; Ma.Purple.toString = F; Ma.Purple.__enum__ = Ma; Ma.Orange = ["Orange", 1]; Ma.Orange.toString = F; Ma.Orange.__enum__ = Ma; Ma.Red = ["Red", 2]; Ma.Red.toString = F; Ma.Red.__enum__ = Ma; Ma.Teal = ["Teal", 3]; Ma.Teal.toString = F; Ma.Teal.__enum__ =
    Ma;
    var ba = s["ozity.RightAngle"] = {
        __ename__: ["ozity", "RightAngle"],
        __constructs__: ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
    }; ba.TopLeft = ["TopLeft", 0]; ba.TopLeft.toString = F; ba.TopLeft.__enum__ = ba; ba.TopRight = ["TopRight", 1]; ba.TopRight.toString = F; ba.TopRight.__enum__ = ba; ba.BottomLeft = ["BottomLeft", 2]; ba.BottomLeft.toString = F; ba.BottomLeft.__enum__ = ba; ba.BottomRight = ["BottomRight", 3]; ba.BottomRight.toString = F; ba.BottomRight.__enum__ = ba;
    var Db = s["ozity.Axis2D"] = {
        __ename__: ["ozity", "Axis2D"],
        __constructs__: ["Vertical",
            "Horizontal"
        ]
    }; Db.Vertical = ["Vertical", 0]; Db.Vertical.toString = F; Db.Vertical.__enum__ = Db; Db.Horizontal = ["Horizontal", 1]; Db.Horizontal.toString = F; Db.Horizontal.__enum__ = Db;
    var yb = function() {}; s["ozity.OzBG"] = yb; yb.__name__ = ["ozity", "OzBG"]; yb.DrawBG = function(a, b, c, d) {
        Math.abs(f.BGMaxY - f.BGMinY);
        var e = 1;
        d = 1;
        null != oa.instance && null != oa.instance.camera ? (e = oa.instance.camera, b = -e.gameScreenEdgeX(), c = -e.gameScreenEdgeY(), d = e.getZoomX(), e = e.getZoomY()) : (b = -yb.X, c = -yb.Y);
        switch (a) {
            case 0:
                f.RenderBGImage(q.tileBGRect,
                    b % 256 * d, c % 256 * e, d, 1, Math.floor(256 * d), Math.floor(256 * e), !0, !0)
        }
    };
    var N = function(a, b, c) {
        this.gameObject = null;
        this.gameObject = a;
        this.compPrefab = b;
        this.compLevel = c
    }; s["ozity.OzComponent"] = N; N.__name__ = ["ozity", "OzComponent"]; N.GetClass = function(a) {
        var b = N.StringToClass;
        if (null != O[a] ? !b.existsReserved(a) : !b.h.hasOwnProperty(a)) {
            var b = N.StringToClass,
                c = U.resolveClass("ozity." + a);
            null != O[a] ? b.setReserved(a, c) : b.h[a] = c
        }
        b = N.StringToClass;
        return null != O[a] ? b.getReserved(a) : b.h[a]
    }; N.Init = function(a) {
        if (null ==
            N.StringToXml) {
            N.StringToXml = new X;
            for (a = a.elementsNamed("c"); a.hasNext();) {
                var b = a.next(),
                    c = N.StringToXml,
                    d = b.get("n");
                null != O[d] ? c.setReserved(d, b) : c.h[d] = b
            }
            N.StringToClass = new X
        }
    }; N.prototype = {
        DontCallMe: function() {},
        init: function() {},
        postInit: function() {},
        update: function() {},
        postUpdate: function() {},
        destroy: function() {
            n.TargetKill(this)
        },
        directMessage: function(a) {},
        __class__: N
    };
    var Ga = function(a, b, c) {
        this.num = 0;
        this.BubbleDuration = 30;
        N.call(this, a, b, c);
        null != b.get("BubbleDuration") && (this.BubbleDuration =
            K.parseInt(b.get("BubbleDuration")))
    }; s["ozity.OzBanana"] = Ga; Ga.__name__ = ["ozity", "OzBanana"]; Ga.StaticInit = function() {
        Ga.NumBananas = 0;
        m.AddCollisionListener(Q.Collector, Q.Banana, Ga.GetBanana)
    }; Ga.GetBanana = function(a, b) {
        var c = a.getComponent(z);
        if (c.isPlayer) {
            var d = b.getComponent(Ga);
            z.ProblemSolution == d.num ? (d = b.graphics.getGameSprite(), ca.EmitInCircle(d.parent, q.cmcStarGold, d.get_x() + b.geometry.x, d.get_y() + b.geometry.y, 0.1, 5, 30, 15, 0.1), b.kill(), c.eatCircle(), oa.instance.sendMessage(L.GET_BANANA)) :
                c.die()
        }
    }; Ga.__super__ = N; Ga.prototype = R(N.prototype, {
        postInit: function() {
            N.prototype.postInit.call(this);
            Ga.NumBananas++;
            z.Bananas.push(this);
            var a = this.sprNum = f.New(q.ctxtMathFont);
            a.set_x(-14);
            a.set_y(-16);
            this.gameObject.graphics.getGameSprite().addChild(this.sprNum);
            this.setNumber(z.GetPossibleAnswer())
        },
        setNumber: function(a) {
            null == a && (a = 0);
            this.num = a;
            t.TextMath(this.sprNum, "" + a, V.CENTER)
        },
        destroy: function() {
            N.prototype.destroy.call(this);
            for (var a = 0, b = z.Bananas.length; a < b;) {
                var c = a++;
                if (z.Bananas[c] ==
                    this) {
                    z.Bananas.splice(c, 1);
                    Ga.NumBananas--;
                    break
                }
            }
        },
        __class__: Ga
    });
    var Da = s["ozity.CameraState"] = {
        __ename__: ["ozity", "CameraState"],
        __constructs__: ["NORMAL", "SLOW"]
    }; Da.NORMAL = ["NORMAL", 0]; Da.NORMAL.toString = F; Da.NORMAL.__enum__ = Da; Da.SLOW = ["SLOW", 1]; Da.SLOW.toString = F; Da.SLOW.__enum__ = Da;
    var ka = function(a) {
        this.rightCCs = new va;
        this.leftCCs = new va;
        this.bottomCCs = new va;
        this.topCCs = new va;
        this.customUpdate = !1;
        this.watchable = null;
        this.lastWatchableX = this.horizontalOffset = this.curX = this.curY = this.targetX =
            this.targetY = 0;
        this.cameraState = Da.NORMAL;
        this.started = !1;
        this.earthQuakeDuration = this.earthQuakeMagnitude = 0;
        this.screenSprite = a;
        this.topYOffset = l.HEIGHT_MIN / 3;
        this.bottomYOffSet = 2 * l.HEIGHT_MIN / 3;
        ka.HORIZONTAL_OFFSET_DISTANCE = l.WIDTH_MIN / 4;
        this.horizontalOffset = ka.HORIZONTAL_OFFSET_DISTANCE / 2;
        this.isCenterFixed = !1
    }; s["ozity.OzCamera"] = ka; ka.__name__ = ["ozity", "OzCamera"]; ka.sortHorizontal = function(a, b) {
        return a.j - b.j
    }; ka.sortVertical = function(a, b) {
        return a.i - b.i
    }; ka.prototype = {
        makeCenterFixed: function() {
            this.isCenterFixed = !0
        },
        setWatchable: function(a) {
            this.watchable = a;
            this.targetX = a.physics.x - l.WIDTH_MIN / 2;
            this.targetY = a.physics.y - l.HEIGHT_MIN / 2;
            this.lastWatchableX = a.physics.x
        },
        getAdjustedCamX: function(a, b, c) {
            a + b > this.rightX && (a = this.rightX - b);
            a < this.leftX && (a = this.leftX);
            this.rightX - this.leftX < b && (a = this.leftX - (b - (this.rightX - this.leftX)) / 2);
            a + b > this.boundsRightX && (a = this.boundsRightX - b);
            a < this.boundsLeftX && (a = this.boundsLeftX);
            return a
        },
        getAdjustedCamY: function(a, b, c) {
            a + b > this.bottomY && (a = this.bottomY - b);
            a < this.topY &&
                (a = this.topY);
            this.bottomY - this.topY < b && (a = this.topY - (b - (this.bottomY - this.topY)) / 2);
            a + b > this.boundsBottomY && (a = this.boundsBottomY - b);
            a < this.boundsTopY && (a = this.boundsTopY);
            return a
        },
        update: function() {
            if (!this.customUpdate) {
                var a = oa.instance.tileMap,
                    b = this.getZoomX(),
                    c = this.getZoomY();
                if (null != this.watchable) {
                    var d = ka.MAX_CAMERA_SPEED;
                    this.started ? this.cameraState == Da.SLOW && (d /= 3) : (this.started = !0, d = 1E5, this.curX = this.targetX, this.curY = this.targetY);
                    var e = this.watchable.physics.x,
                        p = this.watchable.physics.y,
                        r = this.watchable.geometry.getVerticalBoundary(-1),
                        g = this.watchable.geometry.getVerticalBoundary(1);
                    this.isCenterFixed ? (this.targetX = e - l.WIDTH / 2, this.targetY = p - l.HEIGHT / 2) : (p + r < this.targetY + this.topYOffset && (this.targetY = p + r - this.topYOffset), p + g > this.targetY + this.bottomYOffSet && (this.targetY = p + g - this.bottomYOffSet), this.horizontalOffset += 0.8 * (this.watchable.physics.x - this.lastWatchableX), this.horizontalOffset = Math.max(-ka.HORIZONTAL_OFFSET_DISTANCE / 2, Math.min(this.horizontalOffset, ka.HORIZONTAL_OFFSET_DISTANCE /
                        2)), this.targetX = this.watchable.physics.x - l.WIDTH / 2 + this.horizontalOffset);
                    this.lastWatchableX = this.watchable.physics.x;
                    p = Math.floor((p + this.watchable.geometry.y - a.offsetY) / a.tileSize);
                    e = Math.floor((e + this.watchable.geometry.x - a.offsetX) / a.tileSize);
                    this.boundsTopY = 0 * a.tileSize + a.offsetY;
                    this.boundsBottomY = a.allocRows * a.tileSize + a.offsetY;
                    this.boundsLeftX = 0 * a.tileSize + a.offsetX;
                    this.boundsRightX = a.allocCols * a.tileSize + a.offsetX;
                    this.topY = this.boundsTopY;
                    for (r = this.topCCs.keys(); r.hasNext();)
                        for (var g =
                                r.next(), k = this.topCCs.h[g], h = 0, m = k.length; h < m;) {
                            var w = h++,
                                n = k[w];
                            if (w + 1 == k.length)
                                if (n.j <= e && n.rightAngle == ba.BottomRight) {
                                    if (g == p ? n.crossed = !0 : g < p && (n.crossed = !1), g <= p || n.crossed && !n.allowDisable) this.topY = Math.max(this.topY, g * a.tileSize + a.offsetY + n.offset)
                                } else n.crossed = !1;
                            else if (w = k[w + 1], n.j <= e && w.j >= e && n.rightAngle == ba.BottomRight && w.rightAngle == ba.BottomLeft) {
                                if (g == p ? n.crossed = !0 : g < p && (n.crossed = !1), g <= p || n.crossed && !n.allowDisable) this.topY = Math.max(this.topY, g * a.tileSize + a.offsetY + n.offset)
                            } else n.crossed = !1
                        }
                    this.bottomY = this.boundsBottomY;
                    for (r = this.bottomCCs.keys(); r.hasNext();)
                        for (g = r.next(), k = this.bottomCCs.h[g], h = 0, m = k.length; h < m;)
                            if (w = h++, n = k[w], w + 1 == k.length)
                                if (n.j <= e && n.rightAngle == ba.TopRight) {
                                    if (g == p ? n.crossed = !0 : g > p && (n.crossed = !1), g >= p || n.crossed && !n.allowDisable) this.bottomY = Math.min(this.bottomY, (g + 1) * a.tileSize + a.offsetY + n.offset)
                                } else n.crossed = !1;
                    else if (w = k[w + 1], n.j <= e && w.j >= e && n.rightAngle == ba.TopRight && w.rightAngle == ba.TopLeft) {
                        if (g == p ? n.crossed = !0 : g > p && (n.crossed = !1), g >= p || n.crossed &&
                            !n.allowDisable) this.bottomY = Math.min(this.bottomY, (g + 1) * a.tileSize + a.offsetY + n.offset)
                    } else n.crossed = !1;
                    this.leftX = this.boundsLeftX;
                    for (r = this.leftCCs.keys(); r.hasNext();)
                        for (g = r.next(), k = this.leftCCs.h[g], h = 0, m = k.length; h < m;)
                            if (w = h++, n = k[w], w + 1 == k.length)
                                if (n.i <= p && n.rightAngle == ba.BottomRight) {
                                    if (g == e ? n.crossed = !0 : g < e && (n.crossed = !1), g <= e || n.crossed && !n.allowDisable) this.leftX = Math.max(this.leftX, g * a.tileSize + a.offsetX + n.offset)
                                } else n.crossed = !1;
                    else if (w = k[w + 1], n.i <= p && w.i >= p && n.rightAngle ==
                        ba.BottomRight && w.rightAngle == ba.TopRight) {
                        if (g == e ? n.crossed = !0 : g < e && (n.crossed = !1), g <= e || n.crossed && !n.allowDisable) this.leftX = Math.max(this.leftX, g * a.tileSize + a.offsetX + n.offset)
                    } else n.crossed = !1;
                    this.rightX = this.boundsRightX;
                    for (r = this.rightCCs.keys(); r.hasNext();)
                        for (g = r.next(), k = this.rightCCs.h[g], h = 0, m = k.length; h < m;)
                            if (w = h++, n = k[w], w + 1 == k.length)
                                if (n.i <= p && n.rightAngle == ba.BottomLeft) {
                                    if (g == e ? n.crossed = !0 : g > e && (n.crossed = !1), g >= e || n.crossed && !n.allowDisable) this.rightX = Math.min(this.rightX,
                                        (g + 1) * a.tileSize + a.offsetX + n.offset)
                                } else n.crossed = !1;
                    else if (w = k[w + 1], n.i <= p && w.i >= p && n.rightAngle == ba.BottomLeft && w.rightAngle == ba.TopLeft) {
                        if (g == e ? n.crossed = !0 : g > e && (n.crossed = !1), g >= e || n.crossed && !n.allowDisable) this.rightX = Math.min(this.rightX, (g + 1) * a.tileSize + a.offsetX + n.offset)
                    } else n.crossed = !1;
                    this.slackX = Math.floor((l.WIDTH - l.WIDTH_MIN) / 2);
                    this.slackY = Math.floor((l.HEIGHT - l.HEIGHT_MIN) / 2);
                    p = l.WIDTH / b;
                    e = l.HEIGHT / c;
                    r = (l.WIDTH - p) / 2;
                    g = (l.HEIGHT - e) / 2;
                    this.targetX = this.getAdjustedCamX(this.targetX +
                        r, p);
                    this.targetY = this.getAdjustedCamY(this.targetY + g, e);
                    this.targetX = this.targetX - r + this.slackX / b;
                    this.targetY = this.targetY - g + this.slackY / c;
                    x.ReachMaxSpeed2D(this.curX, this.curY, this.targetX, this.targetY, d, ka.tempVec);
                    this.curX = Math.round(ka.tempVec[0]);
                    this.curY = Math.round(ka.tempVec[1])
                } else this.curX = this.curY = 0;
                this.screenSprite.set_x(-(this.curX + l.WIDTH_MIN * (1 - 1 / b) / 2) * b);
                this.screenSprite.set_y(-(this.curY + l.HEIGHT_MIN * (1 - 1 / c) / 2) * c);
                0 != this.earthQuakeDuration && (b = this.screenSprite, b.set_x(b.get_x() +
                    Math.round(Math.random() * this.earthQuakeMagnitude * 2 - this.earthQuakeMagnitude)), b = this.screenSprite, b.set_y(b.get_y() + Math.round(Math.random() * this.earthQuakeMagnitude * 2 - this.earthQuakeMagnitude)));
                0 < this.earthQuakeDuration && this.earthQuakeDuration--;
                ka.zoomedThisFrame && (this.screenSprite._updateOldValues(), ka.zoomedThisFrame = !1);
                f.UpdateBG(oa.instance.bgSprite, -this.screenSprite.get_x(), -this.screenSprite.get_y(), 0 * a.tileSize + a.offsetY, a.allocRows * a.tileSize + a.offsetY - l.HEIGHT_MIN)
            }
        },
        getZoomX: function() {
            return this.screenSprite.get_scaleX()
        },
        getZoomY: function() {
            return this.screenSprite.get_scaleY()
        },
        gameScreenEdgeX: function() {
            var a = this.screenSprite;
            return -((a.noInterpolation ? a._x : Math.round(128 * ((1 - f.DeltaT) * a._oldX + f.DeltaT * a._x)) / 128) + Math.floor((l.WIDTH - l.WIDTH_MIN) / 2)) / this.getZoomX()
        },
        gameScreenEdgeY: function() {
            var a = this.screenSprite;
            return -((a.noInterpolation ? a._y : Math.round(128 * ((1 - f.DeltaT) * a._oldY + f.DeltaT * a._y)) / 128) + Math.floor((l.HEIGHT - l.HEIGHT_MIN) / 2)) / this.getZoomY()
        },
        toWorldX: function(a) {
            return a / this.getZoomX() + this.gameScreenEdgeX()
        },
        toWorldY: function(a) {
            return a / this.getZoomY() + this.gameScreenEdgeY()
        },
        addCameraController: function(a) {
            if (1 == a.axis[1]) {
                var b = null,
                    b = a.i;
                a.rightAngle == ba.BottomLeft || a.rightAngle == ba.BottomRight ? (this.topCCs.h.hasOwnProperty(b) || (this.topCCs.h[b] = []), b = this.topCCs.h[b]) : (this.bottomCCs.h.hasOwnProperty(b) || (this.bottomCCs.h[b] = []), b = this.bottomCCs.h[b]);
                b.push(a);
                b.sort(ka.sortHorizontal)
            } else b = null, b = a.j, a.rightAngle == ba.TopRight || a.rightAngle == ba.BottomRight ? (this.leftCCs.h.hasOwnProperty(b) || (this.leftCCs.h[b] = []), b = this.leftCCs.h[b]) : (this.rightCCs.h.hasOwnProperty(b) || (this.rightCCs.h[b] = []), b = this.rightCCs.h[b]), b.push(a), b.sort(ka.sortVertical)
        },
        addEarthQuake: function(a, b) {
            null == b && (b = 3);
            this.earthQuakeMagnitude = b;
            0 <= this.earthQuakeDuration && this.earthQuakeDuration < a && (this.earthQuakeDuration = a)
        },
        __class__: ka
    };
    var Tc = function(a, b, c) {
        this.crossed = !1;
        this.i = this.j = 0;
        this.allowDisable = !0;
        this.offset = 0;
        this.rightAngle = ba.BottomLeft;
        this.axis = Db.Horizontal;
        N.call(this, a, b, c);
        null != c.get("axis") && (this.axis =
            U.createEnum(Db, c.get("axis"), null));
        null != c.get("rightAngle") && (this.rightAngle = U.createEnum(ba, c.get("rightAngle"), null));
        null != c.get("offset") && (this.offset = parseFloat(c.get("offset")));
        null != c.get("allowDisable") && (this.allowDisable = "true" == c.get("allowDisable"))
    }; s["ozity.OzCameraController"] = Tc; Tc.__name__ = ["ozity", "OzCameraController"]; Tc.__super__ = N; Tc.prototype = R(N.prototype, {
        init: function() {
            var a = this.gameObject.gameSystem.tileMap;
            this.i = Math.floor((this.gameObject.transform.y + this.gameObject.geometry.y -
                a.offsetY) / a.tileSize);
            a = this.gameObject.gameSystem.tileMap;
            this.j = Math.floor((this.gameObject.transform.x + this.gameObject.geometry.x - a.offsetX) / a.tileSize);
            this.gameObject.gameSystem.camera.addCameraController(this)
        },
        __class__: Tc
    });
    var ib = function(a, b, c) {
        this.visible = !1;
        this.killOnDispatch = !0;
        this.message = L.PLAYER_WIN;
        N.call(this, a, b, c);
        null != c.get("message") && (this.message = U.createEnum(L, c.get("message"), null));
        null != c.get("killOnDispatch") && (this.killOnDispatch = "true" == c.get("killOnDispatch"));
        null != c.get("visible") && (this.visible = "true" == c.get("visible"))
    }; s["ozity.OzEventSender"] = ib; ib.__name__ = ["ozity", "OzEventSender"]; ib.StaticInit = function() {
        m.AddCollisionListener(Q.Player, Q.Dispatcher, ib.DispatchEvent)
    }; ib.DispatchEvent = function(a, b) {
        var c = S.__cast(b.getComponent(ib), ib);
        oa.instance.sendMessage(c.message);
        c.killOnDispatch && (c.gameObject.dead = !0)
    }; ib.__super__ = N; ib.prototype = R(N.prototype, {
        postInit: function() {
            this.gameObject.graphics.getGameSprite().set_visible(this.visible)
        },
        __class__: ib
    });
    var Ha = function(a, b, c) {
        this.cnt = 0;
        this.transform = this.geometry = this.graphics = this.physics = this.children = null;
        this.dead = !1;
        this.gameSystem = a;
        this.objPrefab = b;
        this.objLevel = c;
        this.components = [];
        this.transform = new jb(this, c);
        this.components.push(this.transform);
        var d = null;
        if (null != c)
            for (var e = c.elementsNamed("geometry"); e.hasNext();) {
                d = e.next();
                break
            }
        if (null == d && (d = null, null != b))
            for (e = b.elementsNamed("geometry"); e.hasNext();) {
                d = e.next();
                break
            }
        null != d && (this.geometry = new ja(this, d), this.components.push(this.geometry));
        d = null;
        if (null != b)
            for (e = b.elementsNamed("graphics"); e.hasNext();) {
                d = e.next();
                break
            }
        null != d && (this.graphics = new da(this, d), this.components.push(this.graphics));
        for (d = b.elements(); d.hasNext();) {
            e = d.next();
            if (e.nodeType != B.Element) throw new D("Bad node type, expected Element but found " + e.nodeType);
            var f = null;
            switch (e.nodeName) {
                case "body":
                    if (null != this.physics) throw new D(new Bb("Physics already initialized"));
                    f = this.physics = new m(this, e);
                    break;
                case "c":
                    var f = e.get("n"),
                        r = null;
                    if (null != c)
                        for (var g =
                                c.elementsNamed("c"); g.hasNext();) {
                            var k = g.next(),
                                h = k.get("n");
                            if (null != h && h == f) {
                                r = k;
                                break
                            }
                        }
                    null == r && (r = e);
                    f = U.createInstance(N.GetClass(f), [this, e, r])
            }
            null != f && this.components.push(f)
        }
        for (b = b.elementsNamed("object"); b.hasNext();) c = b.next(), null == this.children && (this.children = []), e = Ha.StringToXml, d = c.get("type"), c = new Ha(a, null != O[d] ? e.getReserved(d) : e.h[d], c), c.transform.fromParent(this.transform), a.addGameObject(c), this.children.push(c)
    }; s["ozity.OzGameObject"] = Ha; Ha.__name__ = ["ozity", "OzGameObject"]; Ha.Init = function(a) {
        if (null == Ha.StringToXml) {
            Ha.StringToXml = new X;
            var b = null;
            if (null != a)
                for (a = a.elementsNamed("objects"); a.hasNext();) {
                    b = a.next();
                    break
                }
            for (b = b.elementsNamed("object"); b.hasNext();) {
                a = b.next();
                var c = Ha.StringToXml,
                    d = a.get("type");
                null != O[d] ? c.setReserved(d, a) : c.h[d] = a
            }
        }
    }; Ha.prototype = {
        getComponent: function(a) {
            for (var b = 0, c = this.components; b < c.length;) {
                var d = c[b];
                ++b;
                if (S.__instanceof(d, a)) return d
            }
            return null
        },
        init: function() {
            for (var a = 0, b = this.components; a < b.length;) {
                var c = b[a];
                ++a;
                c.init()
            }
        },
        postInit: function() {
            for (var a = 0, b = this.components; a < b.length;) {
                var c = b[a];
                ++a;
                c.postInit()
            }
        },
        update: function() {
            this.cnt++;
            for (var a = 0, b = this.components; a < b.length;) {
                var c = b[a];
                ++a;
                c.update()
            }
        },
        postUpdate: function() {
            for (var a = 0, b = this.components; a < b.length;) {
                var c = b[a];
                ++a;
                c.postUpdate()
            }
        },
        destroy: function() {
            n.TargetKill(this);
            this.dead = !0;
            for (var a = this.components.length, b = 0; b < a;) {
                var c = b++;
                this.components[a - c - 1].destroy()
            }
        },
        getType: function() {
            return null != this.objLevel && null != this.objLevel.get("type") ?
                this.objLevel.get("type") : null != this.objPrefab && null != this.objPrefab.get("type") ? this.objPrefab.get("type") : null
        },
        kill: function() {
            this.dead = !0
        },
        __class__: Ha
    };
    var oa = function(a, b, c, d, e, p, r, g) {
        null == g && (g = 0);
        null == r && (r = !1);
        this.eventsListeners = [];
        this.worldLeft = this.worldRight = this.worldTop = this.worldBottom = -1;
        this.player = null;
        this.updateFrame = this.deltaTime = this.flags = 0;
        this.gravity = 1E3;
        this.levelProgress = this.levelXml = null;
        this.updatingWorld = !1;
        this.bgSprite = null;
        this.pausedCounter = 0;
        oa.instance =
            this;
        a.addChild(this.doc = f.New());
        this.levelXml = b;
        this.tileMap = c;
        this.gravity = d;
        this.bgSprite = e;
        this.flags = g;
        this.levelProgress = $a.getInstance(t.currentLevel);
        this.levelProgress.clearTemps();
        this.worldLeft = -1 * c.tileSize + c.offsetX;
        this.worldTop = -1 * c.tileSize + c.offsetY;
        this.worldRight = (c.allocCols + 1) * c.tileSize + c.offsetX;
        this.worldBottom = (c.allocRows + 1) * c.tileSize + c.offsetY;
        this.gameObjects = [];
        m.PreStaticInit();
        z.StaticInit();
        Ga.StaticInit();
        ib.StaticInit();
        this.doc.addChild(this.objectSprite = f.New());
        this.camera = new ka(this.objectSprite);
        this.objectSpriteDepths = [];
        a = 0;
        for (d = oa.NUM_GFX_LAYERS; a < d;) e = a++, this.objectSpriteDepths[e] = f.New(), this.objectSprite.addChild(this.objectSpriteDepths[e]), this.objectSpriteDepths[e].flags |= 256, c.depthOffset <= e && e - c.depthOffset < c.numLayers && (this.objectSprite.addChild(this.tileSprite = f.New(null, W.TILEMAP)), this.tileSprite.tileMap = c, this.tileSprite.setTileLayer(e - c.depthOffset));
        this.objectSprite.addChild(this.topWorldSprite = f.New());
        this.topWorldSprite.flags |=
            256;
        this.updatingWorld = !0;
        c = this.pausedCounter;
        for (a = b.elements(); a.hasNext();) e = a.next(), d = e.get("type"), this.firstPriority(d) && (p = Ha.StringToXml, e = new Ha(this, null != O[d] ? p.getReserved(d) : p.h[d], e), "player" == d && (this.player = e), this.addGameObject(e), e.init(), e.postInit());
        null != this.player && r && (this.camera.setWatchable(this.player), this.camera.update());
        for (b = b.elements(); b.hasNext();) r = b.next(), a = r.get("type"), this.firstPriority(a) || (d = Ha.StringToXml, r = new Ha(this, null != O[a] ? d.getReserved(a) : d.h[a],
            r), this.addGameObject(r));
        for (b = 0; b < this.gameObjects.length;) this.firstPriority(this.gameObjects[b].objLevel.get("type")) ? ++b : this.gameObjects[b++].init();
        for (b = 0; b < this.gameObjects.length;) this.firstPriority(this.gameObjects[b].objLevel.get("type")) ? ++b : this.gameObjects[b++].postInit();
        this.updatingWorld = !1;
        this.adjustPauseAfterUpdate(c)
    }; s["ozity.OzGameSystem"] = oa; oa.__name__ = ["ozity", "OzGameSystem"]; oa.Init = function() {
        Ha.Init(t.definitionsXML);
        N.Init(t.componentsXML)
    }; oa.prototype = {
        getPlayer: function() {
            return this.player
        },
        setPlayer: function(a) {
            this.player = a
        },
        firstPriority: function(a) {
            return "player" != a && "checkpoint" != a ? "cameracontroller" == a : !0
        },
        adjustPauseAfterUpdate: function(a) {
            for (var b = this.pausedCounter; a < b;) a++, n.PauseActiveAndIncreaseLevel()
        },
        update: function(a) {
            if (!(0 < this.pausedCounter)) {
                this.deltaTime = a *= oa.WORLD_SPEED_FACTOR;
                this.updatingWorld = !0;
                for (var b = this.pausedCounter, c = 0, d = this.gameObjects; c < d.length;) {
                    var e = d[c];
                    ++c;
                    e.update()
                }
                m.Update(this.gameObjects, this.tileMap, a);
                a = 0;
                for (c = this.gameObjects; a <
                    c.length;) d = c[a], ++a, d.postUpdate();
                this.camera.update();
                for (a = 0; a < this.gameObjects.length;) c = this.gameObjects[a], null != c.physics && (c.physics.x < this.worldLeft - 300 && 0 >= (this.flags & 1) || c.physics.y < this.worldTop - 300 || c.physics.x > this.worldRight + 300 && 0 >= (this.flags & 1) || c.physics.y > this.worldBottom + 300) && (c.dead = !0), ++a;
                for (a = 0; a < this.gameObjects.length;) this.gameObjects[a].dead ? (this.gameObjects[a].destroy(), this.gameObjects.splice(a, 1)) : ++a;
                this.updateFrame++;
                this.updatingWorld = !1;
                this.adjustPauseAfterUpdate(b)
            }
        },
        destroy: function() {
            for (; 0 < this.gameObjects.length;) this.gameObjects[0].destroy(), this.gameObjects.splice(0, 1);
            this.objectSprite.clear()
        },
        createLazyGameObjectByStringId: function(a, b, c) {
            null == c && (c = !0);
            var d = Ha.StringToXml;
            a = new Ha(oa.instance, null != O[a] ? d.getReserved(a) : d.h[a], b);
            c && this.addGameObject(a);
            return a
        },
        addGameObject: function(a) {
            this.gameObjects.push(a)
        },
        addSprite: function(a, b) {
            this.objectSpriteDepths[b].addChild(a)
        },
        addEventsListener: function(a) {
            this.eventsListeners.push(a)
        },
        sendMessage: function(a) {
            for (var b =
                    0, c = this.eventsListeners; b < c.length;) {
                var d = c[b];
                ++b;
                d(a)
            }
        },
        __class__: oa
    };
    var ja = function(a, b) {
        this.vx = this.vy = null;
        this.flags = 0;
        this.controlPoints = this.curvePointsX = this.curvePointsY = null;
        N.call(this, a, null, b);
        this.x = this.y = this.degrees = this.halfWidth = this.halfHeight = this.radius = 0;
        null != b && this.fromXML()
    }; s["ozity.OzGeometry"] = ja; ja.__name__ = ["ozity", "OzGeometry"]; ja.GetXYFromBezier = function(a, b, c, d, e, f, r, g, k, h) {
        h.x = (1 - a) * (1 - a) * (1 - a) * b + 3 * (1 - a) * (1 - a) * a * d + 3 * (1 - a) * a * a * f + a * a * a * g;
        h.y = (1 - a) * (1 - a) * (1 - a) *
            c + 3 * (1 - a) * (1 - a) * a * e + 3 * (1 - a) * a * a * r + a * a * a * k
    }; ja.ApproximateBezierLength = function(a, b, c, d, e, f, r, g, k) {
        for (var h = 0, m = a, l = b, n = 0; 20 > n;) {
            var q = (n++ + 1) / 21;
            k.x = (1 - q) * (1 - q) * (1 - q) * a + 3 * (1 - q) * (1 - q) * q * c + 3 * (1 - q) * q * q * e + q * q * q * r;
            k.y = (1 - q) * (1 - q) * (1 - q) * b + 3 * (1 - q) * (1 - q) * q * d + 3 * (1 - q) * q * q * f + q * q * q * g;
            h += x.DistancePoints(m, l, k.x, k.y);
            m = k.x;
            l = k.y
        }
        return h += x.DistancePoints(m, l, r, g)
    }; ja.__super__ = N; ja.prototype = R(N.prototype, {
        localToGlobal: function(a, b, c, d, e, f) {
            this.applyOriginRotation(this.x + d, this.y + e, this.degrees, f);
            x.rotateAroundPoint(f[0],
                f[1], c, 0, 0, f);
            f[0] += a;
            f[1] += b
        },
        globalToLocal: function(a, b, c, d, e, f) {
            x.rotateAroundPoint(d - a, e - b, -c, 0, 0, f);
            this.applyOriginRotation(f[0], f[1], -this.degrees, f)
        },
        globalFarthestVertexFromGlobalPointFromLocalPoints: function(a, b, c, d, e, f, r, g) {
            for (var k = -1, h = 0, m = 0, l = 0, n = f.length; l < n;) {
                var q = l++;
                this.applyOriginRotation(this.x + f[q], this.y + r[q], this.degrees, g);
                x.rotateAroundPoint(g[0], g[1], c, 0, 0, g);
                g[0] += a;
                g[1] += b;
                q = x.DistancePoints(d, e, g[0], g[1]);
                q > k && (k = q, h = g[0], m = g[1])
            }
            g[0] = h;
            g[1] = m
        },
        globalFarthestVertexFromGlobalLineFromLocalPoints: function(a,
            b, c, d, e, f, r, g, k, h) {
            for (var m = -1, l = 0, n = 0, q = 0, s = g.length; q < s;) {
                var v = q++;
                this.applyOriginRotation(this.x + g[v], this.y + k[v], this.degrees, h);
                x.rotateAroundPoint(h[0], h[1], c, 0, 0, h);
                h[0] += a;
                h[1] += b;
                v = x.PointLineDistance(d, e, f, r, h[0], h[1], !1);
                v > m && (m = v, l = h[0], n = h[1])
            }
            h[0] = l;
            h[1] = n
        },
        applyOriginRotation: function(a, b, c, d) {
            x.rotateAroundPoint(a, b, c, this.x, this.y, d)
        },
        adjustMinMaxXY: function(a, b) {
            a[0] = Math.min(a[0], b[0]);
            a[1] = Math.min(a[1], b[1]);
            a[2] = Math.max(a[2], b[0]);
            a[3] = Math.max(a[3], b[1])
        },
        updateCurves: function() {
            var a =
                x.GenerateControlPointsFromPath(this.vx, this.vy);
            this.curvePointsX = [];
            this.curvePointsY = [];
            this.curvePointsX.push(this.vx[0]);
            this.curvePointsY.push(this.vy[0]);
            for (var b = new xa, c = 0, d = this.vx.length - 1; c < d;) {
                for (var e = c++, f = ja.ApproximateBezierLength(this.vx[e], this.vy[e], a[e].x1, a[e].y1, a[e].x2, a[e].y2, this.vx[e + 1], this.vy[e + 1], b), f = Math.round(f / ja.CURVE_SEGMENT_LENGTH), r = 0, g = f; r < g;) {
                    var k = (r++ + 1) / (f + 1),
                        h = this.vy[e],
                        m = a[e].y1,
                        l = a[e].y2,
                        n = this.vy[e + 1];
                    b.x = (1 - k) * (1 - k) * (1 - k) * this.vx[e] + 3 * (1 - k) * (1 - k) *
                        k * a[e].x1 + 3 * (1 - k) * k * k * a[e].x2 + k * k * k * this.vx[e + 1];
                    b.y = (1 - k) * (1 - k) * (1 - k) * h + 3 * (1 - k) * (1 - k) * k * m + 3 * (1 - k) * k * k * l + k * k * k * n;
                    this.curvePointsX.push(b.x);
                    this.curvePointsY.push(b.y)
                }
                this.curvePointsX.push(this.vx[e + 1]);
                this.curvePointsY.push(this.vy[e + 1])
            }
        },
        drawGlobalOutline: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var e = ja.temp2;
            switch (this.type) {
                case 1:
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.moveTo(e[0], e[1]);
                    this.applyOriginRotation(this.x + this.halfWidth, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    this.applyOriginRotation(this.x + this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0],
                        e[1]);
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    break;
                case 2:
                    x.rotateAroundPoint(this.x, this.y, d, 0, 0, e);
                    a.drawCircle(b + e[0], c + e[1], this.radius);
                    break;
                case 3:
                    this.applyOriginRotation(this.x + this.vx[0], this.y + this.vy[0], this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.moveTo(e[0], e[1]);
                    for (var f = 1, r = this.vx.length; f < r;) {
                        var g = f++;
                        this.applyOriginRotation(this.x +
                            this.vx[g], this.y + this.vy[g], this.degrees, e);
                        x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                        e[0] += b;
                        e[1] += c;
                        a.lineTo(e[0], e[1])
                    }
                    this.applyOriginRotation(this.x + this.vx[0], this.y + this.vy[0], this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    break;
                case 4:
                    this.applyOriginRotation(this.x + this.x1, this.y + this.y1, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.moveTo(e[0], e[1]);
                    this.applyOriginRotation(this.x + this.x2, this.y + this.y2, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    break;
                case 5:
                    x.rotateAroundPoint(this.x, this.y, d, 0, 0, e);
                    a.drawCircle(b + e[0], c + e[1], 3);
                    break;
                case 6:
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.moveTo(e[0], e[1]);
                    this.applyOriginRotation(this.x, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    this.applyOriginRotation(this.x +
                        this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], d, 0, 0, e);
                    e[0] += b;
                    e[1] += c;
                    a.lineTo(e[0], e[1]);
                    break;
                case 7:
                    if (0 < (this.flags & 1))
                        for (this.applyOriginRotation(this.x + this.curvePointsX[0], this.y + this.curvePointsY[0], this.degrees, e), x.rotateAroundPoint(e[0], e[1], d, 0, 0, e), e[0] += b, e[1] += c, a.moveTo(e[0], e[1]), f =
                            1, r = this.curvePointsX.length; f < r;) g = f++, this.applyOriginRotation(this.x + this.curvePointsX[g], this.y + this.curvePointsY[g], this.degrees, e), x.rotateAroundPoint(e[0], e[1], d, 0, 0, e), e[0] += b, e[1] += c, a.lineTo(e[0], e[1]);
                    else
                        for (this.applyOriginRotation(this.x + this.vx[0], this.y + this.vy[0], this.degrees, e), x.rotateAroundPoint(e[0], e[1], d, 0, 0, e), e[0] += b, e[1] += c, a.moveTo(e[0], e[1]), f = 1, r = this.vx.length; f < r;) g = f++, this.applyOriginRotation(this.x + this.vx[g], this.y + this.vy[g], this.degrees, e), x.rotateAroundPoint(e[0],
                            e[1], d, 0, 0, e), e[0] += b, e[1] += c, a.lineTo(e[0], e[1])
            }
        },
        drawLocalOutline: function(a) {
            switch (this.type) {
                case 1:
                    a.moveTo(-this.halfWidth, -this.halfHeight);
                    a.lineTo(this.halfWidth, -this.halfHeight);
                    a.lineTo(this.halfWidth, this.halfHeight);
                    a.lineTo(-this.halfWidth, this.halfHeight);
                    a.lineTo(-this.halfWidth, -this.halfHeight);
                    break;
                case 2:
                    a.drawCircle(0, 0, this.radius);
                    break;
                case 3:
                    a.moveTo(this.vx[0], this.vy[0]);
                    for (var b = 1, c = this.vx.length; b < c;) {
                        var d = b++;
                        a.lineTo(this.vx[d], this.vy[d])
                    }
                    a.lineTo(this.vx[0],
                        this.vy[0]);
                    break;
                case 6:
                    a.moveTo(-this.halfWidth, this.halfHeight);
                    a.lineTo(0, -this.halfHeight);
                    a.lineTo(this.halfWidth, this.halfHeight);
                    a.lineTo(-this.halfWidth, this.halfHeight);
                    break;
                case 7:
                    if (0 < (this.flags & 1))
                        for (a.moveTo(this.curvePointsX[0], this.curvePointsY[0]), b = 1, c = this.curvePointsX.length; b < c;) d = b++, a.lineTo(this.curvePointsX[d], this.curvePointsY[d]);
                    else
                        for (a.moveTo(this.vx[0], this.vy[0]), b = 1, c = this.vx.length; b < c;) d = b++, a.lineTo(this.vx[d], this.vy[d])
            }
        },
        getMinMaxXY: function(a, b, c, d, e) {
            null ==
                e && (e = !0);
            e && (d[0] = 2E6, d[1] = 2E6, d[2] = -2E6, d[3] = -2E6);
            e = ja.temp2;
            switch (this.type) {
                case 1:
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    this.applyOriginRotation(this.x + this.halfWidth, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + this.halfHeight, this.degrees,
                        e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    this.applyOriginRotation(this.x + this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    break;
                case 2:
                    x.rotateAroundPoint(this.x, this.y, c, 0, 0, e);
                    e[0] += a - this.radius;
                    e[1] += b - this.radius;
                    this.adjustMinMaxXY(d, e);
                    x.rotateAroundPoint(this.x, this.y, c, 0, 0, e);
                    e[0] += a + this.radius;
                    e[1] += b + this.radius;
                    this.adjustMinMaxXY(d, e);
                    break;
                case 3:
                    for (var f =
                            0, r = this.vx.length; f < r;) {
                        var g = f++;
                        this.applyOriginRotation(this.x + this.vx[g], this.y + this.vy[g], this.degrees, e);
                        x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                        e[0] += a;
                        e[1] += b;
                        this.adjustMinMaxXY(d, e)
                    }
                    break;
                case 4:
                    this.applyOriginRotation(this.x + this.x1, this.y + this.y1, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    this.applyOriginRotation(this.x + this.x2, this.y + this.y2, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d,
                        e);
                    break;
                case 5:
                    x.rotateAroundPoint(this.x, this.y, c, 0, 0, e);
                    e[0] += a - 3;
                    e[1] += b - 3;
                    this.adjustMinMaxXY(d, e);
                    x.rotateAroundPoint(this.x, this.y, c, 0, 0, e);
                    e[0] += a + 3;
                    e[1] += b + 3;
                    this.adjustMinMaxXY(d, e);
                    break;
                case 6:
                    this.applyOriginRotation(this.x + -this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    this.applyOriginRotation(this.x, this.y + -this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d,
                        e);
                    this.applyOriginRotation(this.x + this.halfWidth, this.y + this.halfHeight, this.degrees, e);
                    x.rotateAroundPoint(e[0], e[1], c, 0, 0, e);
                    e[0] += a;
                    e[1] += b;
                    this.adjustMinMaxXY(d, e);
                    break;
                case 7:
                    for (f = 0, r = this.vx.length; f < r;) g = f++, this.applyOriginRotation(this.x + this.vx[g], this.y + this.vy[g], this.degrees, e), x.rotateAroundPoint(e[0], e[1], c, 0, 0, e), e[0] += a, e[1] += b, this.adjustMinMaxXY(d, e)
            }
        },
        setPolyLeftTopOrigin: function() {
            if (3 == this.type) {
                for (var a = this.vx[0], b = this.vy[0], c = 1, d = this.vx.length; c < d;) var e = c++,
                    a = Math.min(a,
                        this.vx[e]),
                    b = Math.min(b, this.vy[e]);
                c = 0;
                for (d = this.vx.length; c < d;) e = c++, this.vx[e] -= a, this.vy[e] -= b;
                this.x += a;
                this.y += b
            }
        },
        pointSelects: function(a, b, c, d, e) {
            var f = !1,
                r = ja.temp2;
            x.rotateAroundPoint(d - a, e - b, -c, 0, 0, r);
            this.applyOriginRotation(r[0], r[1], -this.degrees, r);
            switch (this.type) {
                case 1:
                    f = Math.abs(this.x - r[0]) < this.halfWidth ? Math.abs(this.y - r[1]) < this.halfHeight : !1;
                    break;
                case 2:
                    f = this.radius * this.radius >= (r[0] - this.x) * (r[0] - this.x) + (r[1] - this.y) * (r[1] - this.y);
                    break;
                case 3:
                    r[0] -= this.x;
                    r[1] -= this.y;
                    a = f = 0;
                    for (b = this.vx.length; a < b;) c = a++, d = (c + 1) % this.vx.length, this.vy[c] <= r[1] ? this.vy[d] > r[1] && 0 < x.CrossPoints(r[0], r[1], this.vx[c], this.vy[c], this.vx[d], this.vy[d]) && ++f : this.vy[d] <= r[1] && 0 > x.CrossPoints(r[0], r[1], this.vx[c], this.vy[c], this.vx[d], this.vy[d]) && --f;
                    f = 0 != f;
                    break;
                case 4:
                    5 > x.PointLineDistance(this.x1, this.y1, this.x2, this.y2, r[0] - this.x, r[1] - this.y, !0) && (f = !0);
                    break;
                case 5:
                    5 > Math.abs(this.x - r[0]) && 5 > Math.abs(this.y - r[1]) && (f = !0);
                    break;
                case 6:
                    var g;
                    a = this.x - this.halfWidth;
                    b = this.y + this.halfHeight;
                    c = this.x;
                    d = this.y - this.halfHeight;
                    e = this.x + this.halfWidth;
                    g = this.y + this.halfHeight;
                    f = (f = (f = 0 <= x.CrossPoints(a, b, c, d, r[0], r[1])) ? 0 <= x.CrossPoints(c, d, e, g, r[0], r[1]) : !1) ? 0 <= x.CrossPoints(e, g, a, b, r[0], r[1]) : !1;
                    break;
                case 7:
                    for (a = this.vx, b = this.vy, 0 < (this.flags & 1) && (a = this.curvePointsX, b = this.curvePointsY), c = 1, d = a.length; c < d;) e = c++, 5 > x.PointLineDistance(a[e - 1], b[e - 1], a[e], b[e], r[0] - this.x, r[1] - this.y, !0) && (f = !0)
            }
            return f
        },
        _f: function(a) {
            return "" + x.round(a, 2)
        },
        toXML: function() {
            var a = B.createElement("geometry");
            switch (this.type) {
                case 1:
                    a.set("type", "rect");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    a.set("degrees", this._f(this.degrees));
                    a.set("halfWidth", this._f(this.halfWidth));
                    a.set("halfHeight", this._f(this.halfHeight));
                    break;
                case 2:
                    a.set("type", "circ");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    a.set("degrees", this._f(this.degrees));
                    a.set("radius", this._f(this.radius));
                    break;
                case 3:
                    a.set("type", "poly");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    a.set("degrees", this._f(this.degrees));
                    a.set("nVertices", "" + this.vx.length);
                    for (var b = "", c = 0, d = this.vx.length - 1; c < d;) var e = c++,
                        b = b + (this._f(this.vx[e]) + "," + this._f(this.vy[e]) + ",");
                    b += this._f(this.vx[this.vx.length - 1]) + "," + this._f(this.vy[this.vx.length - 1]);
                    a.set("vertices", b);
                    break;
                case 4:
                    a.set("type", "line");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    a.set("x1", this._f(this.x1));
                    a.set("y1", this._f(this.y1));
                    a.set("x2", this._f(this.x2));
                    a.set("y2", this._f(this.y2));
                    break;
                case 5:
                    a.set("type", "dot");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    break;
                case 6:
                    a.set("type", "tri");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    a.set("degrees", this._f(this.degrees));
                    a.set("halfWidth", this._f(this.halfWidth));
                    a.set("halfHeight", this._f(this.halfHeight));
                    break;
                case 7:
                    a.set("type", "path");
                    a.set("x", this._f(this.x));
                    a.set("y", this._f(this.y));
                    a.set("degrees", this._f(this.degrees));
                    a.set("nVertices", "" + this.vx.length);
                    b = "";
                    c = 0;
                    for (d = this.vx.length - 1; c < d;) e = c++, b += this._f(this.vx[e]) + "," + this._f(this.vy[e]) + ",";
                    b +=
                        this._f(this.vx[this.vx.length - 1]) + "," + this._f(this.vy[this.vx.length - 1]);
                    a.set("vertices", b);
                    0 < (this.flags & 1) && a.set("isCurve", "true")
            }
            return a
        },
        fromXML: function(a) {
            null == a && (a = this.compLevel);
            var b = 0;
            "true" == a.get("isCurve") && (b |= 1);
            switch (a.get("type")) {
                case "circ":
                    this._init(2, this.pf(a.get("x")), this.pf(a.get("y")), this.pf(a.get("degrees")), this.pf(a.get("radius")));
                    break;
                case "dot":
                    this._init(5, this.pf(a.get("x")), this.pf(a.get("y")));
                    break;
                case "line":
                    this.x1 = this.pf(a.get("x1"));
                    this.x2 = this.pf(a.get("x2"));
                    this.y1 = this.pf(a.get("y1"));
                    this.y2 = this.pf(a.get("y2"));
                    this._init(4, this.pf(a.get("x")), this.pf(a.get("y")), 0, 0, 0);
                    break;
                case "need":
                    this._init(1, 0, 0, 0, 20, 20);
                    break;
                case "path":
                    this.pi(a.get("nVertices"));
                    for (var c = a.get("vertices").split(","), d = [], e = [], f = 0, r = c.length / 2 | 0; f < r;) {
                        var g = 2 * f++;
                        d[g / 2 | 0] = this.pf(c[g]);
                        e[g / 2 | 0] = this.pf(c[g + 1])
                    }
                    this._init(7, this.pf(a.get("x")), this.pf(a.get("y")), this.pf(a.get("degrees")), 0, 0, d, e, !0, b);
                    break;
                case "poly":
                    this.pi(a.get("nVertices"));
                    c = a.get("vertices").split(",");
                    d = [];
                    e = [];
                    f = 0;
                    for (r = c.length / 2 | 0; f < r;) g = 2 * f++, d[g / 2 | 0] = this.pf(c[g]), e[g / 2 | 0] = this.pf(c[g + 1]);
                    this._init(3, this.pf(a.get("x")), this.pf(a.get("y")), this.pf(a.get("degrees")), 0, 0, d, e, !0, b);
                    break;
                case "rect":
                    this._init(1, this.pf(a.get("x")), this.pf(a.get("y")), this.pf(a.get("degrees")), this.pf(a.get("halfWidth")), this.pf(a.get("halfHeight")));
                    break;
                case "tri":
                    this._init(6, this.pf(a.get("x")), this.pf(a.get("y")), this.pf(a.get("degrees")), this.pf(a.get("halfWidth")), this.pf(a.get("halfHeight")));
                    break;
                default:
                    throw new D(new Bb("Invalid shape Xml type"));
            }
        },
        clone: function() {
            var a = new ja;
            a._init(this.type, this.x, this.y, this.degrees, this.halfWidth, this.halfHeight, this.vx, this.vy, !0, this.flags);
            return a
        },
        _init: function(a, b, c, d, e, f, r, g, k, h) {
            null == h && (h = 0);
            null == k && (k = !0);
            null == f && (f = 0);
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            this.flags = h;
            this.type = a;
            this.x = b;
            this.y = c;
            this.degrees = d;
            if (1 == this.type) this.halfWidth = e, this.halfHeight = f;
            else if (2 == this.type) this.radius = e;
            else if (3 ==
                this.type)
                if (k)
                    for (this.vx = [], this.vy = [], h = 0, a = r.length; h < a;) b = h++, this.vx[b] = r[b], this.vy[b] = g[b];
                else this.vx = r, this.vy = g;
            else if (7 == this.type) {
                if (k)
                    for (this.vx = [], this.vy = [], a = 0, b = r.length; a < b;) c = a++, this.vx[c] = r[c], this.vy[c] = g[c];
                else this.vx = r, this.vy = g;
                0 < (h & 1) && this.updateCurves();
                null == this.pathLengths && (this.pathLengths = []);
                h = g = 0;
                for (r = r.length; h < r;) a = h++, c = 0 > a - 1 ? 0 : a - 1, b = this.vx[a] - this.vx[c], c = this.vy[a] - this.vy[c], g += Math.sqrt(b * b + c * c), this.pathLengths[a] = g
            } else 4 != this.type && 6 == this.type &&
                (this.halfWidth = e, this.halfHeight = f)
        },
        getQuadPathCoeff: function(a, b) {
            var c = this.pathLengths[this.pathLengths.length - 1];
            a = (a % c + c) % c;
            return a < b ? a / b : a > c - b ? 1 - (a - (c - b)) / b : 1
        },
        pathLength: function() {
            return this.pathLengths[this.pathLengths.length - 1]
        },
        adjustDistance: function(a) {
            return Math.max(0, Math.min(a, this.pathLengths[this.pathLengths.length - 1]))
        },
        getPathPosition: function(a, b, c, d, e) {
            null == e && (e = !1);
            var f = this.pathLengths[this.pathLengths.length - 1],
                r = this.pathLengths.length;
            a = e ? (a % f + f) % f : this.adjustDistance(a);
            e = 0;
            for (f = r - 1; e + 1 < f;) {
                var g = Math.floor((e + f) / 2);
                a <= this.pathLengths[g] ? f = g : e = g
            }
            e = f;
            r = (f - 1 + r) % r;
            f = 0 == e ? 0 : this.pathLengths[r];
            a = (a - f) / (this.pathLengths[e] - f);
            d[0] = b + this.x + (1 - a) * this.vx[r] + a * this.vx[e];
            d[1] = c + this.y + (1 - a) * this.vy[r] + a * this.vy[e]
        },
        isLoop: function(a) {
            null == a && (a = -1);
            var b = this.vx,
                c = this.vy;
            0 < (this.flags & 1) && (b = this.curvePointsX, c = this.curvePointsY);
            0 > a && (a = b.length);
            return 1E-4 > Math.abs(b[0] - b[a - 1]) ? 1E-4 > Math.abs(c[0] - c[a - 1]) : !1
        },
        getFirstId: function(a, b) {
            null == b && (b = -1);
            0 > b && (b = 0 < (this.flags &
                1) ? this.curvePointsX.length : this.vx.length);
            var c = 0;
            if (a)
                for (; this.isOneSegment((c - 1 + b) % b, 0, 1);) c = (c - 1 + b) % b;
            return c
        },
        isOneSegment: function(a, b, c, d) {
            null == d && (d = !0);
            var e = this.vx,
                f = this.vy;
            d && 0 < (this.flags & 1) && (e = this.curvePointsX, f = this.curvePointsY);
            return null == e || null == f || a == c || 0.1 > Math.abs(e[a] - e[c]) && 0.1 > Math.abs(f[a] - f[c]) || 0.1 < x.PointLineDistance(e[a], f[a], e[c], f[c], e[b], f[b], !0) ? !1 : !0
        },
        getVerticalBoundary: function(a) {
            var b = this.y,
                c;
            switch (this.type) {
                case 1:
                    c = this.halfHeight;
                    break;
                case 2:
                    c =
                        this.radius;
                    break;
                default:
                    throw new D(new Bb("VERTICAL BOUNDARY NOT CALCULATED FOR geo", this.type));
            }
            return b + a * c
        },
        getHeight: function() {
            switch (this.type) {
                case 1:
                    return 2 * this.halfHeight;
                case 2:
                    return 2 * this.radius;
                case 3:
                    return 50;
                default:
                    throw new D(new Bb("HEIGHT NOT CALCULATED FOR geo", this.type));
            }
        },
        getWidth: function() {
            switch (this.type) {
                case 1:
                    return 2 * this.halfWidth;
                case 2:
                    return 2 * this.radius;
                case 3:
                    return 50;
                default:
                    throw new D(new Bb("WIDTH NOT CALCULATED FOR geo", this.type));
            }
        },
        pf: function(a) {
            return null ==
                a || 0 == a.length ? 0 : parseFloat(a)
        },
        pi: function(a) {
            return null == a || 0 == a.length ? 0 : K.parseInt(a)
        },
        __class__: ja
    });
    var Uc = function(a, b, c, d, e, f) {
        this.name = a;
        this.tileUp45 = b;
        this.tileDown45 = c;
        this.tileUp23 = d;
        this.tileDown23 = e;
        this.scale9 = f
    }; s["ozity.OzTileInfo"] = Uc; Uc.__name__ = ["ozity", "OzTileInfo"]; Uc.prototype = {
        __class__: Uc
    };
    var da = function(a, b) {
        this.tileObject = null;
        this.updateOldValues = this.drawSpecial = !1;
        this.color = 0;
        this.isTile = !1;
        this.spriteMCName = null;
        this.depth = 0;
        this.sprite = null;
        N.call(this, a, b, null);
        this.depth = K.parseInt(b.get("depth"));
        this.spriteMCName = b.get("src");
        this.isTile = "tile" == b.get("type");
        this.color = K.parseInt("0x" + b.get("linecolor"))
    }; s["ozity.OzGraphics"] = da; da.__name__ = ["ozity", "OzGraphics"]; da.GetMovieClip = function(a) {
        a = x.FindStringId(f.BitmapsNames, a);
        return f.Bitmaps[f.BitmapsIds[a]]
    }; da.GetBitmapData = function(a) {
        a = x.FindStringId(f.BitmapsNames, a);
        a = f.Bitmaps[f.BitmapsIds[a]];
        return f.GetTilesheetBitmapData(a.tilesheetId, a.frames[0])
    }; da.GetBitmap = function(a) {
        a = x.FindStringId(f.BitmapsNames,
            a);
        return f.New(f.Bitmaps[f.BitmapsIds[a]])
    }; da.GetTileInfo = function(a) {
        var b = a.get("src"),
            c = da.tileInfos;
        if (null != O[b] ? !c.existsReserved(b) : !c.h.hasOwnProperty(b)) {
            var c = x.StringToIntArray(a.get("tileDown45")),
                d = x.StringToIntArray(a.get("tileUp45")),
                e = x.StringToIntArray(a.get("tileDown23")),
                f = x.StringToIntArray(a.get("tileUp23"));
            a = x.StringToIntArray(a.get("scale9"));
            a = new Uc(b, d, c, f, e, a);
            c = da.tileInfos;
            null != O[b] ? c.setReserved(b, a) : c.h[b] = a
        }
        a = da.tileInfos;
        return null != O[b] ? a.getReserved(b) : a.h[b]
    }; da.__super__ = N; da.prototype = R(N.prototype, {
        init: function() {
            this.tileObject = this.gameObject.getComponent(Fc)
        },
        postInit: function() {
            this.geometry = this.gameObject.geometry;
            this.transform = this.gameObject.transform;
            var a = this.compPrefab;
            if ("false" != a.get("visible"))
                if ("sprite" == a.get("type")) this.sprite = da.GetBitmap(this.spriteMCName);
                else if ("fill" == a.get("type")) {
                var b = da.GetBitmapData(this.spriteMCName);
                null == this.sprite && (this.sprite = f.New(null, W.POLYGON));
                var c = this.sprite.flSprite.get_graphics();
                c.clear();
                null != a.get("linewidth") && c.lineStyle(K.parseInt(a.get("linewidth")), this.color);
                c.beginBitmapFill(b, null, !0, !0);
                this.geometry.drawLocalOutline(c);
                c.endFill()
            } else if ("line" == a.get("type")) {
                var d = da.GetBitmapData(this.spriteMCName);
                null == this.sprite && (this.sprite = f.New(null, W.POLYGON));
                var e = d.component.height;
                null != a.get("linewidth") && (e = K.parseInt(a.get("linewidth")));
                var p = this.geometry.x1 - this.geometry.x2,
                    r = this.geometry.y1 - this.geometry.y2,
                    g = Math.sqrt(p * p + r * r);
                this.sprite.createLineGFX(d,
                    e, g);
                this.sprite.set_rotation(x.AngleFromSegment(this.geometry.x1, this.geometry.y1, this.geometry.x2, this.geometry.y2));
                var k = a.get("end");
                if (null != k) {
                    var h = da.GetBitmap(k);
                    this.sprite.addChild(h);
                    h.set_x(-g / 2);
                    var m = da.GetBitmap(k);
                    this.sprite.addChild(m);
                    m.set_x(g / 2);
                    G.trace("init nc", {
                        fileName: "OzGraphics.hx",
                        lineNumber: 122,
                        className: "ozity.OzGraphics",
                        methodName: "postInit",
                        customParams: [this.sprite.numChildren()]
                    })
                }
            } else if ("tile" == a.get("type")) {
                var l;
                switch (a.get("collision")) {
                    case "none":
                        l =
                            0;
                        break;
                    case "top":
                        l = 2;
                        break;
                    default:
                        l = 1
                }
                var n = a.get("depth"),
                    q = 0;
                null != n && (q = K.parseInt(n));
                var s = da.GetTileInfo(a),
                    u = this.gameObject.gameSystem.tileMap,
                    t = u.tileSize,
                    y = "false" != a.get("staticTile");
                y ? this.sprite = null : null == this.sprite && (this.sprite = f.New(null, W.EMPTY));
                if (3 == this.geometry.type && 0 == this.geometry.halfWidth) {
                    var z = Math.round(this.transform.x + this.geometry.x),
                        A = Math.round(this.transform.y + this.geometry.y);
                    null != this.sprite && (this.sprite.set_x(z), this.sprite.set_y(A));
                    v.PolyToTiles(this.geometry,
                        t);
                    for (var B = 0, E = v.ptN; B < E;)
                        for (var C = B++, F = 0, H = v.ptM; F < H;) {
                            var J = F++;
                            if (0 != v.ptTiles[C][J]) {
                                var L = v.ptTiles[C][J],
                                    M = v.PTFrameToTile(C, J, l),
                                    Q = this.spriteMCName;
                                if (y) {
                                    var O = Math.round((A - u.offsetY) / t) + C | 0,
                                        T = Math.round((z - u.offsetX) / t) + J | 0,
                                        P = x.FindStringId(f.BitmapsNames, Q);
                                    u.setTile(q, O, T, M, f.Bitmaps[f.BitmapsIds[P]], L);
                                    null != this.tileObject && u.setTileObject(this.tileObject, O, T)
                                } else {
                                    var N = da.GetBitmap(Q);
                                    N.set_x(Math.round(J * t));
                                    N.set_y(Math.round(C * t));
                                    this.sprite.addChild(N);
                                    N.gotoAndStop(L)
                                }
                            }
                        }
                } else {
                    var S =
                        this.gameObject.objLevel.get("tileFrame"),
                        R = null == S ? 1 : K.parseInt(S),
                        aa = Math.round(2 * this.geometry.halfWidth),
                        ca = Math.round(2 * this.geometry.halfHeight),
                        Z = Math.round(this.transform.x + this.geometry.x - this.geometry.halfWidth),
                        Y = Math.round(this.transform.y + this.geometry.y - this.geometry.halfHeight),
                        X = Math.round(ca / t),
                        ba = Math.round(aa / t),
                        U = Math.min(X, ba) | 0,
                        fa = "1" == a.get("spriteTile");
                    null != this.sprite && (this.sprite.set_x(Z), this.sprite.set_y(Y));
                    if (0 <= x.IndexOfInt(s.tileDown45, R)) {
                        for (var ea = ba - U, ga = 0; ga <
                            X;)
                            for (var V = ga++, ia = ea, Dd = ba; ia < Dd;) {
                                var ja = ia++,
                                    la = V,
                                    oa = ja - ea,
                                    ka = 1,
                                    ma = 0;
                                if (la == oa) ka = s.tileDown45[0], ma = 2;
                                else if (oa == la - 1) ka = s.tileDown45[1], ma = 8;
                                else continue;
                                var na = this.spriteMCName;
                                if (y) {
                                    var ua = Math.round((Y - u.offsetY) / t) + V | 0,
                                        pa = Math.round((Z - u.offsetX) / t) + ja | 0,
                                        ra = x.FindStringId(f.BitmapsNames, na);
                                    u.setTile(q, ua, pa, ma, f.Bitmaps[f.BitmapsIds[ra]], ka);
                                    null != this.tileObject && u.setTileObject(this.tileObject, ua, pa)
                                } else {
                                    var qa = da.GetBitmap(na);
                                    qa.set_x(Math.round(ja * t));
                                    qa.set_y(Math.round(V * t));
                                    this.sprite.addChild(qa);
                                    qa.gotoAndStop(ka)
                                }
                            }
                        if (0 < ea) {
                            var ta = ea - 1,
                                xa = s.tileDown45[1],
                                va = this.spriteMCName;
                            if (y) {
                                var Aa = Math.round((Y - u.offsetY) / t) | 0,
                                    Fa = Math.round((Z - u.offsetX) / t) + ta | 0,
                                    Ia = x.FindStringId(f.BitmapsNames, va);
                                u.setTile(q, Aa, Fa, 8, f.Bitmaps[f.BitmapsIds[Ia]], xa);
                                null != this.tileObject && u.setTileObject(this.tileObject, Aa, Fa)
                            } else {
                                var wa = da.GetBitmap(va);
                                wa.set_x(Math.round(ta * t));
                                wa.set_y(Math.round(0 * t));
                                this.sprite.addChild(wa);
                                wa.gotoAndStop(xa)
                            }
                        }
                    } else if (0 <= x.IndexOfInt(s.tileUp45, R)) {
                        for (var Ha =
                                0; Ha < X;)
                            for (var Ja = Ha++, Ka = 0, Ma = U; Ka < Ma;) {
                                var Ga = Ka++,
                                    Qa = U - Ja - 1,
                                    Oa = Ga,
                                    ya = 1,
                                    Sa = 0;
                                if (Qa == Oa) ya = s.tileUp45[0], Sa = 3;
                                else if (Oa == Qa + 1) ya = s.tileUp45[1], Sa = 8;
                                else continue;
                                var Xa = this.spriteMCName;
                                if (y) {
                                    var Ta = Math.round((Y - u.offsetY) / t) + Ja | 0,
                                        Ya = Math.round((Z - u.offsetX) / t) + Ga | 0,
                                        eb = x.FindStringId(f.BitmapsNames, Xa);
                                    u.setTile(q, Ta, Ya, Sa, f.Bitmaps[f.BitmapsIds[eb]], ya);
                                    null != this.tileObject && u.setTileObject(this.tileObject, Ta, Ya)
                                } else {
                                    var Ua = da.GetBitmap(Xa);
                                    Ua.set_x(Math.round(Ga * t));
                                    Ua.set_y(Math.round(Ja *
                                        t));
                                    this.sprite.addChild(Ua);
                                    Ua.gotoAndStop(ya)
                                }
                            }
                        if (ba > U) {
                            var Za = s.tileUp45[1],
                                Ca = this.spriteMCName;
                            if (y) {
                                var Wa = Math.round((Y - u.offsetY) / t) | 0,
                                    fb = Math.round((Z - u.offsetX) / t) + U | 0,
                                    zb = x.FindStringId(f.BitmapsNames, Ca);
                                u.setTile(q, Wa, fb, 8, f.Bitmaps[f.BitmapsIds[zb]], Za);
                                null != this.tileObject && u.setTileObject(this.tileObject, Wa, fb)
                            } else {
                                var id = da.GetBitmap(Ca);
                                id.set_x(Math.round(U * t));
                                id.set_y(Math.round(0 * t));
                                this.sprite.addChild(id);
                                id.gotoAndStop(Za)
                            }
                        }
                    } else if (0 <= x.IndexOfInt(s.tileUp23, R)) {
                        for (var U =
                                Math.min(2 * X, ba) | 0, nb = 2 * X > ba ? Math.floor((ba + 1) / 2) : X, ib = 0; ib < X;)
                            for (var md = ib++, $a = 0, ab = U; $a < ab;) {
                                var kb = $a++,
                                    sa = nb - md - 1,
                                    za = kb,
                                    Ra = 1,
                                    Va = 0;
                                if (2 * sa == za) Ra = s.tileUp23[0], Va = 7;
                                else if (2 * sa + 1 == za) Ra = s.tileUp23[1], Va = 6;
                                else if (2 * sa + 2 == za) Ra = s.tileUp23[2], Va = 8;
                                else continue;
                                var Pa = this.spriteMCName;
                                if (y) {
                                    var vd = Math.round((Y - u.offsetY) / t) + md | 0,
                                        Na = Math.round((Z - u.offsetX) / t) + kb | 0,
                                        vb = x.FindStringId(f.BitmapsNames, Pa);
                                    u.setTile(q, vd, Na, Va, f.Bitmaps[f.BitmapsIds[vb]], Ra);
                                    null != this.tileObject && u.setTileObject(this.tileObject,
                                        vd, Na)
                                } else {
                                    var cb = da.GetBitmap(Pa);
                                    cb.set_x(Math.round(kb * t));
                                    cb.set_y(Math.round(md * t));
                                    this.sprite.addChild(cb);
                                    cb.gotoAndStop(Ra)
                                }
                            }
                        if (ba > U) {
                            var Ba = s.tileUp23[2],
                                mb = this.spriteMCName;
                            if (y) {
                                var Ab = Math.round((Y - u.offsetY) / t) | 0,
                                    pb = Math.round((Z - u.offsetX) / t) + U | 0,
                                    Db = x.FindStringId(f.BitmapsNames, mb);
                                u.setTile(q, Ab, pb, 8, f.Bitmaps[f.BitmapsIds[Db]], Ba);
                                null != this.tileObject && u.setTileObject(this.tileObject, Ab, pb)
                            } else {
                                var Da = da.GetBitmap(mb);
                                Da.set_x(Math.round(U * t));
                                Da.set_y(Math.round(0 * t));
                                this.sprite.addChild(Da);
                                Da.gotoAndStop(Ba)
                            }
                        }
                    } else if (0 <= x.IndexOfInt(s.tileDown23, R)) {
                        for (var U = Math.min(2 * X, ba) | 0, jb = ba - U, Lb = 2 * X > ba ? Math.floor((ba + 1) / 2) : X, Fb = 0; Fb < X;)
                            for (var lb = Fb++, Hb = jb, rb = ba; Hb < rb;) {
                                var wb = Hb++,
                                    xb = Lb - lb - 1,
                                    Ib = U - (wb - jb) - 1,
                                    Vc = 1,
                                    yb = 0;
                                if (2 * xb == Ib) Vc = s.tileDown23[0], yb = 5;
                                else if (2 * xb + 1 == Ib) Vc = s.tileDown23[1], yb = 4;
                                else if (2 * xb + 2 == Ib) Vc = s.tileDown23[2], yb = 8;
                                else continue;
                                var ob = this.spriteMCName;
                                if (y) {
                                    var Jb = Math.round((Y - u.offsetY) / t) + lb | 0,
                                        Ob = Math.round((Z - u.offsetX) / t) + wb | 0,
                                        Cb = x.FindStringId(f.BitmapsNames,
                                            ob);
                                    u.setTile(q, Jb, Ob, yb, f.Bitmaps[f.BitmapsIds[Cb]], Vc);
                                    null != this.tileObject && u.setTileObject(this.tileObject, Jb, Ob)
                                } else {
                                    var sb = da.GetBitmap(ob);
                                    sb.set_x(Math.round(wb * t));
                                    sb.set_y(Math.round(lb * t));
                                    this.sprite.addChild(sb);
                                    sb.gotoAndStop(Vc)
                                }
                            }
                        if (0 < jb) {
                            var tb = jb - 1,
                                wd = s.tileDown23[2],
                                xd = this.spriteMCName;
                            if (y) {
                                var yd = Math.round((Y - u.offsetY) / t) | 0,
                                    Eb = Math.round((Z - u.offsetX) / t) + tb | 0,
                                    ac = x.FindStringId(f.BitmapsNames, xd);
                                u.setTile(q, yd, Eb, 8, f.Bitmaps[f.BitmapsIds[ac]], wd);
                                null != this.tileObject && u.setTileObject(this.tileObject,
                                    yd, Eb)
                            } else {
                                var ub = da.GetBitmap(xd);
                                ub.set_x(Math.round(tb * t));
                                ub.set_y(Math.round(0 * t));
                                this.sprite.addChild(ub);
                                ub.gotoAndStop(wd)
                            }
                        }
                    } else if (fa)
                        for (var db = da.GetBitmapData(a.get("src")), Vb = Math.ceil((db.component.height - 1) / t), ec = Math.ceil((db.component.width - 1) / t), gb = l, hb = 0; hb < X;) {
                            var jd = hb++;
                            2 == l && (gb = 0 == jd ? 9 : 0);
                            for (var ha = 0, hc = ba; ha < hc;) {
                                var Gb = ha++,
                                    Sb = v.GetSpriteTileFrame(jd, Gb, Vb, ec),
                                    Tb = this.spriteMCName;
                                if (y) {
                                    var Ub = Math.round((Y - u.offsetY) / t) + jd | 0,
                                        bc = Math.round((Z - u.offsetX) / t) + Gb | 0,
                                        cc = x.FindStringId(f.BitmapsNames,
                                            Tb);
                                    u.setTile(q, Ub, bc, gb, f.Bitmaps[f.BitmapsIds[cc]], Sb);
                                    null != this.tileObject && u.setTileObject(this.tileObject, Ub, bc)
                                } else {
                                    var Ea = da.GetBitmap(Tb);
                                    Ea.set_x(Math.round(Gb * t));
                                    Ea.set_y(Math.round(jd * t));
                                    this.sprite.addChild(Ea);
                                    Ea.gotoAndStop(Sb)
                                }
                            }
                        } else {
                            var Mb = 0 <= x.IndexOfInt(s.scale9, R);
                            if (y) {
                                this.sprite = null;
                                var lc = x.FindStringId(f.BitmapsNames, this.spriteMCName);
                                u.setTileBlock(q, Z, Y, ba, X, 1, f.Bitmaps[f.BitmapsIds[lc]], R, Mb, l);
                                null != this.tileObject && u.setTileObjectBlock(this.tileObject, Z, Y, ba, X)
                            } else
                                for (var dc =
                                        0; dc < X;)
                                    for (var Wb = dc++, Xb = 0, Nb = ba; Xb < Nb;) {
                                        var fc = Xb++,
                                            vc = da.GetBitmap(this.spriteMCName);
                                        vc.set_x(Math.round(fc * t));
                                        vc.set_y(Math.round(Wb * t));
                                        this.sprite.addChild(vc);
                                        vc.gotoAndStop(Mb ? v.GetScale9Frame(Wb, fc, X, ba) : R)
                                    }
                        }
                }
            } else if ("path" == a.get("type")) {
                var wc = null;
                null != this.spriteMCName && (wc = da.GetBitmapData(this.spriteMCName));
                null == this.sprite && (this.sprite = f.New(null, W.POLYGON));
                var nc = 4;
                null != wc && (nc = wc.component.height);
                null != a.get("linewidth") && (nc = K.parseInt(a.get("linewidth")));
                var $b = this.geometry.vx,
                    ic = this.geometry.vy;
                0 < (this.geometry.flags & 1) && ($b = this.geometry.curvePointsX, ic = this.geometry.curvePointsY);
                var Kb = $b.length,
                    qb = !1;
                this.geometry.isLoop() && (qb = !0, --Kb);
                var Lc = this.geometry.getFirstId(qb, Kb),
                    Yb = this.geometry.x,
                    Pb = this.geometry.y;
                if (null != a.get("backcolor")) {
                    var jc = null,
                        oc = null,
                        jc = a.get("backcolor");
                    null != jc && (oc = jc.split(","));
                    var kc = null,
                        jc = a.get("backwidth");
                    null != jc && (kc = jc.split(","));
                    var pc = null,
                        jc = a.get("backalpha");
                    null != jc && (pc = jc.split(","));
                    var qc = 0;
                    if (null != oc || null != kc ||
                        null != pc) qc = 1, null != oc && oc.length > qc && (qc = oc.length), null != kc && kc.length > qc && (qc = kc.length), null != pc && pc.length > qc && (qc = pc.length);
                    for (var gc = 0, La = qc; gc < La;) {
                        var rc = gc++,
                            Zb = 65280;
                        null != oc && rc < oc.length && (Zb = K.parseInt("0x" + oc[rc]));
                        var Mc = 2;
                        null != kc && rc < kc.length && (Mc = parseFloat(kc[rc]));
                        var Qb = 1;
                        null != pc && rc < pc.length && (Qb = parseFloat(a.get("backalpha")));
                        this.makeLineGFX(wc, Zb, Mc, Lc, Yb, Pb, $b, ic, Kb, qb, Qb)
                    }
                }
                this.makeLineGFX(wc, this.color, nc, Lc, Yb, Pb, $b, ic, Kb, qb);
                var xc = a.get("end");
                if (null != xc) {
                    for (var Rb =
                            Lc, bb = 1; this.geometry.isOneSegment(Rb, bb, (bb + 1) % Kb);) bb = (bb + 1) % Kb;
                    for (;;) {
                        var Gc = da.GetBitmap(xc);
                        this.sprite.addChild(Gc);
                        Gc.set_x(Yb + $b[Rb]);
                        Gc.set_y(Pb + ic[Rb]);
                        Rb = bb;
                        for (bb = (bb + 1) % Kb; this.geometry.isOneSegment(Rb, bb, (bb + 1) % Kb);) bb = (bb + 1) % Kb;
                        if (Rb == Lc) break
                    }
                }
            } else throw new D(new Bb("Todo: if not sprite"));
            this.physics = this.gameObject.physics;
            null != this.sprite && this.gameObject.gameSystem.objectSpriteDepths[this.depth].addChild(this.sprite);
            this.postUpdate()
        },
        makeLineGFX: function(a, b, c, d, e, f, r, g,
            k, h, m) {
            null == m && (m = 1);
            var l = 0;
            null == a && this.sprite.flSprite.get_graphics().lineStyle(c, b, m);
            b = 0;
            c = d;
            m = 1;
            for (var n = 0; this.geometry.isOneSegment(c, m, (m + 1) % k);) m = (m + 1) % k;
            for (;;) {
                ++n;
                var q = r[c] - r[m],
                    s = g[c] - g[m],
                    q = Math.sqrt(q * q + s * s),
                    l = l + q;
                0.001 < q && (null != a ? this.sprite.createLineSegmentGFX(a, l, e + r[c], f + g[c], e + r[m], f + g[m]) : (0 == b && this.sprite.flSprite.get_graphics().moveTo(e + r[c], f + g[c]), this.sprite.flSprite.get_graphics().lineTo(e + r[m], f + g[m])), ++b);
                c = m;
                for (m = (m + 1) % k; this.geometry.isOneSegment(c, m, (m + 1) %
                        k);) m = (m + 1) % k;
                if (m == d && !h || n >= k) break;
                if (c == d) break
            }
        },
        postUpdate: function() {
            null == this.sprite || this.drawSpecial || (null != this.physics ? (this.sprite.set_x(this.physics.x), this.sprite.set_y(this.physics.y), this.sprite.set_rotation(this.physics.degrees)) : (this.sprite.set_x(this.transform.x), this.sprite.set_y(this.transform.y), this.sprite.set_rotation(this.transform.degrees)), this.updateOldValues && (this.updateOldValues = !1, this.sprite._updateOldValues()))
        },
        getGameSprite: function() {
            return this.sprite
        },
        setSingleTile: function(a,
            b, c, d, e, p, r, g, k, h, m) {
            m ? (c = Math.round((g - a.offsetY) / h) + c | 0, d = Math.round((r - a.offsetX) / h) + d | 0, k = x.FindStringId(f.BitmapsNames, k), a.setTile(b, c, d, p, f.Bitmaps[f.BitmapsIds[k]], e), null != this.tileObject && a.setTileObject(this.tileObject, c, d)) : (a = da.GetBitmap(k), a.set_x(Math.round(d * h)), a.set_y(Math.round(c * h)), this.sprite.addChild(a), a.gotoAndStop(e))
        },
        destroy: function() {
            null != this.sprite && (this.sprite.clearChildren(), f.Dispose(this.sprite), this.sprite = null)
        },
        giveAwayGameSprite: function() {
            var a = this.getGameSprite();
            a == this.sprite ? this.sprite = null : a.parent.removeChild(a);
            return a
        },
        resetGraphics: function() {
            this.destroy();
            this.postInit();
            this.updateOldValues = !0;
            this.postUpdate()
        },
        getParent: function() {
            return null != this.sprite && null != this.sprite.parent ? this.sprite.parent : null
        },
        changeSprite: function(a) {
            null != a && null != this.sprite && this.sprite.parent.addChild(a);
            null != this.sprite && this.sprite.parent.removeChild(this.sprite);
            this.sprite = a
        },
        __class__: da
    });
    var $a = function(a) {
        this.tempKeys = [];
        this.index = a
    }; s["ozity.OzLevelProgress"] =
    $a; $a.__name__ = ["ozity", "OzLevelProgress"]; $a.getInstance = function(a) {
        if (null == $a.current || $a.current.index != a) $a.current = new $a(a);
        return $a.current
    }; $a.prototype = {
        clearTemps: function() {
            if (null == this.tempKeys || 0 < this.tempKeys.length) this.tempKeys = []
        },
        __class__: $a
    };
    var Wc = function(a, b, c) {
        this.vec4 = null;
        this.visible = !0;
        N.call(this, a, b, c);
        null != c.get("visible") && (this.visible = "true" == c.get("visible"))
    }; s["ozity.OzPath"] = Wc; Wc.__name__ = ["ozity", "OzPath"]; Wc.__super__ = N; Wc.prototype = R(N.prototype, {
        init: function() {
            this.vec4 = [];
            this.gameObject.geometry.getMinMaxXY(this.gameObject.transform.x, this.gameObject.transform.y, this.gameObject.transform.degrees, this.vec4)
        },
        postInit: function() {
            this.gameObject.graphics.sprite.set_visible(this.visible)
        },
        getMinX: function() {
            return this.vec4[0]
        },
        getMaxX: function() {
            return this.vec4[2]
        },
        __class__: Wc
    });
    var m = function(a, b) {
        this.colTypes = this.standingOn = null;
        this.colMask = -1;
        this.colGroup = 1;
        this.isSensor = this.isTop = !1;
        this.hitFlags = this.bodyType = this.x = this.y = this.velX = this.velY = this.accelX =
            this.accelY = this.degrees = 0;
        N.call(this, a, b, null)
    }; s["ozity.OzPhysics"] = m; m.__name__ = ["ozity", "OzPhysics"]; m.getFilter = function(a) {
        if (null == a) return m.DefaultFilter;
        var b = m.FilterMap;
        if (null != O[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)) return b = m.FilterMap, null != O[a] ? b.getReserved(a) : b.h[a];
        var c = m.FiltersXml,
            b = null;
        if (null != c)
            for (c = c.elementsNamed("filter"); c.hasNext();) {
                var d = c.next(),
                    e = d.get("name");
                if (null != e && e == a) {
                    b = d;
                    break
                }
            }
        if (null != b) return c = m.FilterMap, null != O[a] ? c.setReserved(a, b) : c.h[a] =
            b, b;
        throw new D("CAN'T FIND FILTER: " + a);
    }; m.PreStaticInit = function() {
        m.ColHandlers = new Jb;
        var a = t.definitionsXML,
            b = null;
        if (null != a)
            for (a = a.elementsNamed("filters"); a.hasNext();) {
                b = a.next();
                break
            }
        m.FiltersXml = b;
        m.FilterMap = new X;
        null != m.FiltersXml && (m.DefaultFilter = m.getFilter("default"))
    }; m.AddCollisionListener = function(a, b, c) {
        m.ColHandlers.exists(a) || m.ColHandlers.set(a, new Jb);
        m.ColHandlers.get(a).set(b, c)
    }; m.Update = function(a, b, c) {
        m.LastTimeStep = c;
        for (var d = 0; d < a.length;) {
            var e = a[d];
            ++d;
            var f =
                e.physics;
            null != e.geometry && null != f && 3 == f.bodyType && (f.hitFlags = 0, f.x += f.velX * c, f.y += f.velY * c, f.velX += f.accelX * c, f.velY += f.accelY * c)
        }
        for (var h = 0; h < a.length;) {
            var g = a[h];
            ++h;
            var k = g.physics,
                l = g.geometry;
            if (null != l && null != k && 1 == k.bodyType) switch (l.type) {
                case 1:
                    var n = 0,
                        q = null,
                        s = !1,
                        t = k.velX * c;
                    null != k.standingOn && (t += k.standingOn.physics.velX * c);
                    var u = k.x;
                    m.leftHitDiff = m.rightHitDiff = 0;
                    m.leftHitObject = m.rightHitObject = null;
                    m.leftHit = m.rightHit = !1;
                    for (var v = g.physics.x + g.geometry.x - g.geometry.halfWidth,
                            x = v + 2 * g.geometry.halfWidth, y = g.physics.y + g.geometry.y - g.geometry.halfHeight, z = y + 2 * g.geometry.halfHeight, A = g.physics.colGroup, B = g.physics.colMask, E = 0; E < a.length;) {
                        var C = a[E];
                        ++E;
                        if (C != g && !C.dead && null != C.geometry && 1 == C.geometry.type && null != C.physics && !C.physics.isSensor && 1 != C.physics.bodyType && 0 != (A & C.physics.colMask) && 0 != (C.physics.colGroup & B)) {
                            var F = C.physics.x + C.geometry.x - C.geometry.halfWidth,
                                H = C.physics.x + C.geometry.x + C.geometry.halfWidth,
                                J = C.physics.y + C.geometry.y - C.geometry.halfHeight,
                                K = C.physics.velX *
                                c;
                            if (!(y + 1 > C.physics.y + C.geometry.y + C.geometry.halfHeight || z - 1 < J))
                                if (H - 1 - K < v) {
                                    v + t < H && (m.leftHit = !0);
                                    var L = H - (v + t);
                                    null == m.leftHitObject ? (m.leftHitObject = C, m.leftHitDiff = L) : L > m.leftHitDiff && (m.leftHitObject = C, m.leftHitDiff = L)
                                } else if (F + 1 - K > x) {
                                x + t > F && (m.rightHit = !0);
                                var M = F - (x + t);
                                null == m.rightHitObject ? (m.rightHitObject = C, m.rightHitDiff = M) : M < m.rightHitDiff && (m.rightHitObject = C, m.rightHitDiff = M)
                            }
                        }
                    }
                    null != m.rightHitObject && null != m.leftHitObject && 0 < m.leftHitDiff - m.rightHitDiff && (m.rightHit = m.leftHit = !0);
                    m.leftHit && m.rightHit ? (k.x += t + (m.leftHitDiff + m.rightHitDiff) / 2, n |= 266) : m.rightHit ? (t = m.rightHitDiff + t, q = m.rightHitObject) : m.leftHit && (t = m.leftHitDiff + t, q = m.leftHitObject);
                    var R = 0,
                        O = b.getSlope(k.x + l.x, k.y + l.y + 1, l.halfHeight);
                    if (0 > O * t) {
                        for (var T = t * O, N = g.physics, S = g.geometry, P = N.y + S.y - S.halfHeight, W = t / T, X = N.x + S.x - S.halfWidth, Z = X + 2 * S.halfWidth, Y = P + b.GetMaxUpDY(X, Z, P, t, T), aa = N.colGroup, ba = N.colMask, ca = 0; ca < a.length;) {
                            var U = a[ca];
                            ++ca;
                            if (U != g && !U.dead && null != U.geometry && 1 == U.geometry.type && null != U.physics &&
                                !U.physics.isSensor && 1 != U.physics.bodyType && 0 != (aa & U.physics.colMask) && 0 != (U.physics.colGroup & ba)) {
                                var da = U.physics.y + U.geometry.y + U.geometry.halfHeight;
                                if (da < P + 1 && da > Y) {
                                    G.trace("POSSIBLE HIT", {
                                        fileName: "OzPhysics.hx",
                                        lineNumber: 1211,
                                        className: "ozity.OzPhysics",
                                        methodName: "GetMaxUpDY"
                                    });
                                    var ea = (da - P) * W,
                                        fa = U.physics.x + U.geometry.x - U.geometry.halfWidth,
                                        ga = fa + 2 * U.geometry.halfWidth;
                                    Z + ea < fa || X + ea > ga || (Y = da)
                                }
                            }
                        }
                        R = Math.min(P, Y) - P;
                        t = R / O
                    }
                    0 == (n & 256) && (0 > t ? (s = b.horSideHit(k.x + l.x + t, k.y + l.y, l.halfWidth, l.halfHeight, -1)) ? (k.x = b.horHitSet(k.x + l.x + t, l.halfWidth, -1) - l.x, n |= 8, null != m.rightHitObject && (m.rightHit || k.x - u > m.rightHitDiff + k.velX * c) && (n |= 258)) : null != q ? (k.x += t, n |= 8, m.CollisionResponse(g, q)) : k.x += t : (s = b.horSideHit(k.x + l.x + t, k.y + l.y, l.halfWidth, l.halfHeight, 1)) ? (k.x = b.horHitSet(k.x + l.x + t, l.halfWidth, 1) - l.x, n |= 2, null != m.leftHitObject && (m.leftHit || k.x - u < m.leftHitDiff + k.velX * c) && (n |= 264)) : null != q ? (k.x += t, n |= 2, m.CollisionResponse(g, q)) : k.x += t);
                    var q = null,
                        s = !1,
                        V = k.velY * c;
                    null != k.standingOn && (V += k.standingOn.physics.velY *
                        c);
                    var ia = k.y;
                    m.topHitDiff = m.bottomHitDiff = 0;
                    m.topHitObject = m.bottomHitObject = null;
                    m.topHit = m.bottomHit = !1;
                    for (var ja = g.physics.x + g.geometry.x - g.geometry.halfWidth, la = ja + 2 * g.geometry.halfWidth, ka = g.physics.y + g.geometry.y - g.geometry.halfHeight, ma = ka + 2 * g.geometry.halfHeight, oa = g.physics.colGroup, qa = g.physics.colMask, na = 0; na < a.length;) {
                        var ra = a[na];
                        ++na;
                        if (ra != g && !ra.dead && null != ra.geometry && null != ra.physics && !ra.physics.isSensor && 1 != ra.physics.bodyType && 0 != (oa & ra.physics.colMask) && 0 != (ra.physics.colGroup &
                                qa)) {
                            var ua = ra.physics.x + ra.geometry.x - ra.geometry.halfWidth,
                                pa = ra.physics.y + ra.geometry.y - ra.geometry.halfHeight,
                                ta = ra.physics.y + ra.geometry.y + ra.geometry.halfHeight,
                                xa = ra.physics.velY * c;
                            if (!(ja + 1 > ra.physics.x + ra.geometry.x + ra.geometry.halfWidth || la - 1 < ua))
                                if (ta - 1 - xa < ka) {
                                    ka + V < ta && (m.topHit = !0);
                                    var va = ta - (ka + V);
                                    null == m.topHitObject ? (m.topHitObject = ra, m.topHitDiff = va) : va > m.topHitDiff && (m.topHitObject = ra, m.topHitDiff = va)
                                } else if (pa + 1 - xa > ma) {
                                ma + V > pa && (m.bottomHit = !0);
                                var wa = pa - (ma + V);
                                null == m.bottomHitObject ?
                                    (m.bottomHitObject = ra, m.bottomHitDiff = wa) : wa < m.bottomHitDiff && (m.bottomHitObject = ra, m.bottomHitDiff = wa)
                            }
                        }
                    }
                    null != m.topHitObject && null != m.bottomHitObject && 0 < m.topHitDiff - m.bottomHitDiff && (m.topHit = m.bottomHit = !0);
                    m.topHit && m.bottomHit ? (k.y += V + (m.topHitDiff + m.bottomHitDiff) / 2, n |= 261) : m.bottomHit ? (n |= 4, V = m.bottomHitDiff + V, q = m.bottomHitObject) : m.topHit && (n |= 1, V = m.topHitDiff + V, q = m.topHitObject);
                    m.bottomHit || (k.standingOn = null);
                    if (0 == (n & 256))
                        if (0 > V)
                            if (s = b.verSideHit(k.x + l.x, k.y + l.y + V, l.halfWidth, l.halfHeight, -1)) {
                                k.y = b.verHitSet(k.y + l.y + V, l.halfHeight, -1) - l.y;
                                n |= 1;
                                null != m.bottomHitObject && (m.bottomHit || k.y - ia > m.bottomHitDiff + k.velY * c) && (n |= 260);
                                for (var Aa = Math.floor((k.y + l.y - l.halfHeight + V - b.offsetY) / b.tileSize), Fa = Math.floor((k.x + l.x - l.halfWidth + 0.1 - b.offsetX) / b.tileSize), Ja = Math.floor((k.x + l.x + l.halfWidth - 0.1 - b.offsetX) / b.tileSize) + 1; Fa < Ja;) {
                                    var Ga = Fa++,
                                        Ha = b.getTileObject(Aa, Ga);
                                    g.dead || null == Ha || Ha.hitBelow(g, Aa, Ga)
                                }
                            } else null != q ? (k.y += V, m.topHit && (n |= 1), m.bottomHit && (k.standingOn = m.bottomHitObject),
                                m.CollisionResponse(g, q)) : k.y += V;
                    else {
                        var ya = b.downHitSpecialSet(k.x, k.y + l.y + V + (0 < (k.hitFlags & 16) ? 10 : 0), l.halfHeight),
                            s = b.verSideHit(k.x + l.x, k.y + l.y + V, l.halfWidth, l.halfHeight, 1, Math.floor(k.y + l.y + l.halfHeight + 0.1) < Math.floor(k.y + l.y + l.halfHeight + V + 0.1));
                        null != q && (isNaN(ya) ? s && (k.y + V > b.verHitSet(k.y + l.y + V, l.halfHeight, 1) - l.y ? q = null : s = !1) : k.y + V > ya + l.y ? q = null : ya = NaN);
                        if (isNaN(ya))
                            if (s) {
                                k.y = b.verHitSet(k.y + l.y + V, l.halfHeight, 1) - l.y;
                                n |= 4;
                                null != m.topHitObject && (m.topHit || k.y - ia < m.topHitDiff + k.velY * c) &&
                                    (n |= 257);
                                for (var Ia = Math.floor((k.y + l.y + l.halfHeight + V - b.offsetY) / b.tileSize), Ka = Math.floor((k.x + l.x - l.halfWidth + 0.1 - b.offsetX) / b.tileSize), Qa = Math.floor((k.x + l.x + l.halfWidth - 0.1 - b.offsetX) / b.tileSize) + 1; Ka < Qa;) {
                                    var Ma = Ka++,
                                        Oa = b.getTileObject(Ia, Ma);
                                    g.dead || null == Oa || Oa.hitAbove(g, Ia, Ma)
                                }
                            } else null != q ? (k.y += V, m.bottomHit && (n |= 4, k.standingOn = m.bottomHitObject), m.CollisionResponse(g, q)) : k.y += V;
                        else k.y = ya - l.y, n |= 4, n |= 16, null != m.topHitObject && 0 < m.topHitObject.physics.velY && (m.topHit || k.y - ia < m.topHitDiff +
                            k.velY * c) && (n |= 257)
                    }
                    k.hitFlags = n;
                    if (0 > k.velX && 0 < (k.hitFlags & 8) || 0 < k.velX && 0 < (k.hitFlags & 2)) k.velX = 0;
                    if (0 > k.velY && 0 < (k.hitFlags & 1) || 0 < k.velY && 0 < (k.hitFlags & 4)) k.velY = 0;
                    if (0 < (k.colGroup & 15728640))
                        for (var Sa = Math.floor((k.x - l.halfWidth + 0.01 - b.offsetX) / b.tileSize), Ua = Math.floor((k.x + l.halfWidth - 0.01 - b.offsetX) / b.tileSize) + 1, Ra = Math.floor((k.y - l.halfHeight + 0.01 - b.offsetY) / b.tileSize), Xa = Math.floor((k.y + l.halfHeight - 0.01 - b.offsetY) / b.tileSize) + 1; Ra < Xa;)
                            for (var Ta = Ra++, Va = Sa, cb = Ua; Va < cb;) {
                                var Ya = Va++,
                                    Za =
                                    b.getTileObject(Ta, Ya);
                                g.dead || null == Za || Za.touch(g, Ta, Ya)
                            }
                    break;
                case 2:
                    for (var Ca = k.velX * c, Da = k.velY * c, jb = k.x + l.x, kb = k.y + l.y, za = !1, Wa = 0; Wa < a.length;) {
                        var ab = a[Wa];
                        ++Wa;
                        if (!(ab == g || ab.dead || null == ab.geometry || 1 != ab.geometry.type && 3 != ab.geometry.type || null == ab.physics || ab.physics.isSensor || 1 == ab.physics.bodyType || 0 == (k.colGroup & ab.physics.colMask) || 0 == (ab.physics.colGroup & k.colMask))) {
                            var eb = ab.physics,
                                sa = ab.geometry;
                            if (1 == sa.type) {
                                var fb = eb.x + sa.x - jb,
                                    ib = eb.y + sa.y - kb;
                                fb * fb + ib * ib > sa.halfWidth * sa.halfWidth +
                                    sa.halfHeight * sa.halfHeight + l.radius * l.radius || (m.AdjustNearestData(g, Ca, Da, ab, -sa.halfWidth, -sa.halfHeight, sa.halfWidth, -sa.halfHeight, m.nearestData, za) && (za = !0), m.AdjustNearestData(g, Ca, Da, ab, sa.halfWidth, -sa.halfHeight, sa.halfWidth, sa.halfHeight, m.nearestData, za) && (za = !0), m.AdjustNearestData(g, Ca, Da, ab, sa.halfWidth, sa.halfHeight, -sa.halfWidth, sa.halfHeight, m.nearestData, za) && (za = !0), m.AdjustNearestData(g, Ca, Da, ab, -sa.halfWidth, sa.halfHeight, -sa.halfWidth, -sa.halfHeight, m.nearestData, za) && (za = !0))
                            }
                        }
                    }
                    za &&
                        m.AdjustCircleFromSegment(g, Ca, Da, m.nearestData, m.tempVec2) && (Ca = m.tempVec2[0], Da = m.tempVec2[1]);
                    G.trace("ikonata", {
                        fileName: "OzPhysics.hx",
                        lineNumber: 938,
                        className: "ozity.OzPhysics",
                        methodName: "Update",
                        customParams: [k.x, k.y, Ca, Da]
                    });
                    k.x += Ca;
                    k.y += Da;
                    break;
                default:
                    G.trace("ERROR geometry not supported", {
                        fileName: "OzPhysics.hx",
                        lineNumber: 947,
                        className: "ozity.OzPhysics",
                        methodName: "Update",
                        customParams: [g.geometry.type]
                    })
            }
        }
        for (var $a = 0; $a < a.length;) {
            var Pa = a[$a];
            ++$a;
            var Ba = Pa.physics,
                Na = Pa.geometry;
            if (null != Na && null != Ba && 3 == Ba.bodyType)
                if (1 == Na.type)
                    for (var lb = Ba.x + Na.x - Na.halfWidth, mb = Ba.y + Na.y - Na.halfHeight, yb = Math.floor((lb + 0.01 - b.offsetX) / b.tileSize), zb = Math.floor((lb + 2 * Na.halfWidth - 0.01 - b.offsetX) / b.tileSize) + 1, nb = Math.floor((mb + 0.01 - b.offsetY) / b.tileSize), Ab = Math.floor((mb + 2 * Na.halfHeight - 0.01 - b.offsetY) / b.tileSize) + 1; nb < Ab;)
                        for (var pb = nb++, sb = yb, Fb = zb; sb < Fb;) {
                            var ub = sb++,
                                vb = b.getTileObject(pb, ub);
                            Pa.dead || null == vb || vb.touch(Pa, pb, ub)
                        } else if (2 == Na.type)
                            for (var wb = Ba.x + Na.x - Na.radius,
                                    xb = Ba.y + Na.y - Na.radius, Hb = Math.floor((wb + 0.01 - b.offsetX) / b.tileSize), Ib = Math.floor((wb + 2 * Na.radius - 0.01 - b.offsetX) / b.tileSize) + 1, Db = Math.floor((xb + 0.01 - b.offsetY) / b.tileSize), Lb = Math.floor((xb + 2 * Na.radius - 0.01 - b.offsetY) / b.tileSize) + 1; Db < Lb;)
                                for (var ob = Db++, Jb = Hb, Ob = Ib; Jb < Ob;) {
                                    var qb = Jb++,
                                        rb = qb * b.tileSize + b.offsetX,
                                        tb = ob * b.tileSize + b.offsetY,
                                        Eb = rb + b.tileSize,
                                        Gb = tb + b.tileSize,
                                        db = Ba.x + Na.x,
                                        gb = Ba.y + Na.y,
                                        hb = Na.radius,
                                        Cb;
                                    if (gb > tb && gb < Gb && db + hb > rb && db - hb < Eb) Cb = !0;
                                    else if (db > rb && db < Eb && gb + hb > tb && gb - hb < Gb) Cb = !0;
                                    else {
                                        var Yb = Eb - db,
                                            Pb = Math.min(Math.abs(rb - db), Math.abs(Yb)),
                                            ac = Gb - gb,
                                            Sb = Math.min(Math.abs(tb - gb), Math.abs(ac));
                                        Cb = Pb * Pb + Sb * Sb < hb * hb
                                    }
                                    if (Cb) {
                                        var Tb = b.getTileObject(ob, qb);
                                        Pa.dead || null == Tb || Tb.touch(Pa, ob, qb);
                                        1 == (b.colData[ob][qb] >> 16 & 15) && Ba.hasCollisionResponseWithType(Q.AnyType) && Ba.collisionResponseWithType(Q.AnyType)
                                    }
                                }
        }
        for (var Ub = 0, bc = a.length; Ub < bc;) {
            var Mb = Ub++,
                ha = a[Mb];
            if (!ha.dead && null != ha.geometry && null != ha.physics)
                if (1 == ha.geometry.type)
                    for (var Vb = ha.physics.x + ha.geometry.x - ha.geometry.halfWidth,
                            dc = Vb + 2 * ha.geometry.halfWidth, Wb = ha.physics.y + ha.geometry.y - ha.geometry.halfHeight, ec = Wb + 2 * ha.geometry.halfHeight, Xb = Mb + 1, fc = a.length; Xb < fc;) {
                        var gc = Xb++,
                            Ea = a[gc];
                        if (!Ea.dead && null != Ea.geometry && null != Ea.physics) {
                            if (1 == Ea.geometry.type) {
                                var Zb = Ea.physics.x + Ea.geometry.x - Ea.geometry.halfWidth,
                                    hc = Zb + 2 * Ea.geometry.halfWidth,
                                    Qb;
                                if (dc <= Zb || hc <= Vb) Qb = !1;
                                else {
                                    var cc = Ea.physics.y + Ea.geometry.y - Ea.geometry.halfHeight,
                                        lc = cc + 2 * Ea.geometry.halfHeight;
                                    Qb = ec <= cc || lc <= Wb ? !1 : !0
                                }
                                if (!Qb) continue
                            } else if (2 == Ea.geometry.type) {
                                var Nb =
                                    ha.physics.x + ha.geometry.x - ha.geometry.halfWidth,
                                    mc = Nb + 2 * ha.geometry.halfWidth,
                                    vc = ha.physics.y + ha.geometry.y - ha.geometry.halfHeight,
                                    wc = vc + 2 * ha.geometry.halfHeight,
                                    nc = Ea.physics.x + Ea.geometry.x,
                                    $b = Ea.physics.y + Ea.geometry.y,
                                    ic = Ea.geometry.radius,
                                    Kb;
                                if ($b > vc && $b < wc && nc + ic > Nb && nc - ic < mc) Kb = !0;
                                else if (nc > Nb && nc < mc && $b + ic > vc && $b - ic < wc) Kb = !0;
                                else {
                                    var Ec = mc - nc,
                                        Lc = Math.min(Math.abs(Nb - nc), Math.abs(Ec)),
                                        Fc = wc - $b,
                                        yc = Math.min(Math.abs(vc - $b), Math.abs(Fc));
                                    Kb = Lc * Lc + yc * yc < ic * ic
                                }
                                if (!Kb) continue
                            } else throw new D(new Bb("We Can Only Collide Rectangles and CIRCLES in G2!"));
                            m.CollisionResponse(ha, Ea)
                        }
                    } else if (2 == ha.geometry.type)
                        for (var jc = ha.physics.x + ha.geometry.x, oc = ha.physics.y + ha.geometry.y, kc = ha.geometry.radius, pc = Mb + 1, qc = a.length; pc < qc;) {
                            var Ic = pc++,
                                La = a[Ic];
                            if (!La.dead && null != La.geometry && null != La.physics) {
                                if (1 == La.geometry.type) {
                                    var rc = La.physics.x + La.geometry.x - La.geometry.halfWidth,
                                        sc = rc + 2 * La.geometry.halfWidth,
                                        Mc = La.physics.y + La.geometry.y - La.geometry.halfHeight,
                                        tc = Mc + 2 * La.geometry.halfHeight,
                                        xc = ha.physics.x + ha.geometry.x,
                                        Rb = ha.physics.y + ha.geometry.y,
                                        bb =
                                        ha.geometry.radius,
                                        Gc;
                                    if (Rb > Mc && Rb < tc && xc + bb > rc && xc - bb < sc) Gc = !0;
                                    else if (xc > rc && xc < sc && Rb + bb > Mc && Rb - bb < tc) Gc = !0;
                                    else {
                                        var Jc = sc - xc,
                                            zc = Math.min(Math.abs(rc - xc), Math.abs(Jc)),
                                            Kc = tc - Rb,
                                            Ac = Math.min(Math.abs(Mc - Rb), Math.abs(Kc));
                                        Gc = zc * zc + Ac * Ac < bb * bb
                                    }
                                    if (!Gc) continue
                                } else if (2 == La.geometry.type) {
                                    var Bc = jc - (La.physics.x + La.geometry.x),
                                        Cc = oc - (La.physics.y + La.geometry.y);
                                    if (!(Bc * Bc + Cc * Cc < kc * kc + La.geometry.radius * La.geometry.radius)) continue
                                } else throw new D(new Bb("We Can Only Collide Rectangles and CIRCLES in G2!"));
                                m.CollisionResponse(ha, La)
                            }
                        } else throw new D(new Bb("We Can Only Collide Rectangles and Circles G1!"));
        }
        for (var uc = 0; uc < a.length;) {
            var Dc = a[uc];
            ++uc;
            var Hc = Dc.physics;
            null != Dc.geometry && null != Hc && 2 != Hc.bodyType && (Hc.velX += Hc.accelX * c, Hc.velY += Hc.accelY * c)
        }
    }; m.AdjustNearestData = function(a, b, c, d, e, f, h, g, k, l) {
        b = a.physics.x + a.geometry.x + b;
        a = a.physics.y + a.geometry.y + c;
        c = d.physics;
        d = d.geometry;
        var n = c.x,
            q = c.y,
            s = c.degrees,
            t = m.tempVec2;
        d.applyOriginRotation(d.x + e, d.y + f, d.degrees, t);
        x.rotateAroundPoint(t[0],
            t[1], s, 0, 0, t);
        t[0] += n;
        t[1] += q;
        e = m.tempVec2[0];
        f = m.tempVec2[1];
        n = c.x;
        q = c.y;
        c = c.degrees;
        s = m.tempVec2;
        d.applyOriginRotation(d.x + h, d.y + g, d.degrees, s);
        x.rotateAroundPoint(s[0], s[1], c, 0, 0, s);
        s[0] += n;
        s[1] += q;
        h = m.tempVec2[0];
        g = m.tempVec2[1];
        b = x.PointLineDistance(e, f, h, g, b, a, !0);
        return !l || b < k[4] ? (k[0] = e, k[1] = f, k[2] = h, k[3] = g, k[4] = b, k[5] = x.PLDNearest, !0) : !1
    }; m.AdjustCircleFromSegment = function(a, b, c, d, e) {
        var f = a.physics.x + a.geometry.x + b,
            h = a.physics.y + a.geometry.y + c,
            g = d[0],
            k = d[1],
            l = d[2],
            n = d[3];
        return d[4] < a.geometry.radius ?
            (x.ProjectPointOnLineSegment(f, h, g, k, l, n, m.tempVec2), G.trace("(" + f, {
                fileName: "OzPhysics.hx",
                lineNumber: 1112,
                className: "ozity.OzPhysics",
                methodName: "AdjustCircleFromSegment",
                customParams: [h + "),(" + g, k + "),(" + l, n + "),(" + m.tempVec2[0], m.tempVec2[1] + ")"]
            }), d = l - g, n -= k, k = 0 * d - -1 * n, n = -1 * d + 0 * n, d = Math.sqrt(k * k + n * n), k = k * a.geometry.radius / d, n = n * a.geometry.radius / d, e[0] = m.tempVec2[0] - f + b + k, e[1] = m.tempVec2[1] - h + c + n, !0) : !1
    }; m.CollisionResponse = function(a, b) {
        if (null != a.physics.colTypes && null != b.physics.colTypes)
            for (var c =
                    0, d = a.physics.colTypes; c < d.length;) {
                var e = d[c];
                ++c;
                for (var f = 0, h = b.physics.colTypes; f < h.length;) {
                    var g = h[f];
                    ++f;
                    var k = m.ColHandlers.get(e);
                    null != k && (k = k.get(g), null != k && k(a, b));
                    if (a.dead || b.dead) return;
                    g = m.ColHandlers.get(g);
                    null != g && (g = g.get(e), null != g && g(b, a));
                    if (a.dead || b.dead) return
                }
            }
    }; m.GetMaxUpDY = function(a, b, c, d, e) {
        var f = a.physics,
            h = a.geometry,
            g = f.y + h.y - h.halfHeight,
            k = d / e,
            m = f.x + h.x - h.halfWidth,
            h = m + 2 * h.halfWidth;
        b = g + b.GetMaxUpDY(m, h, g, d, e);
        d = f.colGroup;
        f = f.colMask;
        for (e = 0; e < c.length;) {
            var l =
                c[e];
            ++e;
            if (l != a && !l.dead && null != l.geometry && 1 == l.geometry.type && null != l.physics && !l.physics.isSensor && 1 != l.physics.bodyType && 0 != (d & l.physics.colMask) && 0 != (l.physics.colGroup & f)) {
                var n = l.physics.y + l.geometry.y + l.geometry.halfHeight;
                if (n < g + 1 && n > b) {
                    G.trace("POSSIBLE HIT", {
                        fileName: "OzPhysics.hx",
                        lineNumber: 1211,
                        className: "ozity.OzPhysics",
                        methodName: "GetMaxUpDY"
                    });
                    var q = (n - g) * k,
                        s = l.physics.x + l.geometry.x - l.geometry.halfWidth,
                        l = s + 2 * l.geometry.halfWidth;
                    h + q < s || m + q > l || (b = n)
                }
            }
        }
        return Math.min(g, b) - g
    }; m.GetSlope =
    function(a, b, c, d) {
        return a.getSlope(b, c, d)
    }; m.goStaticHorHit = function(a, b, c, d, e) {
        m.leftHitDiff = m.rightHitDiff = 0;
        m.leftHitObject = m.rightHitObject = null;
        m.leftHit = m.rightHit = !1;
        c = b.physics.x + b.geometry.x - b.geometry.halfWidth;
        for (var f = c + 2 * b.geometry.halfWidth, h = b.physics.y + b.geometry.y - b.geometry.halfHeight, g = h + 2 * b.geometry.halfHeight, k = b.physics.colGroup, l = b.physics.colMask, n = 0; n < a.length;) {
            var q = a[n];
            ++n;
            if (q != b && !q.dead && null != q.geometry && 1 == q.geometry.type && null != q.physics && !q.physics.isSensor &&
                1 != q.physics.bodyType && 0 != (k & q.physics.colMask) && 0 != (q.physics.colGroup & l)) {
                var s = q.physics.x + q.geometry.x - q.geometry.halfWidth,
                    t = q.physics.x + q.geometry.x + q.geometry.halfWidth,
                    u = q.physics.y + q.geometry.y - q.geometry.halfHeight,
                    v = q.physics.velX * e;
                h + 1 > q.physics.y + q.geometry.y + q.geometry.halfHeight || g - 1 < u || (t - 1 - v < c ? (c + d < t && (m.leftHit = !0), s = t - (c + d), null == m.leftHitObject ? (m.leftHitObject = q, m.leftHitDiff = s) : s > m.leftHitDiff && (m.leftHitObject = q, m.leftHitDiff = s)) : s + 1 - v > f && (f + d > s && (m.rightHit = !0), s -= f + d, null ==
                    m.rightHitObject ? (m.rightHitObject = q, m.rightHitDiff = s) : s < m.rightHitDiff && (m.rightHitObject = q, m.rightHitDiff = s)))
            }
        }
        null != m.rightHitObject && null != m.leftHitObject && 0 < m.leftHitDiff - m.rightHitDiff && (m.rightHit = m.leftHit = !0)
    }; m.goStaticVerHit = function(a, b, c, d, e) {
        m.topHitDiff = m.bottomHitDiff = 0;
        m.topHitObject = m.bottomHitObject = null;
        m.topHit = m.bottomHit = !1;
        c = b.physics.x + b.geometry.x - b.geometry.halfWidth;
        for (var f = c + 2 * b.geometry.halfWidth, h = b.physics.y + b.geometry.y - b.geometry.halfHeight, g = h + 2 * b.geometry.halfHeight,
                k = b.physics.colGroup, l = b.physics.colMask, n = 0; n < a.length;) {
            var q = a[n];
            ++n;
            if (q != b && !q.dead && null != q.geometry && null != q.physics && !q.physics.isSensor && 1 != q.physics.bodyType && 0 != (k & q.physics.colMask) && 0 != (q.physics.colGroup & l)) {
                var s = q.physics.x + q.geometry.x - q.geometry.halfWidth,
                    t = q.physics.y + q.geometry.y - q.geometry.halfHeight,
                    u = q.physics.y + q.geometry.y + q.geometry.halfHeight,
                    v = q.physics.velY * e;
                c + 1 > q.physics.x + q.geometry.x + q.geometry.halfWidth || f - 1 < s || (u - 1 - v < h ? (h + d < u && (m.topHit = !0), s = u - (h + d), null == m.topHitObject ?
                    (m.topHitObject = q, m.topHitDiff = s) : s > m.topHitDiff && (m.topHitObject = q, m.topHitDiff = s)) : t + 1 - v > g && (g + d > t && (m.bottomHit = !0), s = t - (g + d), null == m.bottomHitObject ? (m.bottomHitObject = q, m.bottomHitDiff = s) : s < m.bottomHitDiff && (m.bottomHitObject = q, m.bottomHitDiff = s)))
            }
        }
        null != m.topHitObject && null != m.bottomHitObject && 0 < m.topHitDiff - m.bottomHitDiff && (m.topHit = m.bottomHit = !0)
    }; m.outsideVer = function(a, b, c, d) {
        return a + 0.001 > d ? !0 : b - 0.001 < c
    }; m.outsideHor = function(a, b, c, d) {
        return a + 0.001 > d ? !0 : b - 0.001 < c
    }; m.goRectRectHit =
    function(a, b, c, d, e) {
        var f = e.physics.x + e.geometry.x - e.geometry.halfWidth,
            h = f + 2 * e.geometry.halfWidth;
        if (b <= f || h <= a) return !1;
        a = e.physics.y + e.geometry.y - e.geometry.halfHeight;
        e = a + 2 * e.geometry.halfHeight;
        return d <= a || e <= c ? !1 : !0
    }; m.goCircCircHit = function(a, b, c, d) {
        a -= d.physics.x + d.geometry.x;
        b -= d.physics.y + d.geometry.y;
        return a * a + b * b < c * c + d.geometry.radius * d.geometry.radius
    }; m.goRectCircHit = function(a, b) {
        var c = a.physics.x + a.geometry.x - a.geometry.halfWidth,
            d = c + 2 * a.geometry.halfWidth,
            e = a.physics.y + a.geometry.y -
            a.geometry.halfHeight,
            f = e + 2 * a.geometry.halfHeight,
            h = b.physics.x + b.geometry.x,
            g = b.physics.y + b.geometry.y,
            k = b.geometry.radius;
        if (g > e && g < f && h + k > c && h - k < d || h > c && h < d && g + k > e && g - k < f) return !0;
        d -= h;
        c = Math.min(Math.abs(c - h), Math.abs(d));
        f -= g;
        e = Math.min(Math.abs(e - g), Math.abs(f));
        return c * c + e * e < k * k
    }; m.rawRectCircHit = function(a, b, c, d, e, f, h) {
        if (f > c && f < d && e + h > a && e - h < b || e > a && e < b && f + h > c && f - h < d) return !0;
        b -= e;
        a = Math.min(Math.abs(a - e), Math.abs(b));
        d -= f;
        c = Math.min(Math.abs(c - f), Math.abs(d));
        return a * a + c * c < h * h
    }; m.__super__ =
    N; m.prototype = R(N.prototype, {
        hitTop: function() {
            return 0 < (this.hitFlags & 1)
        },
        hitRight: function() {
            return 0 < (this.hitFlags & 2)
        },
        hitBottom: function() {
            return 0 < (this.hitFlags & 4)
        },
        hitLeft: function() {
            return 0 < (this.hitFlags & 8)
        },
        hitSpecialBottom: function() {
            return 0 < (this.hitFlags & 16)
        },
        smashed: function() {
            return 0 < (this.hitFlags & 256)
        },
        isDynamic: function() {
            return 1 == this.bodyType
        },
        isStatic: function() {
            return 2 == this.bodyType
        },
        isKinematic: function() {
            return 3 == this.bodyType
        },
        init: function() {
            this.x = this.gameObject.transform.x;
            this.y = this.gameObject.transform.y;
            this.degrees = this.gameObject.transform.degrees;
            var a = this.compPrefab.get("type");
            this.bodyType = null == a ? 1 : "kinematic" == a ? 3 : "static" == a ? 2 : 1;
            this.isSensor = "true" == this.compPrefab.get("sensor");
            this.isTop = "true" == this.compPrefab.get("top");
            1 == this.bodyType && (this.accelY = this.gameObject.gameSystem.gravity);
            var a = this.compPrefab.get("filter"),
                a = m.getFilter(a),
                b = a.get("colGroup");
            null != b && (this.colGroup = K.parseInt("0x" + b));
            a = a.get("colMask");
            null != a && (this.colMask = K.parseInt("0x" +
                a));
            a = this.compPrefab.get("colTypes");
            if (null != a)
                for (a = x.CommaStringToArray(a), this.colTypes = [], this.colTypes.push(Q.AnyType), b = 0; b < a.length;) {
                    var c = a[b];
                    ++b;
                    try {
                        this.colTypes.push(U.createEnum(Q, c, null))
                    } catch (d) {
                        throw new D(this.gameObject.getType() + ": no such colType in enum: " + c);
                    }
                }
        },
        hasCollisionResponseWithType: function(a) {
            if (null != this.colTypes)
                for (var b = m.ColHandlers.get(a), c = 0, d = this.colTypes; c < d.length;) {
                    var e = d[c];
                    ++c;
                    var f = m.ColHandlers.get(e);
                    if (null != f && f.exists(a) || null != b && b.exists(e)) return !0
                }
            return !1
        },
        collisionResponseWithType: function(a) {
            if (null != this.colTypes)
                for (var b = m.ColHandlers.get(a), c = 0, d = this.colTypes; c < d.length;) {
                    var e = d[c];
                    ++c;
                    var f = m.ColHandlers.get(e);
                    null != f && f.exists(a) && f.get(a)(this.gameObject, null);
                    null != b && b.exists(e) && b.get(e)(null, this.gameObject)
                }
        },
        setxy: function(a, b) {
            this.x = a;
            this.y = b
        },
        stopDead: function() {
            this.velX = this.velY = this.accelX = this.accelY = 0
        },
        FillBounds: function(a) {
            this.gameObject.geometry.getMinMaxXY(this.x, this.y, this.degrees, a);
            return a
        },
        outOfScreenBounds: function() {
            var a =
                (l.WIDTH - l.WIDTH_MIN) / 2,
                b = (l.HEIGHT - l.HEIGHT_MIN) / 2;
            this.FillBounds(m.BoundVec4);
            return m.BoundVec4[2] < -a || m.BoundVec4[0] > l.WIDTH_MIN + a || m.BoundVec4[3] < -b ? !0 : m.BoundVec4[1] > l.HEIGHT_MIN + b
        },
        __class__: m
    });
    var Fc = function(a, b, c) {
        this.aJ = [];
        this.aI = [];
        N.call(this, a, b, c)
    }; s["ozity.OzTileObject"] = Fc; Fc.__name__ = ["ozity", "OzTileObject"]; Fc.__super__ = N; Fc.prototype = R(N.prototype, {
        init: function() {
            this.tileMap = this.gameObject.gameSystem.tileMap
        },
        touch: function(a, b, c) {},
        hitBelow: function(a, b, c) {},
        hitAbove: function(a,
            b, c) {},
        getId: function(a, b) {
            for (var c = 0, d = this.aI.length; c < d;) {
                var e = c++;
                if (this.aI[e] == a && this.aJ[e] == b) return e
            }
            return -1
        },
        __class__: Fc
    });
    var jb = function(a, b) {
        this.degrees = 0;
        N.call(this, a, null, b);
        null != b ? (this.x = parseFloat(b.get("x")), this.y = parseFloat(b.get("y")), this.degrees = parseFloat(b.get("rot"))) : this.setxydeg()
    }; s["ozity.OzTransform"] = jb; jb.__name__ = ["ozity", "OzTransform"]; jb.__super__ = N; jb.prototype = R(N.prototype, {
        setxydeg: function(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            this.x =
                a;
            this.y = b;
            this.degrees = c
        },
        fromParent: function(a) {
            x.rotateAroundPoint(a.x + this.x, a.y + this.y, a.degrees, a.x, a.y, jb.TempVec);
            this.x = jb.TempVec[0];
            this.y = jb.TempVec[1];
            this.degrees += a.degrees
        },
        blabla: function() {
            G.trace("blabla", {
                fileName: "OzTransform.hx",
                lineNumber: 38,
                className: "ozity.OzTransform",
                methodName: "blabla"
            })
        },
        __class__: jb
    });
    var Xc = function(a, b, c) {
        this.toTrigger = null;
        N.call(this, a, b, c)
    }; s["ozity.OzTrigger"] = Xc; Xc.__name__ = ["ozity", "OzTrigger"]; Xc.__super__ = N; Xc.prototype = R(N.prototype, {
        init: function() {
            N.prototype.init.call(this);
            this.toTrigger = []
        },
        addToTrigger: function(a) {
            this.toTrigger.push(a)
        },
        trigger: function() {
            for (var a = 0, b = this.toTrigger; a < b.length;) {
                var c = b[a];
                ++a;
                c.directMessage(L.TRIGGER)
            }
        },
        __class__: Xc
    });
    var z = function(a, b, c) {
        this.wasSpeeding = !1;
        this.lastMouseDownFrame = -1;
        this.lastFrameMDown = !1;
        this.food = 0;
        this.isPlayer = !0;
        this.rotSpeed = 0.17;
        this.speed = 100;
        N.call(this, a, b, c);
        null != b.get("speed") && (this.speed = parseFloat(b.get("speed")));
        null != b.get("rotSpeed") && (this.rotSpeed = parseFloat(b.get("rotSpeed")));
        null !=
            c.get("isPlayer") && (this.isPlayer = "true" == c.get("isPlayer"))
    }; s["ozity.OzWorm"] = z; z.__name__ = ["ozity", "OzWorm"]; z.GetPossibleAnswer = function() {
        if (0.15 > Math.random()) return z.ProblemSolution;
        var a = z.ProblemSolution - 11;
        1 > a && (a = 1);
        100 <= a + 22 && (a = 77);
        return a + (22 * Math.random() | 0)
    }; z.StaticInit = function() {
        z.Mode = 0;
        z.ProblemSolution = -1E4;
        G.trace("we set mode none!", {
            fileName: "OzWorm.hx",
            lineNumber: 165,
            className: "ozity.OzWorm",
            methodName: "StaticInit"
        });
        z.Bananas = [];
        z.Worms = []
    }; z.SetMode = function(a) {
        z.Mode =
            a;
        z.Player.newProblem();
        z.Player.fillWithRings()
    }; z.__super__ = N; z.prototype = R(N.prototype, {
        newProblem: function() {
            G.trace("new problem", {
                fileName: "OzWorm.hx",
                lineNumber: 88,
                className: "ozity.OzWorm",
                methodName: "newProblem"
            });
            var a = ["+", "-", "*", "/"],
                a = 5 == z.Mode ? a[4 * Math.random() | 0] : a[z.Mode - 1],
                b = -1,
                c, d, e;
            if ("+" == a || "-" == a) {
                for (; c = 1 + 8.98 * Math.random() | 0, d = 1 + 8.98 * Math.random() | 0, e = c + d, b = "+" == a ? e : e - d, b == z.ProblemSolution;);
                z.ProblemSolution = b;
                z.ProblemStatement = "+" == a ? c + "+" + d : e + "-" + d
            } else {
                for (; c = 1 + 8.98 *
                    Math.random() | 0, d = 1 + 8.98 * Math.random() | 0, e = c * d, b = "*" == a ? e : e / d | 0, b == z.ProblemSolution;);
                z.ProblemSolution = b;
                z.ProblemStatement = "*" == a ? c + "*" + d : e + "/" + d
            }
            t.TextMath(E.instance.problemSprite.getChild("problem"), z.ProblemStatement + "=?", V.CENTER);
            t.TextMath(E.instance.problemSprite2.getChild("problem2"), z.ProblemStatement + "=?", V.LEFT);
            0 < this.eatenCircles && (n.To(E.instance.problemSprite, 0.15, {
                scaleX: 1.2,
                scaleY: 1.2
            }).reflect(!0).ease(Ca.QuadOut), n.To(E.instance.problemSprite2, 0.15, {
                scaleX: 1.2,
                scaleY: 1.2
            }).reflect(!0).ease(Ca.QuadOut))
        },
        die: function() {
            if (!this.gameObject.dead) {
                for (var a = 0, b = z.Worms.length; a < b;) {
                    var c = a++;
                    if (z.Worms[c] == this) {
                        z.Worms.splice(c, 1);
                        break
                    }
                }
                for (var a = this.gameObject.graphics.depth, c = b = this.par.child.prev, d = this.gameObject.physics.x, e = this.gameObject.physics.y;;) {
                    var h = [f.New(q.cmcSmoke)],
                        l = 360 * Math.random();
                    h[0].set_rotation(l);
                    this.gameObject.gameSystem.addSprite(h[0], a);
                    var l = d + c.get_x(),
                        g = e + c.get_y();
                    h[0].set_x(l);
                    h[0].set_y(g);
                    l = h[0].set_scaleY(0.6);
                    h[0].set_scaleX(l);
                    h[0]._updateOldValues();
                    n.To(h[0],
                        0.7, {
                            alpha: 0.5,
                            scaleX: 1.2,
                            scaleY: 1.2
                        }).ease(Ca.QuadIn).onComplete(function(a) {
                        return function() {
                            a[0].dispose()
                        }
                    }(h)).onUpdate(function(a, b) {
                        return function() {
                            var c = b[0];
                            c.set_rotation(c.get_rotation() + a[0])
                        }
                    }([4], h));
                    c = c.prev;
                    c != b && (c = c.prev);
                    if (c == b) break
                }
                this.gameObject.kill();
                this.isPlayer ? this.gameObject.gameSystem.sendMessage(L.PLAYER_DIE) : (z.SpawnTimer = 150, this.gameObject.gameSystem.sendMessage(L.PLAYER_JUMP))
            }
        },
        adjustEnemies: function() {
            if (0 < z.SpawnTimer) z.SpawnTimer--;
            else {
                var a = 150 / this.gameObject.gameSystem.camera.getZoomX();
                if (1 > z.Worms.length) {
                    for (var b, c, d;;)
                        if (c = Math.random() * Math.PI * 2, b = 500 * Math.cos(c) + z.Player.gameObject.physics.x, c = 500 * Math.sin(c) + z.Player.gameObject.physics.y, d = !0, 100 > E.MinDistInside(b, c)) d = !1;
                        else {
                            for (var e = 0, f = z.Bananas.length; e < f;) {
                                var h = e++,
                                    g = z.Bananas[h],
                                    h = g.gameObject.transform.x - b,
                                    g = g.gameObject.transform.y - c;
                                if (h * h + g * g < a * a) {
                                    d = !1;
                                    break
                                }
                            }
                            if (!d)
                                if (d) break;
                                else continue;
                            e = 0;
                            for (f = z.Player.posX.length; e < f;)
                                if (g = e++, h = z.Player.posX[g] - b, g = z.Player.posY[g] - c, h * h + g * g < a * a + 1E4) {
                                    d = !1;
                                    break
                                }
                            if (d) break
                        }
                    d &&
                        (a = this.gameObject.gameSystem.createLazyGameObjectByStringId("worm"), d = a.getComponent(z), a.transform.setxydeg(b, c, 0), a.init(), d.isPlayer = !1, a.postInit())
                }
            }
        },
        destroy: function() {
            N.prototype.destroy.call(this);
            this.removeSpeedRings();
            for (var a = 0, b = z.Worms.length; a < b;) {
                var c = a++;
                if (z.Worms[c] == this) {
                    z.Worms.splice(c, 1);
                    break
                }
            }
        },
        adjustBananas: function() {
            for (var a = this.gameObject.gameSystem.camera.getZoomX(), b = l.WIDTH_MAX / a, a = l.HEIGHT_MAX / a, c = this.gameObject.physics.x - b / 2, d = this.gameObject.physics.y - a /
                    2, c = E.AdjustX(c, b), d = E.AdjustY(d, a), e = Ga.Radius + 25, f = 0; f < z.Bananas.length;) {
                var h = z.Bananas[f];
                h.gameObject.physics.x + e < c || h.gameObject.physics.x - e > c + b || h.gameObject.physics.y + e < d || h.gameObject.physics.y - e > d + a ? h.gameObject.destroy() : ++f
            }
            f = (b + a) * Math.random();
            f < b ? (c += f, b = 0 > Math.sin(this.dir) ? d - e : d + a + e) : (c = 0 > Math.cos(this.dir) ? c - e : c + b + e, b = d + f - b);
            this.putBananaIfYouCan(c, b)
        },
        putBananaIfYouCan: function(a, b) {
            if (20 <= z.Bananas.length) return !1;
            var c = 150 / this.gameObject.gameSystem.camera.getZoomX(),
                d = E.MinDistInside(a,
                    b);
            if (0 > d - c) return !1;
            for (var d = 0, e = z.Bananas.length; d < e;) {
                var f = d++,
                    h = z.Bananas[f],
                    f = h.gameObject.transform.x - a,
                    h = h.gameObject.transform.y - b;
                if (f * f + h * h < c * c) return !1
            }
            d = 0;
            for (e = z.Worms.length + 1; d < e;)
                for (var f = d++, f = f < z.Worms.length ? z.Worms[f] : z.Player, h = 0, g = f.posX.length; h < g;) {
                    var k = h++,
                        l = f.posX[k] - a,
                        k = f.posY[k] - b;
                    if (l * l + k * k < c * c + 1E4) return !1
                }
            c = this.gameObject.gameSystem.createLazyGameObjectByStringId("banana");
            c.transform.setxydeg(a, b, 0);
            c.init();
            c.postInit();
            return !0
        },
        fillWithRings: function() {
            for (var a =
                    this.gameObject.gameSystem.camera.getZoomX(), b = l.WIDTH_MAX / a, a = l.HEIGHT_MAX / a, c = this.gameObject.physics.x - b / 2, d = this.gameObject.physics.y - a / 2, c = E.AdjustX(c, b), d = E.AdjustY(d, a), e = 0; this.putBananaIfYouCan(c + b * Math.random(), d + a * Math.random()), ++e, 20 > z.Bananas.length && 100 > e;);
        },
        eatCircle: function() {
            this.eatenCircles++;
            100 > this.numSegments && this.appendSegment();
            this.newProblem()
        },
        postInit: function() {
            N.prototype.postInit.call(this);
            z.SpawnTimer = 150;
            this.eatenCircles = 0;
            this.speedRings = [];
            this.speedRingFrame = -1;
            var a = this.gameObject.graphics.getGameSprite();
            a.gotoAndStop(this.isPlayer ? 1 : 2);
            this.par = f.New();
            this.gameObject.graphics.changeSprite(this.par);
            this.par.addChild(a);
            a.set_x(0);
            a.set_y(0);
            a.addChild(this.leftEye = f.New(q.cmcWhiteEye));
            var b = this.leftEye;
            b.set_x(8);
            b.set_y(-13);
            this.leftEye.addChild(this.bLeftEye = f.New(q.cmcBlackEye));
            b = this.bLeftEye;
            b.set_x(6);
            b.set_y(0);
            a.addChild(this.rightEye = f.New(q.cmcWhiteEye));
            a = this.rightEye;
            a.set_x(8);
            a.set_y(13);
            this.rightEye.addChild(this.bRightEye = f.New(q.cmcBlackEye));
            a = this.bRightEye;
            a.set_x(6);
            a.set_y(0);
            this.diameter = 30;
            this.segDist = 10;
            this.numSegments = 1;
            for (a = this.dir = 2 * Math.random() * Math.PI; 0 > a;) a += 2 * Math.PI;
            for (; a >= 2 * Math.PI;) a -= 2 * Math.PI;
            this.dir = a;
            this.posX = [];
            this.posY = [];
            this.posX.push(this.gameObject.physics.x);
            for (this.posY.push(this.gameObject.physics.y); 10 > this.numSegments;) this.appendSegment();
            for (var a = 3 * -Math.cos(this.dir), b = 3 * -Math.sin(this.dir), c = 1, d = this.posX.length; c < d;) {
                var e = c++;
                this.posX[e] = this.posX[e - 1] + a;
                this.posY[e] = this.posY[e - 1] + b
            }
            this.isPlayer ?
                (this.gameObject.gameSystem.camera.setWatchable(this.gameObject), this.gameObject.gameSystem.setPlayer(this.gameObject), z.Player = this) : z.Worms.push(this);
            this.drawWorm()
        },
        appendSegment: function() {
            var a = f.New(q.cmcWormSegment);
            a.gotoAndStop(this.isPlayer ? 1 : 2);
            this.gameObject.graphics.getGameSprite().addChild(a, 0);
            this.numSegments++;
            this.adjustWormSegments()
        },
        minBananaBoundsSegmentDist: function(a, b, c, d) {
            var e = Math.min(E.MinDistInside(a, b), E.MinDistInside(c, d));
            if (0 >= e) return 0;
            for (var f = 0, h = z.Bananas.length; f <
                h;) {
                var g = f++,
                    g = z.Bananas[g],
                    e = Math.min(e, x.PointLineDistance(a, b, c, d, g.gameObject.physics.x, g.gameObject.physics.y, !0) - Ga.Radius);
                if (0 >= e) return 0
            }
            return e
        },
        checkPolarSegmentBananaBounds: function(a, b, c, d, e) {
            return this.minBananaBoundsSegmentDist(a, b, a + Math.cos(d) * c, b + Math.sin(d) * c) >= e
        },
        hitsBananaOrBounds: function(a, b, c) {
            if (E.MinDistInside(a, b) < c) return !0;
            c += 25;
            for (var d = 0, e = z.Bananas.length; d < e;) {
                var f = d++,
                    h = z.Bananas[f],
                    f = h.gameObject.transform.x - a,
                    h = h.gameObject.transform.y - b;
                if (f * f + h * h < c * c) return !0
            }
            return !1
        },
        update: function() {
            N.prototype.update.call(this);
            if (!this.gameObject.dead) {
                this.isPlayer && 1 < this.gameObject.cnt && 0 != z.Mode && (this.adjustBananas(), this.adjustEnemies());
                var a = E.MinDistInside(this.gameObject.physics.x, this.gameObject.physics.y),
                    a = a - this.diameter / 2;
                if (0 > a) this.die();
                else {
                    for (var a = 0, b = z.Worms.length + 1; a < b;) {
                        var c = a++,
                            c = c < z.Worms.length ? z.Worms[c] : z.Player;
                        if (c != this && !c.gameObject.dead)
                            for (var d = (this.diameter + c.diameter) / 2, d = d * d, e = 0, p = c.posX.length; e < p;) {
                                var m = e++,
                                    g = c.posX[m] - this.gameObject.physics.x,
                                    m = c.posY[m] - this.gameObject.physics.y;
                                if (g * g + m * m < d) {
                                    this.die();
                                    return
                                }
                            }
                    }
                    c = this.gameObject.physics.x;
                    d = this.gameObject.physics.y;
                    a = this.gameObject.gameSystem.camera.toWorldX(h.mx);
                    b = this.gameObject.gameSystem.camera.toWorldY(h.my);
                    p = a - this.gameObject.physics.x;
                    g = b - this.gameObject.physics.y;
                    e = 0;
                    if (64 < p * p + g * g) {
                        for (e = Math.atan2(g, p); 0 > e;) e += 2 * Math.PI;
                        for (; e >= 2 * Math.PI;) e -= 2 * Math.PI;
                        for (e -= this.dir; 0 <= e;) e -= 2 * Math.PI;
                        Math.abs(e) > Math.abs(e + 2 * Math.PI) && (e += 2 * Math.PI);
                        e < -this.rotSpeed ? e = -this.rotSpeed : e >
                            this.rotSpeed && (e = this.rotSpeed)
                    }
                    if (!this.isPlayer && !this.checkPolarSegmentBananaBounds(c, d, 80, this.dir + e, 30))
                        if (this.checkPolarSegmentBananaBounds(c, d, 80, this.dir, 30)) e = 0;
                        else {
                            for (var g = Math.PI / 2 / 16, k = m = 0, p = 1; 16 >= p && !this.checkPolarSegmentBananaBounds(c, d, 80, this.dir - p * g, 30);) ++p;
                            if (16 >= p)
                                for (var m = -p * g, n = -(p - 1) * g, s = 0; 14 > s;) {
                                    s++;
                                    var t = (m + n) / 2;
                                    this.checkPolarSegmentBananaBounds(c, d, 80, this.dir + t, 30) ? m = t : n = t
                                }
                            for (n = 1; 16 >= n && !this.checkPolarSegmentBananaBounds(c, d, 80, this.dir + n * g, 30);) ++n;
                            if (16 >= n)
                                for (k =
                                    n * g, g *= n - 1, s = 0; 14 > s;) s++, t = (k + g) / 2, this.checkPolarSegmentBananaBounds(c, d, 80, this.dir + t, 30) ? k = t : g = t;
                            16 < p && 16 < n || (e = Math.abs(m) < Math.abs(k) ? -Math.min(Math.abs(m), this.rotSpeed) : Math.min(Math.abs(k), this.rotSpeed))
                        }
                    for (c = this.dir += e; 0 > c;) c += 2 * Math.PI;
                    for (; c >= 2 * Math.PI;) c -= 2 * Math.PI;
                    this.dir = c;
                    if (this.isPlayer)
                        for (c = 0; 2 > c;) d = c++, e = this.gameObject.physics.x, p = this.gameObject.physics.y, g = 8 * Math.cos(this.dir) - 13 * (0 == d ? -1 : 1) * Math.sin(this.dir), m = 8 * Math.sin(this.dir) + 13 * (0 == d ? -1 : 1) * Math.cos(this.dir), g *=
                            this.gameObject.graphics.getGameSprite().get_scaleX(), m *= this.gameObject.graphics.getGameSprite().get_scaleY(), e = Math.atan2(b - p - m, a - e - g), (0 == d ? this.leftEye : this.rightEye).set_rotation(180 * (e - this.dir) / Math.PI);
                    a = this.speed;
                    b = h.mdown && 2 < this.gameObject.cnt;
                    l.isMobile && b && (b = this.wasSpeeding ? !0 : !this.lastFrameMDown && 20 > this.gameObject.gameSystem.updateFrame - this.lastMouseDownFrame ? !0 : !1);
                    !this.lastFrameMDown && h.mdown && (this.lastMouseDownFrame = this.gameObject.gameSystem.updateFrame);
                    this.lastFrameMDown =
                        h.mdown;
                    if (this.wasSpeeding = b) {
                        if (a *= 2, this.isPlayer || (a *= 0.85), this.speedRingFrame++, 0 == this.speedRingFrame % 2)
                            for (b = 0, c = 0 == this.speedRingFrame ? Math.ceil(this.numSegments / 2) : 1; b < c;) b++, d = f.New(q.cmcSpeedRing), x.Reverse_oz_OzSprite(this.speedRings), this.speedRings.push(d), x.Reverse_oz_OzSprite(this.speedRings), this.gameObject.gameSystem.addSprite(d, this.gameObject.graphics.depth - 1)
                    } else this.speedRingFrame = -1, this.removeSpeedRings();
                    this.gameObject.physics.velX = a * Math.cos(this.dir);
                    this.gameObject.physics.velY =
                        a * Math.sin(this.dir)
                }
            }
        },
        removeSpeedRings: function() {
            for (; 0 < this.speedRings.length;) this.speedRings[this.speedRings.length - 1].dispose(), this.speedRings.pop()
        },
        drawWorm: function() {
            var a = 0,
                b = this.par.child.prev;
            b.set_rotation(180 * this.dir / Math.PI);
            for (var c = 3 - this.slack, d = -1, e = this.gameObject.physics.x, f = this.gameObject.physics.y, h = 0, g = this.speedRingFrame % 2 / 1 | 0;;) {
                b.set_scaleX(b.set_scaleY(this.diameter / 60));
                if (0 < a) {
                    for (c += this.segDist; 3 <= c;) c -= 3, ++d;
                    var k = Math.max(0, d) | 0,
                        l = Math.min(this.posX.length -
                            1, d + 1) | 0,
                        m = 1 - c / 3,
                        n = this.posX[k] * m + this.posX[l] * (1 - m),
                        m = this.posY[k] * m + this.posY[l] * (1 - m);
                    if (k == l)
                        if (0 == k) l = 1;
                        else if (k == this.posX.length - 1) k = this.posX.length - 2;
                    else throw new D("can't be equal over end");
                    b.set_rotation(180 * Math.atan2(this.posY[k] - this.posY[l], this.posX[k] - this.posX[l]) / Math.PI);
                    b.set_x(n - e);
                    b.set_y(m - f)
                }
                h < this.speedRings.length && a % 2 == g && (this.speedRings[h].set_scaleX(this.speedRings[h].set_scaleY(b.get_scaleX())), 0 == a ? (k = this.speedRings[h], k.set_x(e), k.set_y(f)) : (k = this.speedRings[h],
                    l = b.get_x() + e, n = b.get_y() + f, k.set_x(l), k.set_y(n)), (0 == this.speedRingFrame || 0 == a && 0 == this.speedRingFrame % 2) && this.speedRings[h]._updateOldValues(), ++h);
                b = b.prev;
                ++a;
                if (!(a < this.numSegments)) break
            }
            for (; h < this.speedRings.length;) this.speedRings[this.speedRings.length - 1].dispose(), this.speedRings.pop()
        },
        adjustAngle: function(a) {
            for (; 0 > a;) a += 2 * Math.PI;
            for (; a >= 2 * Math.PI;) a -= 2 * Math.PI;
            return a
        },
        adjustWormSegments: function() {
            for (var a = Math.ceil((this.numSegments - 1) * this.segDist / 3) + 1, b = this.posX[this.posX.length -
                    1], c = this.posY[this.posY.length - 1]; this.posX.length < a;) this.posX.push(b), this.posY.push(c)
        },
        postUpdate: function() {
            if (!this.gameObject.dead) {
                var a = this.gameObject.physics.x - this.posX[0],
                    b = this.gameObject.physics.y - this.posY[0];
                this.slack = Math.sqrt(a * a + b * b);
                var c = Math.floor(this.slack / 3);
                this.slack -= 3 * c;
                var c = Math.min(this.posX.length, c) | 0,
                    d = 0;
                if (0 < c)
                    for (b = Math.atan2(b, a), a = 3 * Math.cos(b), b = 3 * Math.sin(b); d < c;) {
                        var e = (this.posX.length - d) % this.posX.length,
                            f = (this.posX.length - d - 1) % this.posX.length;
                        this.posX[f] =
                            this.posX[e] + a;
                        this.posY[f] = this.posY[e] + b;
                        ++d
                    }
                x.ReverseFloats(this.posX, 0, this.posX.length - d);
                x.ReverseFloats(this.posY, 0, this.posY.length - d);
                x.ReverseFloats(this.posX, this.posX.length - d);
                x.ReverseFloats(this.posY, this.posY.length - d);
                x.ReverseFloats(this.posX);
                x.ReverseFloats(this.posY);
                this.drawWorm()
            }
        },
        __class__: z
    });
    var Lb = function(a) {
        this.p = a;
        this.doc = new f;
        a.stateSprite.addChild(this.doc);
        this.cnt = 0
    }; s["states.State"] = Lb; Lb.__name__ = ["states", "State"]; Lb.prototype = {
        update: function() {
            h.down[27] &&
                !h.kproc[27] && (h.kproc[27] = !0, this.escape());
            this.cnt++
        },
        preRender: function() {},
        escape: function() {
            return null != tb.LastDialogRater ? (tb.HideRateDialog(), !0) : null != tb.LastLivesDialog ? (tb.HideLivesDialog(), !0) : !1
        },
        resize: function() {},
        __class__: Lb
    };
    var E = function(a, b) {
        this.earthQuakeDuraiton = 0;
        this.fromEditor = !1;
        this.gameSystem = null;
        var c = this;
        Lb.call(this, a);
        this.editorLvl = b;
        var d = K.parseInt("240");
        G.trace("TILESIZE IS BRO", {
            fileName: "StatePlay.hx",
            lineNumber: 181,
            className: "states.StatePlay",
            methodName: "new",
            customParams: [d]
        });
        null == E.tileMap ? E.tileMap = new v(E.BoundsWidth / d | 0, E.BoundsHeight / d | 0, E.OffsetX, E.OffsetY, d, 1, 1, !1) : E.tileMap.reset();
        this.collectedStars = 0;
        this.firstMDown = !1;
        E.instance = this;
        this.bounds = [];
        this.touch = l.isMobile;
        this.weStart = !0;
        this.curShape = this.curClick = 0;
        this.doc.addChild(this.menuSprite = new f);
        mb.cmcPlay(this.menuSprite);
        f.BGInit(this.menuSprite.getChild("bg"), 0);
        this.menuSprite.getChild("btnPause").makeButton(ea(this, this.pause));
        this.doc.addChild(this.objectSprite = f.New());
        this.doc.addChild(this.nextSprite = f.New());
        this.doc.addChild(this.hoverSprite = f.New());
        this.hoverSprite.set_alpha(0.7);
        this.doc.addChild(this.clockSprite = f.New());
        this.doc.addChild(this.guiSprite = f.New());
        this.guiSprite.addChild(this.menuSprite.getChild("btnPause"));
        this.guiSprite.addChild(this.menuSprite.getChild("score"));
        this.guiSprite.addChild(this.menuSprite.getChild("btnCancel"));
        this.guiSprite.addChild(this.menuSprite.getChild("minimap"));
        this.guiSprite.addChild(this.menuSprite.getChild("sponsor"));
        this.guiSprite.addChild(this.problemSprite = f.New());
        this.problemSprite.addChild(this.menuSprite.getChild("problem"));
        var d = this.problemSprite,
            e = this.problemSprite.getChild("problem"),
            m = e.get_x(),
            n = e.get_y();
        d.set_x(m);
        d.set_y(n);
        d.set_rotation(e.get_rotation());
        d = this.problemSprite;
        d.set_y(d.get_y() + 17);
        d = this.problemSprite.getChild("problem");
        d.set_x(0);
        d.set_y(-17);
        this.guiSprite.addChild(this.problemSprite2 = f.New());
        this.problemSprite2.addChild(this.menuSprite.getChild("problem2"));
        d = this.problemSprite2;
        e = this.problemSprite2.getChild("problem2");
        m = e.get_x();
        n = e.get_y();
        d.set_x(m);
        d.set_y(n);
        d.set_rotation(e.get_rotation());
        d = this.problemSprite2;
        d.set_y(d.get_y() + 17);
        d = this.problemSprite2.getChild("problem2");
        d.set_x(0);
        d.set_y(-17);
        t.atHooda ? this.guiSprite.getChild("sponsor").set_visible(!1) : (this.guiSprite.getChild("sponsor").makeLink(t.moreGames), d = this.problemSprite2, d.set_y(d.get_y() - 55));
        this.doc.addChild(this.overlaySprite = f.New());
        mb.cmcPlayOverlay(this.overlaySprite);
        this.showMenu1(!0);
        E.SetupAudioButtons(this.overlaySprite);
        E.AdjustAudioButtons(this.overlaySprite);
        this.overlaySprite.getChild("soundOn").setFluid(72);
        this.overlaySprite.getChild("soundOff").setFluid(72);
        this.overlaySprite.getChild("problem").setFluid(8);
        this.overlaySprite.getChild("problem").set_visible(!1);
        this.overlaySprite.getChild("score").set_visible(!1);
        this.overlaySprite.getChild("madeBy").setFluid(258);
        this.overlaySprite.getChild("sponsor").makeLink(t.moreGames);
        0 <= t.levelScores[0] ? t.TextMath(this.overlaySprite.getChild("best"), "BEST:" + t.levelScores[0],
            V.CENTER) : this.overlaySprite.getChild("best").set_visible(!1);
        this.overlaySprite.getChild("btnPlay").makeButton(function(a) {
            c.showMenu1(!1)
        });
        this.overlaySprite.getChild("btnInstructions").makeButton(ea(this, this.showInstructions));
        this.overlaySprite.getChild("btnAddition").makeButton(function(a) {
            z.SetMode(1);
            c.startPlay()
        });
        this.overlaySprite.getChild("btnSubtraction").makeButton(function(a) {
            z.SetMode(2);
            c.startPlay()
        });
        this.overlaySprite.getChild("btnMultiplication").makeButton(function(a) {
            z.SetMode(3);
            c.startPlay()
        });
        this.overlaySprite.getChild("btnDivision").makeButton(function(a) {
            z.SetMode(4);
            c.startPlay()
        });
        this.overlaySprite.getChild("btnMixed").makeButton(function(a) {
            z.SetMode(5);
            c.startPlay()
        });
        this.doc.addChild(this.instructionsSprite = f.New());
        mb.cmcInstructions(this.instructionsSprite);
        this.instructionsSprite.getChild("screen1").gotoAndStop(1);
        this.instructionsSprite.getChild("text1").gotoAndStop(1);
        this.instructionsSprite.getChild("screen2").gotoAndStop(2);
        this.instructionsSprite.getChild("text2").gotoAndStop(2);
        this.instructionsSprite.getChild("screen3").gotoAndStop(3);
        d = l.isMobile ? 4 : 3;
        this.instructionsSprite.getChild("text3").gotoAndStop(d);
        this.instructionsSprite.set_visible(!1);
        this.instructionsSprite.getChild("btnOK").makeButton(ea(this, this.hideInstructions));
        this.doc.addChild(this.dialogSprite = f.New());
        this.doc.addChild(this.failSprite = f.New());
        this.state = E.NORMAL;
        this.guiSprite.getChild("score").setFluid(264);
        this.guiSprite.getChild("btnPause").setFluid(72);
        this.problemSprite.setFluid(8);
        this.problemSprite2.setFluid(258);
        this.guiSprite.getChild("sponsor").setFluid(258);
        this.guiSprite.getChild("minimap").setFluid(66);
        this.guiSprite.getChild("minimap").addChild(this.miniPlayer = f.New(q.cmcMinimapPlayer));
        this.doc.adjustAllLayouts();
        this.resetGame();
        G.trace(this.objectSprite.padFlags, {
            fileName: "StatePlay.hx",
            lineNumber: 423,
            className: "states.StatePlay",
            methodName: "new",
            customParams: [this.doc.padFlags, this.doc.parent.padFlags, this.doc.parent.parent.padFlags, l.instance.doc.padFlags]
        });
        h.mdown = h.mup = !1;
        h.reFocus(a);
        t.hideGUI &&
            (this.guiSprite.getChild("btnPause").set_visible(!1), d = this.guiSprite.getChild("touchDevice"), d.set_y(d.get_y() + 500));
        this.clearDirectionInput();
        this.resize()
    }; s["states.StatePlay"] = E; E.__name__ = ["states", "StatePlay"]; E.AdjustX = function(a, b) {
        a < E.OffsetX && (a = E.OffsetX);
        a + b > E.BoundsWidth - E.OffsetX && (a = E.BoundsWidth - E.OffsetX - b);
        return a
    }; E.AdjustY = function(a, b) {
        a < E.OffsetY && (a = E.OffsetY);
        a + b > E.BoundsHeight - E.OffsetY && (a = E.BoundsHeight - E.OffsetY - b);
        return a
    }; E.MinDistInside = function(a, b) {
        for (var c = 1E6,
                d = 0, e = E.worldBoundsX.length; d < e;) var f = d++,
            h = (f + 1) % E.worldBoundsX.length,
            g = 240 * (E.worldBoundsX[h] - E.worldBoundsX[f]),
            h = 240 * (E.worldBoundsY[h] - E.worldBoundsY[f]),
            f = (g * (b - (240 * E.worldBoundsY[f] + E.OffsetY)) - (a - (240 * E.worldBoundsX[f] + E.OffsetX)) * h) / Math.sqrt(g * g + h * h),
            c = Math.min(c, f);
        return c
    }; E.SetUpBG = function(a, b) {
        null == b && (b = 1);
        a.gotoAndStop(b)
    }; E.UpdateBG = function(a) {}; E.HolaShare = function(a) {
        lb.Share("Such Bunny Run", "Play this great bunny game! Tap To Jump", null)
    }; E.SetupAudioButtons = function(a) {
        a.getChild("soundOn").makeButton(function(b) {
            a.getChild("soundOn").set_visible(!1);
            a.getChild("soundOff").set_visible(!0);
            u.ToggleMuteMusic();
            u.ToggleMuteSound()
        });
        a.getChild("soundOff").makeButton(function(b) {
            a.getChild("soundOn").set_visible(!0);
            a.getChild("soundOff").set_visible(!1);
            u.ToggleMuteMusic();
            u.ToggleMuteSound()
        })
    }; E.AdjustAudioButtons = function(a) {
        a.getChild("soundOn").set_visible(!u.muteSound);
        a.getChild("soundOff").set_visible(u.muteSound)
    }; E.__super__ = Lb; E.prototype = R(Lb.prototype, {
        resetGame: function() {
            null != this.gameSystem && (this.gameSystem.destroy(), n.Reset(1));
            var a;
            if (null != this.editorLvl) this.fromEditor = !0, a = this.editorLvl, t.currentLevel = K.parseInt(a.get("name")) - 1, G.trace(t.currentLevel, {
                fileName: "StatePlay.hx",
                lineNumber: 502,
                className: "states.StatePlay",
                methodName: "resetGame",
                customParams: ["THIS IS LVL PARSED"]
            });
            else {
                var b = t.levelsXML;
                a = "" + (t.currentLevel + 1);
                var c = null;
                if (null != b)
                    for (b = b.elementsNamed("level"); b.hasNext();) {
                        var d = b.next(),
                            e = d.get("name");
                        if (null != e && e == a) {
                            c = d;
                            break
                        }
                    }
                a = c
            }
            this.gameSystem = new oa(this.objectSprite, a, E.tileMap, 0);
            this.gameSystem.addEventsListener(ea(this,
                this.processMessage));
            this.gameSystem.camera.makeCenterFixed();
            ka.MAX_CAMERA_SPEED = 2E4
        },
        showInstructions: function(a) {
            E.InstructionsSeen = !0;
            this.instructionsSprite.set_visible(!0)
        },
        hideInstructions: function(a) {
            this.instructionsSprite.set_visible(!1);
            E.StartPlayAfterInstructions && (this.startPlay(), E.StartPlayAfterInstructions = !1)
        },
        showMenu1: function(a) {
            this.overlaySprite.getChild("btnPlay").set_visible(a);
            this.overlaySprite.getChild("btnInstructions").set_visible(a);
            this.overlaySprite.getChild("score").set_visible(a);
            this.overlaySprite.getChild("best").set_visible(a);
            this.overlaySprite.getChild("btnAddition").set_visible(!a);
            this.overlaySprite.getChild("btnSubtraction").set_visible(!a);
            this.overlaySprite.getChild("btnMultiplication").set_visible(!a);
            this.overlaySprite.getChild("btnDivision").set_visible(!a);
            this.overlaySprite.getChild("btnMixed").set_visible(!a)
        },
        startPlay: function(a) {
            var b = this;
            this.overlaySprite.getChild("btnPlay").mouseEnabled && (0 > t.levelScores[0] && !E.InstructionsSeen ? (E.StartPlayAfterInstructions = !0, this.showInstructions()) : (t.TextMathWhite(this.guiSprite.getChild("score"), "0", V.LEFT), this.overlaySprite.getChild("problem").set_visible(!1), this.overlaySprite.getChild("btnPlay").mouseEnabled = !1, n.To(this.overlaySprite, 0.3, {
                alpha: 0.1
            }).ease(Ca.QuadIn).onComplete(function() {
                b.overlaySprite.set_visible(!1)
            })))
        },
        endPlay: function() {
            var a = this;
            this.showMenu1(!0);
            this.overlaySprite.getChild("score").set_visible(this.overlaySprite.getChild("best").set_visible(!0));
            var b = z.Player.eatenCircles;
            t.TextMathWhite(this.overlaySprite.getChild("score"),
                "SCORE:" + b, V.CENTER);
            t.levelScores[0] < b && (t.levelScores[0] = b);
            t.save();
            0 <= t.levelScores[0] && t.TextMath(this.overlaySprite.getChild("best"), "BEST:" + t.levelScores[0], V.CENTER);
            b = z.ProblemStatement + "=" + z.ProblemSolution;
            E.AdjustAudioButtons(this.overlaySprite);
            this.overlaySprite.set_visible(!0);
            this.overlaySprite.set_alpha(0);
            this.overlaySprite.getChild("problem").set_visible(!0);
            t.TextMath(this.overlaySprite.getChild("problem"), b, V.CENTER);
            this.overlaySprite.getChild("btnPlay").mouseEnabled = !1;
            n.To(this.overlaySprite,
                0.3, {
                    alpha: 1
                }).ease(Ca.QuadIn).onComplete(function() {
                a.resetGame();
                a.overlaySprite.getChild("btnPlay").mouseEnabled = !0
            })
        },
        resume: function(a) {
            var b = this;
            n.To(this.dialogSprite, 0.3, {
                alpha: 0.001
            }).onComplete(function() {
                b.dialogSprite.clear();
                b.paused = !1
            })
        },
        update: function() {
            Lb.prototype.update.call(this);
            if (!this.paused && this.state != E.LOSE && this.state != E.WIN) {
                (!this.overlaySprite.get_visible() || 1 > this.gameSystem.updateFrame) && this.gameSystem.update(1 / l.FPS);
                E.UpdateBG(this.menuSprite.getChild("bg"));
                var a = this.miniPlayer,
                    b = this.gameSystem.getPlayer().physics.x / 100,
                    c = this.gameSystem.getPlayer().physics.y / 100;
                a.set_x(b);
                a.set_y(c);
                0 < this.earthQuakeDuraiton && (this.earthQuakeDuraiton--, 0 == this.earthQuakeDuraiton ? (a = this.objectSprite, a.set_x(0), a.set_y(0)) : (a = this.objectSprite, b = 1 - 3 * Math.random(), c = 1 - 3 * Math.random(), a.set_x(b), a.set_y(c)))
            }
        },
        clearDirectionInput: function() {
            var a = h.down,
                b = h.down,
                c = h.key("A"),
                d = h.down,
                e = h.key("D");
            a[37] = b[c] = h.down[39] = d[e] = !1
        },
        processMessage: function(a) {
            var b = this;
            switch (a[1]) {
                case 0:
                    this.state != E.NORMAL || this.overlaySprite.get_visible() || (this.overlaySprite.set_visible(!0), this.overlaySprite.set_alpha(0), u.PlaySound("boom"), this.gameSystem.camera.addEarthQuake(1), this.earthQuakeDuraiton = 20, n.DelayedCall(1, function() {
                        b.endPlay()
                    }));
                    break;
                case 2:
                    u.PlaySound("jump");
                    break;
                case 3:
                    u.PlaySound("smash");
                    break;
                case 4:
                    u.PlaySound("stomp");
                    break;
                case 5:
                    this.guiSprite.getChild("touchDevice").set_visible(!0);
                    this.guiSprite.getChild("helpMessage").set_visible(!0);
                    this.guiSprite.getChild("touchDevice").gotoAndStop(1 +
                        (l.isMobile ? 1 : 0));
                    this.guiSprite.getChild("helpMessage").gotoAndStop(2 + (l.isMobile ? 2 : 0));
                    break;
                case 7:
                    u.PlaySound("key");
                    break;
                case 8:
                    u.PlaySound("collect");
                    t.TextMathWhite(this.guiSprite.getChild("score"), "" + z.Player.eatenCircles, V.LEFT);
                    n.To(this.guiSprite.getChild("score"), 0.15, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }).reflect(!0).ease(Ca.QuadOut);
                    break;
                case 9:
                    u.PlaySound("opendoor");
                    break;
                case 10:
                    u.PlaySound("spring");
                    break;
                case 11:
                    u.PlaySound("boom");
                    break;
                case 12:
                    u.PlaySound("pop");
                    break;
                case 13:
                    u.PlaySound("pop")
            }
        },
        pause: function(a) {
            this.paused || this.state != E.NORMAL && this.state != E.WAITING || this.overlaySprite.get_visible() || (this.paused = !0, this.dialogSprite.clear(), mb.cmcPaused(this.dialogSprite), E.SetupAudioButtons(this.dialogSprite), E.AdjustAudioButtons(this.dialogSprite), this.dialogSprite.getChild("bg").smooth = !1, this.dialogSprite.set_alpha(0.001), n.To(this.dialogSprite, 0.3, {
                alpha: 1
            }), this.dialogSprite.getChild("btnPlay").makeButton(ea(this, this.resume)), u.hasSound || this.dialogSprite.getChild("btnSound").set_visible(!1))
        },
        escape: function() {
            if (Lb.prototype.escape.call(this)) return !0;
            this.pause();
            return !0
        },
        resize: function() {
            Lb.prototype.resize.call(this);
            this.overlaySprite.getChild("sponsor").set_y(440 + (l.HEIGHT - l.HEIGHT_MIN) / 4)
        },
        __class__: E
    });
    var Ya, Ad = 0; s.Math = Math; H.__init(); String.prototype.__class__ = s.String = String; String.__name__ = ["String"]; s.Array = Array; Array.__name__ = ["Array"]; Date.prototype.__class__ = s.Date = Date; Date.__name__ = ["Date"];
    var Cd = s.Int = {
            __name__: ["Int"]
        }, Bd = s.Dynamic = {
            __name__: ["Dynamic"]
        }, od = s.Float =
        Number; od.__name__ = ["Float"];
    var nd = s.Bool = Boolean; nd.__ename__ = ["Bool"];
    var pd = s.Class = {
        __name__: ["Class"]
    }, qd = {}; Ba.preload(); Ra.content = [{
            name: "levels",
            data: "PGxldmVscz4KCTxsZXZlbCB0aXRsZT0iZmlyc3QtMzgwIiBuYW1lPSIxIj4KCQk8b2JqZWN0IHg9IjQzNzYiIHR5cGU9Il9yZWN0IiB5PSI0NjAwIiByb3Q9IjAiPgoJCQk8Z2VvbWV0cnkgeD0iMCIgdHlwZT0icmVjdCIgaGFsZldpZHRoPSI3MiIgeT0iMCIgZGVncmVlcz0iMCIgaGFsZkhlaWdodD0iNzIiLz4KCQk8L29iamVjdD4KCQk8b2JqZWN0IHg9IjE0NDAiIHR5cGU9ImdyYXNzbXVkIiB5PSIxMjAwIiByb3Q9IjAiPgoJCQk8Z2VvbWV0cnkgblZlcnRpY2VzPSI3IiB0eXBlPSJwb2x5IiB5PSIwIiB2ZXJ0aWNlcz0iMjQwMCwwLDI4ODAsMCwyODgwLDI4ODAsMCwyODgwLDAsMjQwMCwyNDAsMjQwMCwyNDAwLDI0MCIgZGVncmVlcz0iMCIgeD0iMCIvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgeD0iLTM2MDAiIHR5cGU9ImdyYXNzbXVkIiB5PSIxMjAwIiByb3Q9IjAiPgoJCQk8Z2VvbWV0cnkgblZlcnRpY2VzPSI3IiB0eXBlPSJwb2x5IiB5PSIwIiB2ZXJ0aWNlcz0iMjg4MCwyODgwLDAsMjg4MCwwLDAsNDgwLDAsNDgwLDI0MCwyNjQwLDI0MDAsMjg4MCwyNDAwIiBkZWdyZWVzPSIwIiB4PSIwIi8+CgkJPC9vYmplY3Q+CgkJPG9iamVjdCB4PSItMzM2MCIgdHlwZT0iZ3Jhc3NtdWQiIHk9Ii0zMzYwIiByb3Q9IjAiPgoJCQk8Z2VvbWV0cnkgblZlcnRpY2VzPSI3IiB0eXBlPSJwb2x5IiB5PSIwIiB2ZXJ0aWNlcz0iMCwwLDI2NDAsMCwyNjQwLDQ4MCwyNDAwLDQ4MCw0ODAsMjQwMCw0ODAsMjY0MCwwLDI2NDAiIGRlZ3JlZXM9IjAiIHg9IjAiLz4KCQk8L29iamVjdD4KCQk8b2JqZWN0IHg9IjE0NDAiIHR5cGU9ImdyYXNzbXVkIiB5PSItMzM2MCIgcm90PSIwIj4KCQkJPGdlb21ldHJ5IG5WZXJ0aWNlcz0iNyIgdHlwZT0icG9seSIgeT0iMCIgdmVydGljZXM9IjAsNDgwLDAsMCwyNjQwLDAsMjY0MCwyNjQwLDIxNjAsMjY0MCwyMTYwLDI0MDAsMjQwLDQ4MCIgZGVncmVlcz0iMCIgeD0iMCIvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgeD0iMzYwIiB0eXBlPSJncmFzc211ZCIgdGlsZUZyYW1lPSI4IiB5PSItMzAwMCIgcm90PSIwIj4KCQkJPGdlb21ldHJ5IHg9IjAiIHR5cGU9InJlY3QiIGhhbGZXaWR0aD0iMTMyMCIgeT0iMCIgZGVncmVlcz0iMCIgaGFsZkhlaWdodD0iMTIwIi8+CgkJPC9vYmplY3Q+CgkJPG9iamVjdCB4PSIzNjAiIHR5cGU9ImdyYXNzbXVkIiB0aWxlRnJhbWU9IjIiIHk9IjM3MjAiIHJvdD0iMCI+CgkJCTxnZW9tZXRyeSB4PSIwIiB0eXBlPSJyZWN0IiBoYWxmV2lkdGg9IjEzMjAiIHk9IjAiIGRlZ3JlZXM9IjAiIGhhbGZIZWlnaHQ9IjEyMCIvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgeD0iMzcyMCIgdHlwZT0iZ3Jhc3NtdWQiIHRpbGVGcmFtZT0iNCIgeT0iMzYwIiByb3Q9IjAiPgoJCQk8Z2VvbWV0cnkgeD0iMCIgdHlwZT0icmVjdCIgaGFsZldpZHRoPSIxMjAiIHk9IjAiIGRlZ3JlZXM9IjAiIGhhbGZIZWlnaHQ9IjEzMjAiLz4KCQk8L29iamVjdD4KCQk8b2JqZWN0IHg9Ii0zMDAwIiB0eXBlPSJncmFzc211ZCIgdGlsZUZyYW1lPSI2IiB5PSIzNjAiIHJvdD0iMCI+CgkJCTxnZW9tZXRyeSB4PSIwIiB0eXBlPSJyZWN0IiBoYWxmV2lkdGg9IjEyMCIgeT0iMCIgZGVncmVlcz0iMCIgaGFsZkhlaWdodD0iMTMyMCIvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgeD0iMjAzIiB0eXBlPSJ3b3JtIiB5PSIyODMiIHJvdD0iMCIvPgoJPC9sZXZlbD4KPC9sZXZlbHM+Cg"
        },
        {
            name: "definitions",
            data: "PGRlZmluaXRpb25zPgoJPG9iamVjdHM+CgkJPG9iamVjdCBlZGl0b3I9ImRvdCIgdHlwZT0id29ybSI+CgkJCTxib2R5IGZpbHRlcj0iYW5pbWFsIiB0eXBlPSJkeW5hbWljIiBjb2xUeXBlcz0iUGxheWVyLENvbGxlY3RvciIvPgoJCQk8Z3JhcGhpY3Mgc3JjPSJjbWNXb3JtU2VnbWVudCIgdHlwZT0ic3ByaXRlIiBkZXB0aD0iMyIvPgoJCQk8Z2VvbWV0cnkgaGFsZkhlaWdodD0iMTUiIHR5cGU9InJlY3QiIHk9IjMiIHg9IjAiIGhhbGZXaWR0aD0iMTUiIGRlZ3JlZXM9IjAiLz4KCQkJPGMgbj0iT3pXb3JtIi8+CgkJPC9vYmplY3Q+CgkJPG9iamVjdCBlZGl0b3I9ImRvdCIgdHlwZT0iZG9vciI+CgkJCTxib2R5IHNlbnNvcj0idHJ1ZSIgdHlwZT0iZHluYW1pYyIgbWF0ZXJpYWw9ImJ1bm55IiBjb2xUeXBlcz0iRG9vciIvPgoJCQk8Z3JhcGhpY3Mgc3JjPSJjbWNEb29yIiB0eXBlPSJzcHJpdGUiIGRlcHRoPSIxIi8+CgkJCTxnZW9tZXRyeSBoYWxmSGVpZ2h0PSIyMCIgdHlwZT0icmVjdCIgeT0iLTIwIiB4PSIwIiBoYWxmV2lkdGg9IjEyIiBkZWdyZWVzPSIwIi8+CgkJCTxjIG49Ik96RG9vciIvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgZWRpdG9yPSJyZWN0IiB0eXBlPSJncmFzc211ZCI+CgkJCTwhLS08Ym9keSBtYXRlcmlhbD0ib3JnYW5pYyIgdHlwZT0ic3RhdGljIi8+LS0+CgkJCTxncmFwaGljcyB0eXBlPSJ0aWxlIiB0aWxlRG93bjIzPSIxNywxOCwxOSIgY29sbGlzaW9uPSJub25lIiB0aWxlVXA0NT0iMTAsMTEiIGV4cGFuZD0iMSIgdGlsZVVwMjM9IjE0LDE1LDE2IiB0aWxlRG93bjQ1PSIxMiwxMyIgc3JjPSJ0aWxlSnVuZ2xlIiBkZXB0aD0iMCIgc2NhbGU5PSIxIiB0aWxlUG9seT0idHJ1ZSIgdGlsZUV4Y2x1ZGU9IjExLDEzLDE1LDE2LDE4LDE5IiAvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgZWRpdG9yPSJkb3QiIHR5cGU9ImJhbmFuYSI+CgkJCTxib2R5IHNlbnNvcj0idHJ1ZSIgdHlwZT0ia2luZW1hdGljIiBtYXRlcmlhbD0ib3JnYW5pYyIgY29sVHlwZXM9IkJhbmFuYSIvPgoJCQk8Z3JhcGhpY3Mgc3JjPSJ0aWxlQ29pbiIgdHlwZT0ic3ByaXRlIiBkZXB0aD0iMiIgY29sbGlzaW9uPSJub25lIi8+CgkJCTxnZW9tZXRyeSByYWRpdXM9IjI1IiB0eXBlPSJjaXJjIiB5PSIwIiB4PSIwIiBkZWdyZWVzPSIwIi8+CgkJCTxjIG49Ik96QmFuYW5hIi8+CgkJPC9vYmplY3Q+CgkJPCEtLSBKT0lOVFMgLS0+CgkJPCEtLTxvYmplY3QgdHlwZT0icGluIiBlZGl0b3I9ImRvdCI+PGdyYXBoaWNzIHR5cGU9InNwcml0ZSIgc3JjPSJjbWNEb3QiIGRlcHRoPSIyIi8+PGMgbj0iT3pSZXZvbHV0ZUpvaW50IiB0ZXN0UEY9IkJvYmJ5RmFiZXIiLz48L29iamVjdD48b2JqZWN0IHR5cGU9ImRpc3RhbmNlIiBlZGl0b3I9ImxpbmUiPjxqb2ludCB0eXBlPSJkaXN0YW5jZSIvPjxncmFwaGljcyB0eXBlPSJsaW5lIiBzcmM9ImJtcENoYWluIiBkZXB0aD0iMiIgZW5kPSJjbWNDaGFpblBpbiIvPjwvb2JqZWN0Pi0tPgoJCTxvYmplY3QgdHlwZT0icGF0aCIgZWRpdG9yPSJwYXRoIj4KCQkJPGdyYXBoaWNzIGxpbmVjb2xvcj0iMDBmZjAwIiB0eXBlPSJwYXRoIiBzcmM9ImJtcFBhdGhFZGdlIiBlbmQ9ImNtY1BhdGhOb2RlIiBkZXB0aD0iMSIvPgoJCQk8YyBuPSJPelBhdGgiLz4KCQk8L29iamVjdD4KCQk8IS0tIFNZUyBPQkpFQ1RTIC0tPgoJCTxvYmplY3QgZWRpdG9yPSJwb2x5IiB0eXBlPSJfcG9seSI+CgkJCTxncmFwaGljcyBzcmM9ImJtcFN5c0ZpbGwiIHR5cGU9ImZpbGwiIHdpZHRoPSI2NCIgbGluZWNvbG9yPSJmZmZmZmYiIGhlaWdodD0iNjQiIGRlcHRoPSIwIiBsaW5ld2lkdGg9IjIiLz4KCQk8L29iamVjdD4KCQk8b2JqZWN0IGVkaXRvcj0icmVjdCIgdHlwZT0iX3JlY3QiPgoJCQk8Z3JhcGhpY3Mgc3JjPSJibXBTeXNGaWxsIiB0eXBlPSJmaWxsIiB3aWR0aD0iNjQiIGxpbmVjb2xvcj0iZmZmZmZmIiBoZWlnaHQ9IjY0IiBkZXB0aD0iMCIgbGluZXdpZHRoPSIyIi8+CgkJPC9vYmplY3Q+CgkJPG9iamVjdCBlZGl0b3I9ImNpcmMiIHR5cGU9Il9jaXJjIj4KCQkJPGdyYXBoaWNzIHNyYz0iYm1wU3lzRmlsbCIgdHlwZT0iZmlsbCIgd2lkdGg9IjY0IiBsaW5lY29sb3I9ImZmZmZmZiIgaGVpZ2h0PSI2NCIgZGVwdGg9IjAiIGxpbmV3aWR0aD0iMiIvPgoJCTwvb2JqZWN0PgoJCTxvYmplY3QgZWRpdG9yPSJ0cmkiIHR5cGU9Il90cmkiPgoJCQk8Z3JhcGhpY3Mgc3JjPSJibXBTeXNGaWxsIiB0eXBlPSJmaWxsIiB3aWR0aD0iNjQiIGxpbmVjb2xvcj0iZmZmZmZmIiBoZWlnaHQ9IjY0IiBkZXB0aD0iMCIgbGluZXdpZHRoPSIyIi8+CgkJPC9vYmplY3Q+Cgk8L29iamVjdHM+Cgk8ZmlsdGVycz4KCQk8ZmlsdGVyIGNvbEdyb3VwPSIwMDAwMDAwMSIgY29sTWFzaz0iMGZmZmZmZmYiIG5hbWU9ImRlZmF1bHQiLz4KCQk8ZmlsdGVyIGNvbEdyb3VwPSIwMGYwMDAwMSIgY29sTWFzaz0iMGZmZmZmZmYiIG5hbWU9ImFuaW1hbCIvPgoJPC9maWx0ZXJzPgoJPG1hdGVyaWFscz4KCQk8bWF0ZXJpYWwgZHluYW1pY0ZyaWN0aW9uPSIwLjIiIHN0YXRpY0ZyaWN0aW9uPSIwLjQiIGVsYXN0aWNpdHk9IjAuMiIgbmFtZT0icm9sbHppZSIvPgoJCTxtYXRlcmlhbCBkeW5hbWljRnJpY3Rpb249IjAiIGRlbnNpdHk9IjEwMCIgZWxhc3RpY2l0eT0iNSIgbmFtZT0iaGVhdnliYWxsIi8+CgkJPG1hdGVyaWFsIHN0YXRpY0ZyaWN0aW9uPSIwIiBkZW5zaXR5PSIwLjMiIGR5bmFtaWNGcmljdGlvbj0iMC41IiBuYW1lPSJ3b29kIi8+CgkJPG1hdGVyaWFsIGR5bmFtaWNGcmljdGlvbj0iMC4xIiBzdGF0aWNGcmljdGlvbj0iMC4xIiBkZW5zaXR5PSIwLjMiIGVsYXN0aWNpdHk9IjEuMiIgbmFtZT0ianVtcHkiLz4KCQk8bWF0ZXJpYWwgc3RhdGljRnJpY3Rpb249IjAuMDEiIGRlbnNpdHk9IjAuMyIgZHluYW1pY0ZyaWN0aW9uPSIwLjAxIiBuYW1lPSJzbm93eSIvPgoJCTxtYXRlcmlhbCBzdGF0aWNGcmljdGlvbj0iMSIgZGVuc2l0eT0iNSIgZHluYW1pY0ZyaWN0aW9uPSIxIiBuYW1lPSJidWxsZXR5Ii8+CgkJPG1hdGVyaWFsIG5hbWU9Im9yZ2FuaWMiLz4KCQk8bWF0ZXJpYWwgc3RhdGljRnJpY3Rpb249IjAiIGVsYXN0aWNpdHk9IjAiIG5hbWU9ImJ1bm55Ii8+CgkJPG1hdGVyaWFsIHN0YXRpY0ZyaWN0aW9uPSIwLjIiIGRlbnNpdHk9IjUiIG5hbWU9Im1ldGFsIi8+Cgk8L21hdGVyaWFscz4KPC9kZWZpbml0aW9ucz4K"
        }
    ];
    var O = {}; cb.preload();
    var zd = zd || {}; zd.JQuery = window.jQuery;
    var Nb = Yc.ArrayBuffer || Za; null == Nb.prototype.slice && (Nb.prototype.slice = Za.sliceImpl);
    var ud = Yc.DataView || Oc, hb = Yc.Uint8Array || pb._new, yc = Event.prototype, Ic = fa.prototype; yc.clone = Ic.clone; yc.isDefaultPrevented = Ic.isDefaultPrevented; yc.get_target = Ic.get_target; yc.set_target = Ic.set_target; yc.get_currentTarget = Ic.get_currentTarget; yc.set_currentTarget = Ic.set_currentTarget; C.AssetNames = ["assets/GameFont.png", "assets/Objects.png"]; C.AssetBytes = [24901, 806868]; l.BOTH_ORIENTATIONS = !1; l.INTERPOLATE = !1; l.hasResized = !1; l.started = !1; l.NumChangedStates = 0; l.systemPaused = !1; l.hadSound = !0; u.needsAudio = !0; u.hasMusic = !1; u.hasSound = !1; u.loaded = !1; u.initted = !1; u.muteMusic = !1; u.muteSound = !1; u.locallyMuted = !1; bc.JioTopScore = 0; A.BMPsToRemove = []; A.ShowBlank = !1; A.NoGA = !1; A.timePassed = !0; A.filterAds = !1; A.showMobile = !0; A.showCross = !0; A.assetsLoaded = !1; A.MainStarted = !1; A.estimateLoaded = 0; za.SM = ["boom", "collect", "jump", "roll"]; za.M = []; t.currentLevel = 0; t.currentSkin =
    0; t.seenSkins = 1; t.MAX_LIVES = 10; t.hideGUI = !1; t.NUMLEVELS = 30; t.is4399 = !1; t.atHooda = !1; t.ext = ""; t.GooglePlayURL = "http://play.google.com/store/apps/details?id=com.ozdy.jumpyapejoe"; t.DefaultMobileURL = "http://m.ozdy.com/"; lb.AdsInitted = !1; h.KEYNUM = 256; h.ENTER = 13; h.ESCAPE = 27; h.UP = 38; h.DOWN = 40; h.LEFT = 37; h.RIGHT = 39; h.INSERT = 45; h.DELETE = 46; h.PAGE_UP = 33; h.PAGE_DOWN = 34; h.END = 35; h.HOME = 36; h.SPACE = 32; h.D0 = 48; h.D1 = 49; h.D2 = 50; h.D3 = 51; h.D4 = 52; h.D5 = 53; h.D6 = 54; h.D7 = 55; h.D8 = 56; h.D9 = 57; h.Initted = !1; h.mOffsetX = 0; h.mOffsetY =
    0; h.DownSound = "roll"; h.TouchIdArray = []; h.TouchIdArrayLength = 0; h._pTouch = new xa; q.Frames = [
        [1559, 304, 4, 4, 2, 2],
        [2004, 399, 32, 4, 16, 2],
        [777, 860, 64, 64, 0, 0],
        [1832, 866, 170, 64, 85, 30],
        [1832, 933, 170, 64, 85, 30],
        [1734, 1E3, 170, 64, 85, 30],
        [662, 1075, 170, 64, 85, 30],
        [1296, 1075, 170, 64, 85, 30],
        [1469, 1075, 170, 64, 85, 30],
        [1346, 649, 170, 64, 85, 30],
        [1832, 732, 170, 64, 85, 30],
        [1832, 799, 170, 64, 85, 30],
        [489, 1090, 170, 64, 85, 30],
        [3, 1103, 170, 64, 85, 30],
        [176, 1103, 170, 64, 85, 30],
        [1734, 1067, 170, 64, 85, 30],
        [950, 1068, 170, 64, 85, 30],
        [1123, 1068, 170,
            64, 85, 30
        ],
        [1907, 1E3, 132, 50, 66, 23],
        [1907, 1053, 132, 50, 66, 23],
        [349, 1103, 132, 50, 66, 23],
        [1255, 1001, 64, 64, 32, 32],
        [1214, 1135, 64, 64, 32, 32],
        [662, 1142, 64, 64, 32, 32],
        [1103, 446, 170, 64, 85, 30],
        [1346, 515, 170, 64, 85, 30],
        [1346, 582, 170, 64, 85, 30],
        [729, 1142, 64, 64, 32, 32],
        [1281, 1142, 64, 64, 32, 32],
        [1348, 1142, 64, 64, 32, 32],
        [1415, 1142, 64, 64, 32, 32],
        [1482, 1142, 64, 64, 32, 32],
        [1549, 1142, 64, 64, 32, 32],
        [349, 1156, 64, 64, 32, 32],
        [416, 1156, 64, 64, 32, 32],
        [483, 1157, 64, 64, 32, 32],
        [1082, 1001, 170, 64, 85, 30],
        [777, 1008, 170, 64, 85, 30],
        [489, 1023, 170,
            64, 85, 30
        ],
        [2004, 327, 32, 32, 0, 0],
        [66, 1170, 48, 60, 24, 30],
        [489, 860, 285, 160, 0, 0],
        [1547, 272, 14, 14, 7, 7],
        [3, 3, 0, 0, 0, 0],
        [662, 1023, 48, 48, 24, 24],
        [1616, 1196, 208, 10, 104, 4],
        [117, 1170, 48, 60, 24, 30],
        [1547, 304, 9, 8, 5, 4],
        [1519, 661, 20, 17, 11, 13],
        [1519, 681, 20, 17, 9, 13],
        [1519, 592, 23, 21, 11, 11],
        [3, 3, 0, 0, 0, 1],
        [950, 1008, 120, 27, 60, 14],
        [860, 3, 441, 440, 220, 236],
        [1809, 3, 205, 105, 3, 3],
        [1809, 111, 205, 105, 3, 3],
        [1809, 219, 205, 105, 3, 3],
        [1808, 1134, 161, 59, 75, 29],
        [1809, 406, 152, 75, 76, 35],
        [835, 1135, 145, 59, 72, 29],
        [1642, 1134, 163, 59, 72, 29],
        [950, 1038,
            119, 21, 60, 10
        ],
        [1972, 1106, 70, 70, 31, 31],
        [1547, 315, 6, 6, 3, 3],
        [1547, 289, 12, 12, 6, 6],
        [1809, 327, 192, 76, 100, 36],
        [1519, 639, 19, 19, 10, 9],
        [1519, 616, 22, 20, 9, 12],
        [1519, 616, 22, 20, 9, 12],
        [1519, 616, 22, 20, 9, 12],
        [1519, 616, 22, 20, 9, 12],
        [2017, 299, 28, 24, 11, 15],
        [2017, 299, 28, 24, 11, 15],
        [2017, 299, 28, 24, 11, 15],
        [2017, 299, 28, 24, 11, 15],
        [1276, 473, 23, 25, 9, 15],
        [1276, 473, 23, 25, 9, 15],
        [1276, 473, 23, 25, 9, 15],
        [1276, 473, 23, 25, 9, 15],
        [1519, 515, 23, 24, 10, 15],
        [1519, 515, 23, 24, 10, 15],
        [1519, 515, 23, 24, 10, 15],
        [1519, 515, 23, 24, 10, 15],
        [1519, 567, 23, 22,
            10, 15
        ],
        [1519, 567, 23, 22, 10, 15],
        [1519, 567, 23, 22, 10, 15],
        [1519, 567, 23, 22, 10, 15],
        [2005, 732, 40, 38, 17, 16],
        [983, 1135, 80, 80, 40, 40],
        [675, 1209, 30, 28, 43, 12],
        [1519, 542, 24, 22, 10, 10],
        [1964, 406, 72, 72, 36, 36],
        [1066, 1135, 72, 72, 36, 36],
        [1346, 975, 385, 97, 193, 60],
        [1141, 1135, 70, 70, 35, 35],
        [1276, 446, 24, 24, 12, 12],
        [550, 1157, 60, 60, 30, 30],
        [3, 1170, 60, 60, 30, 30],
        [2017, 3, 28, 34, 0, 0],
        [2017, 40, 28, 34, 0, 0],
        [2017, 77, 28, 34, 0, 0],
        [2017, 114, 28, 34, 0, 0],
        [2017, 151, 28, 34, 0, 0],
        [2017, 188, 28, 34, 0, 0],
        [2017, 225, 28, 34, 0, 0],
        [2017, 262, 28, 34, 0, 0],
        [2004,
            362, 28, 34, 0, 0
        ],
        [2005, 773, 28, 34, 0, 0],
        [2005, 810, 28, 34, 0, 0],
        [2005, 847, 28, 34, 0, 0],
        [2005, 884, 28, 34, 0, 0],
        [2005, 921, 28, 34, 0, 0],
        [2005, 958, 28, 34, 0, 0],
        [713, 1023, 28, 34, 0, 0],
        [3, 3, 0, 0, 0, 0],
        [744, 1023, 28, 34, 0, 0],
        [1695, 1075, 28, 34, 0, 0],
        [796, 1142, 28, 34, 0, 0],
        [613, 1157, 28, 34, 0, 0],
        [168, 1170, 28, 34, 0, 0],
        [199, 1170, 28, 34, 0, 0],
        [230, 1170, 28, 34, 0, 0],
        [261, 1170, 28, 34, 0, 0],
        [292, 1170, 28, 34, 0, 0],
        [796, 1179, 28, 34, 0, 0],
        [1972, 1179, 28, 34, 0, 0],
        [2003, 1179, 28, 34, 0, 0],
        [613, 1194, 28, 34, 0, 0],
        [1827, 1196, 28, 34, 0, 0],
        [1858, 1196, 28, 34, 0, 0],
        [1889,
            1196, 28, 34, 0, 0
        ],
        [1920, 1196, 28, 34, 0, 0],
        [827, 1197, 28, 34, 0, 0],
        [858, 1197, 28, 34, 0, 0],
        [889, 1197, 28, 34, 0, 0],
        [920, 1197, 28, 34, 0, 0],
        [951, 1197, 28, 34, 0, 0],
        [1214, 1202, 28, 34, 0, 0],
        [1245, 1202, 28, 34, 0, 0],
        [3, 3, 0, 0, 0, 0],
        [168, 1207, 28, 34, 0, 0],
        [199, 1207, 28, 34, 0, 0],
        [230, 1207, 28, 34, 0, 0],
        [261, 1207, 28, 34, 0, 0],
        [292, 1207, 28, 34, 0, 0],
        [1141, 1208, 28, 34, 0, 0],
        [1172, 1208, 28, 34, 0, 0],
        [644, 1209, 28, 34, 0, 0],
        [777, 932, 302, 73, 149, 37],
        [892, 1075, 50, 50, 0, 0],
        [1642, 1075, 50, 50, 25, 25],
        [1304, 3, 259, 266, 0, 6],
        [835, 1075, 54, 54, 27, 27],
        [1566, 3, 240, 240, 0,
            0
        ],
        [1566, 3, 240, 240, 0, 0],
        [1566, 3, 240, 240, 0, 0],
        [1566, 246, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [860, 446, 240, 240, 0, 0],
        [1547, 489, 240, 240, 0, 0],
        [1547, 489, 240, 240, 0, 0],
        [1547, 489, 240, 240, 0, 0],
        [1790, 489, 240, 240, 0, 0],
        [1103, 515, 240, 240, 0, 0],
        [860, 689, 240, 240, 0, 0],
        [1346, 732, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1304, 272, 240, 240, 0, 0],
        [1589, 732, 240, 240, 0, 0],
        [1103, 758, 240, 240, 0, 0],
        [3, 860, 240, 240, 0, 0],
        [246, 860, 240, 240, 0, 0],
        [3, 3, 854, 854, 67, 187]
    ]; q.bmpLine = new M("bmpLine", [0], -1); q.bmpPathEdge = new M("bmpPathEdge", [1], -1); q.bmpSysFill = new M("bmpSysFill", [2], -1); q.cbtnAddition = new M("cbtnAddition", [3, 4, 5], -1); q.cbtnDivision = new M("cbtnDivision", [6, 7, 8], -1); q.cbtnInstructions = new M("cbtnInstructions", [9, 10, 11], -1); q.cbtnMixed = new M("cbtnMixed", [12, 13, 14], -1); q.cbtnMultiplication = new M("cbtnMultiplication", [15, 16, 17], -1); q.cbtnOK1 = new M("cbtnOK1", [18, 19, 20], -1); q.cbtnPause = new M("cbtnPause", [21, 22, 23], -1); q.cbtnPlay1 = new M("cbtnPlay1", [24, 25, 26], -1); q.cbtnResume = new M("cbtnResume", [27, 28, 29], -1); q.cbtnSoundOff = new M("cbtnSoundOff", [30, 31, 32], -1); q.cbtnSoundOn =
    new M("cbtnSoundOn", [33, 34, 35], -1); q.cbtnSubtraction = new M("cbtnSubtraction", [36, 37, 38], -1); q.cmcBG = new M("cmcBG", [39], -1); q.cmcBGGGG = new M("cmcBGGGG", [40], -1); q.cmcBGRect = new M("cmcBGRect", [41], -1); q.cmcBlackEye = new M("cmcBlackEye", [42], -1); q.cmcCrossHair = new M("cmcCrossHair", [43], -1); q.cmcDashedCircle = new M("cmcDashedCircle", [44], -1); q.cmcDashedLine = new M("cmcDashedLine", [45], -1); q.cmcDialogBG = new M("cmcDialogBG", [46], -1); q.cmcDot = new M("cmcDot", [47, 48, 49], -1); q.cmcGuiStar = new M("cmcGuiStar", [50,
        51
    ], -1); q.cmcHooda = new M("cmcHooda", [52], -1); q.cmcInstDlg = new M("cmcInstDlg", [53], -1); q.cmcInstructionScreen = new M("cmcInstructionScreen", [54, 55, 56], -1); q.cmcInstructionText = new M("cmcInstructionText", [57, 58, 59, 60], -1); q.cmcMadeBy = new M("cmcMadeBy", [61], -1); q.cmcMinimap = new M("cmcMinimap", [62], -1); q.cmcMinimapPlayer = new M("cmcMinimapPlayer", [63], -1); q.cmcPathNode = new M("cmcPathNode", [64], -1); q.cmcPausedText = new M("cmcPausedText", [65], -1); q.cmcSmallSmoke = new M("cmcSmallSmoke", [66], -1); q.cmcSmallSmokeFrames =
    new M("cmcSmallSmokeFrames", [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], -1); q.cmcSmoke = new M("cmcSmoke", [87], -1); q.cmcSpeedRing = new M("cmcSpeedRing", [88], -1); q.cmcStarCount = new M("cmcStarCount", [89], -1); q.cmcStarGold = new M("cmcStarGold", [90], -1); q.cmcStompy = new M("cmcStompy", [91, 92], -1); q.cmcSuperHoodaTitle = new M("cmcSuperHoodaTitle", [93], -1); q.cmcWhiteCircle = new M("cmcWhiteCircle", [94], -1); q.cmcWhiteEye = new M("cmcWhiteEye", [95], -1); q.cmcWormSegment = new M("cmcWormSegment", [96, 97], -1); q.ctxtMathFont = new M("ctxtMathFont", [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], -1); q.ctxtWhiteMathFont = new M("ctxtWhiteMathFont", [123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147], -1); q.sponsorGGG = new M("sponsorGGG", [148], -1); q.sysRectBlack = new M("sysRectBlack", [149], -1); q.sysWhiteRect = new M("sysWhiteRect", [150], -1); q.tileBGRect = new M("tileBGRect", [151], -1); q.tileCoin = new M("tileCoin", [152], -1); q.tileJungle = new M("tileJungle", [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192], -1); q.tileMenuBG = new M("tileMenuBG", [193], -1); q.BitmapName = "Objects.png"; na.pool = []; Oa.count = 0; H.qTimeStamp = Date.now() + 0; S.__toStr = {}.toString; f.MinimumBMD = !1; f.DeltaT = 0; f.TilesheetAssetBMDs = []; f.EPS = 0.001; f.PathMatrix = new na; f.BGbmdMatrix = new na; f.BGbmdColorTransform = new Vb; f.BGMinY = 0.5; f.BGMaxY = 0.5; f.ShowFlushInfo = -1; f.TraceCurrentMatrix = !1; x.PLDNearest = 0; B.Element = 0; B.PCData = 1; B.CData = 2; B.Comment = 3; B.DocType = 4; B.ProcessingInstruction = 5; B.Document = 6; Ia.USE_CACHE = !1; Ia.USE_ENUM_INDEX = !1; Ia.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:"; Qa.DEFAULT_RESOLVER = new Xb; Qa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:"; Ib.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; Ib.BYTES = Ja.ofString(Ib.CHARS); Ua.i64tmp = new Dc(0, 0); Ab.escapes = function(a) {
        a =
            new X;
        null != O.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != O.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null != O.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != O.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != O.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this); pb.BYTES_PER_ELEMENT = 1; la.cache = new Pc; la.libraries = new X; la.initialized = !1; sb.library = new X; Ca.Linear = new Qb; Ca.QuadIn = new mc; Ca.QuadOut = new Ec; v.initPoly2Tiles = !1; n.NumMSBuckets = 1E3; n.Initted = !1; yb.X = 0; yb.Y = 0; N.PACKAGE_PATH = "ozity."; Ga.Radius = 25; ka.MAX_CAMERA_SPEED = 20; ka.tempVec = []; ka.zoomedThisFrame = !1; oa.NUM_GFX_LAYERS = 7; oa.WORLD_SPEED_FACTOR = 1; ja.RECTANGLE = 1; ja.CIRCLE = 2; ja.POLYGON = 3; ja.LINE = 4; ja.DOT = 5; ja.TRIANGLE = 6; ja.PATH = 7; ja.FLAG_IS_CURVE = 1; ja.oo = 2E6; ja.CURVE_SEGMENT_LENGTH = 20; ja._d = ":"; ja.temp2 = []; ja.temp3 = []; da.tileInfos = new X; m.TILE_MASK = 15728640; m.HIT_TOP = 1; m.HIT_RIGHT = 2; m.HIT_BOTTOM = 4; m.HIT_LEFT = 8; m.HIT_SPECIALBOTTOM = 16; m.SMASHED = 256; m.DYNAMIC = 1; m.STATIC = 2; m.KINEMATIC = 3; m.LastTimeStep = 1; m.tempVec2 = []; m.nearestData = []; m.EDGE_TOLERANCE = 1; m.leftHit = !1; m.rightHit = !1; m.leftHitDiff = 0; m.rightHitDiff = 0; m.topHit = !1; m.bottomHit = !1; m.topHitDiff = 0; m.bottomHitDiff = 0; m.BoundVec4 = []; jb.TempVec = []; z.MODE_NONE = 0; z.MODE_ADDITION = 1; z.MODE_SUBTRACTION = 2; z.MODE_MULTIPLICATION = 3; z.MODE_DIVISION = 4; z.MODE_MIXED = 5; z.Mode = 0; z.ENEMY_SPAWN_TIMER = 150; z.BANANA_RADIUS = 25; z.MAX_ENEMIES = 1; z.MAX_SEGMENTS_PER_WORM = 100; z.SPEED_RING_SEGMENT_DISTANCE = 2; z.SPEED_RING_SEGMENT_SPEED = 1; z.SPR_DIAM = 60; z.DIAM_START = 30; z.SEG_DIST_START = 10; z.SEG_NUM_START =
    10; z.DIST_PER_CONTROL_POINT = 3; z.EYEX = 8; z.EYEY = 13; z.score = 0; z.MAX_ZOOM = 0.5; z.SCREEN_PAD = 100; z.MAX_BANANAS = 20; z.MIN_BANANA_DIST = 150; E.WinShown = 0; E.NORMAL = 0; E.WAITING = 1; E.WIN = 2; E.LOSE = 3; E.PlayedThisSession = !1; E.OffsetX = -3120; E.OffsetY = -3120; E.BoundsWidth = 6960; E.BoundsHeight = 6960; E.lastScore = -1; E.worldBoundsX = [1, 9, 20, 28, 28, 20, 9, 1]; E.worldBoundsY = [9, 1, 1, 9, 20, 28, 28, 20]; E.Rematch = !1; E.GRAVITY = 0; E.InstructionsSeen = !1; E.StartPlayAfterInstructions = !1; E.NUM_CLOUDS = 3; E.CLOUD_SPEED = 30; E.clouds = []; C.main()
})("undefined" !=
    typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);