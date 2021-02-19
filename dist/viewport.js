!function(t,e){
    'object'==typeof exports&&'undefined'!=typeof module?e(exports,require('pixi.js')):'function'==typeof define&&define.amd?define(['exports','pixi.js'],e):e((t='undefined'!=typeof globalThis?globalThis:t||self).Viewport={},t.PIXI)
}(this,(function(t,e){
    'use strict';function i(t){
        if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){
            if('default'!==i){
                var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:function(){
                    return t[i]
                }})
            }
        })),e.default=t,Object.freeze(e)
    }var s=i(e);function n(t,e){
        if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')
    }function o(t,e){
        for(var i=0;i<e.length;i++){
            var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,'value'in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)
        }
    }function r(t,e,i){
        return e&&o(t.prototype,e),i&&o(t,i),t
    }function h(t,e){
        if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)
    }function a(t){
        return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){
            return t.__proto__||Object.getPrototypeOf(t)
        })(t)
    }function l(t,e){
        return(l=Object.setPrototypeOf||function(t,e){
            return t.__proto__=e,t
        })(t,e)
    }function p(t){
        if(void 0===t)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t
    }function c(t,e){
        return!e||'object'!=typeof e&&'function'!=typeof e?p(t):e
    }function u(t){
        var e=function(){
            if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{
                return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0
            }catch(t){
                return!1
            }
        }();return function(){
            var i,s=a(t);if(e){
                var n=a(this).constructor;i=Reflect.construct(s,arguments,n)
            }else i=s.apply(this,arguments);return c(this,i)
        }
    }function d(t,e){
        for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t
    }function f(t,e,i){
        return(f='undefined'!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){
            var s=d(t,e);if(s){
                var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value
            }
        })(t,e,i||t)
    }function v(t,e,i,s){
        return(v='undefined'!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,i,s){
            var n,o=d(t,e);if(o){
                if((n=Object.getOwnPropertyDescriptor(o,e)).set)return n.set.call(s,i),!0;if(!n.writable)return!1
            }if(n=Object.getOwnPropertyDescriptor(s,e)){
                if(!n.writable)return!1;n.value=i,Object.defineProperty(s,e,n)
            }else!function(t,e,i){
                e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i
            }(s,e,i);return!0
        })(t,e,i,s)
    }function y(t,e,i,s,n){
        if(!v(t,e,i,s||t)&&n)throw new Error('failed to set property');return i
    }function g(t,e){
        (null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s
    }function m(t,e){
        var i;if('undefined'==typeof Symbol||null==t[Symbol.iterator]){
            if(Array.isArray(t)||(i=function(t,e){
                if(t){
                    if('string'==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return'Object'===i&&t.constructor&&(i=t.constructor.name),'Map'===i||'Set'===i?Array.from(t):'Arguments'===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(t,e):void 0
                }
            }(t))||e&&t&&'number'==typeof t.length){
                i&&(t=i);var s=0,n=function(){};return{s:n,n:function(){
                    return s>=t.length?{done:!0}:{done:!1,value:t[s++]}
                },e:function(t){
                    throw t
                },f:n}
            }throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }var o,r=!0,h=!1;return{s:function(){
            i=t[Symbol.iterator]()
        },n:function(){
            var t=i.next();return r=t.done,t
        },e:function(t){
            h=!0,o=t
        },f:function(){
            try{
                r||null==i.return||i.return()
            }finally{
                if(h)throw o
            }
        }}
    }var w=function(){
            function t(e){
                n(this,t),this.viewport=e,this.touches=[],this.addListeners()
            }return r(t,[{key:'addListeners',value:function(){
                var t=this;this.viewport.interactive=!0,this.viewport.forceHitArea||(this.viewport.hitArea=new e.Rectangle(0,0,this.viewport.worldWidth,this.viewport.worldHeight)),this.viewport.on('pointerdown',this.down,this),this.viewport.on('pointermove',this.move,this),this.viewport.on('pointerup',this.up,this),this.viewport.on('pointerupoutside',this.up,this),this.viewport.on('pointercancel',this.up,this),this.viewport.on('pointerout',this.up,this),this.wheelFunction=function(e){
                    return t.handleWheel(e)
                },this.viewport.options.divWheel.addEventListener('wheel',this.wheelFunction,{passive:this.viewport.options.passiveWheel}),this.isMouseDown=!1
            }},{key:'destroy',value:function(){
                this.viewport.options.divWheel.removeEventListener('wheel',this.wheelFunction)
            }},{key:'down',value:function(t){
                if(!this.viewport.pause&&this.viewport.worldVisible){
                    if('mouse'===t.data.pointerType?this.isMouseDown=!0:this.get(t.data.pointerId)||this.touches.push({id:t.data.pointerId,last:null}),1===this.count()){
                        this.last=t.data.global.clone();var e=this.viewport.plugins.get('decelerate',!0),i=this.viewport.plugins.get('bounce',!0);e&&e.isActive()||i&&i.isActive()?this.clickedAvailable=!1:this.clickedAvailable=!0
                    }else this.clickedAvailable=!1;this.viewport.plugins.down(t)&&this.viewport.options.stopPropagation&&t.stopPropagation()
                }
            }},{key:'clear',value:function(){
                this.isMouseDown=!1,this.touches=[],this.last=null
            }},{key:'checkThreshold',value:function(t){
                return Math.abs(t)>=this.viewport.threshold
            }},{key:'move',value:function(t){
                if(!this.viewport.pause&&this.viewport.worldVisible){
                    var e=this.viewport.plugins.move(t);if(this.clickedAvailable){
                        var i=t.data.global.x-this.last.x,s=t.data.global.y-this.last.y;(this.checkThreshold(i)||this.checkThreshold(s))&&(this.clickedAvailable=!1)
                    }e&&this.viewport.options.stopPropagation&&t.stopPropagation()
                }
            }},{key:'up',value:function(t){
                if(!this.viewport.pause&&this.viewport.worldVisible){
                    'mouse'===t.data.pointerType&&(this.isMouseDown=!1),'mouse'!==t.data.pointerType&&this.remove(t.data.pointerId);var e=this.viewport.plugins.up(t);this.clickedAvailable&&0===this.count()&&(this.viewport.emit('clicked',{event:t,screen:this.last,world:this.viewport.toWorld(this.last),viewport:this}),this.clickedAvailable=!1),e&&this.viewport.options.stopPropagation&&t.stopPropagation()
                }
            }},{key:'getPointerPosition',value:function(t){
                var i=new e.Point;return this.viewport.options.interaction?this.viewport.options.interaction.mapPositionToPoint(i,t.clientX,t.clientY):(i.x=t.clientX,i.y=t.clientY),i
            }},{key:'handleWheel',value:function(t){
                if(!this.viewport.pause&&this.viewport.worldVisible){
                    var e=this.viewport.toLocal(this.getPointerPosition(t));if(this.viewport.left<=e.x&&e.x<=this.viewport.right&&this.viewport.top<=e.y&&e.y<=this.viewport.bottom)this.viewport.plugins.wheel(t)&&!this.viewport.options.passiveWheel&&t.preventDefault()
                }
            }},{key:'pause',value:function(){
                this.touches=[],this.isMouseDown=!1
            }},{key:'get',value:function(t){
                var e,i=m(this.touches);try{
                    for(i.s();!(e=i.n()).done;){
                        var s=e.value;if(s.id===t)return s
                    }
                }catch(t){
                    i.e(t)
                }finally{
                    i.f()
                }return null
            }},{key:'remove',value:function(t){
                for(var e=0;e<this.touches.length;e++)if(this.touches[e].id===t)return void this.touches.splice(e,1)
            }},{key:'count',value:function(){
                return(this.isMouseDown?1:0)+this.touches.length
            }}]),t
        }(),x=['drag','pinch','wheel','follow','mouse-edges','decelerate','aniamte','bounce','snap-zoom','clamp-zoom','snap','clamp'],k=function(){
            function t(e){
                n(this,t),this.viewport=e,this.list=[],this.plugins={}
            }return r(t,[{key:'add',value:function(t,e){
                var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x.length;this.plugins[t]=e;var s=x.indexOf(t);-1!==s&&x.splice(s,1),x.splice(i,0,t),this.sort()
            }},{key:'get',value:function(t,e){
                return e&&void 0!==this.plugins[t]&&this.plugins[t].paused?null:this.plugins[t]
            }},{key:'update',value:function(t){
                var e,i=m(this.list);try{
                    for(i.s();!(e=i.n()).done;){
                        e.value.update(t)
                    }
                }catch(t){
                    i.e(t)
                }finally{
                    i.f()
                }
            }},{key:'resize',value:function(){
                var t,e=m(this.list);try{
                    for(e.s();!(t=e.n()).done;){
                        t.value.resize()
                    }
                }catch(t){
                    e.e(t)
                }finally{
                    e.f()
                }
            }},{key:'reset',value:function(){
                var t,e=m(this.list);try{
                    for(e.s();!(t=e.n()).done;){
                        t.value.reset()
                    }
                }catch(t){
                    e.e(t)
                }finally{
                    e.f()
                }
            }},{key:'remove',value:function(t){
                this.plugins[t]&&(this.plugins[t]=null,this.viewport.emit(t+'-remove'),this.sort())
            }},{key:'pause',value:function(t){
                this.plugins[t]&&this.plugins[t].pause()
            }},{key:'resume',value:function(t){
                this.plugins[t]&&this.plugins[t].resume()
            }},{key:'sort',value:function(){
                this.list=[];var t,e=m(x);try{
                    for(e.s();!(t=e.n()).done;){
                        var i=t.value;this.plugins[i]&&this.list.push(this.plugins[i])
                    }
                }catch(t){
                    e.e(t)
                }finally{
                    e.f()
                }
            }},{key:'down',value:function(t){
                var e,i=!1,s=m(this.list);try{
                    for(s.s();!(e=s.n()).done;){
                        e.value.down(t)&&(i=!0)
                    }
                }catch(t){
                    s.e(t)
                }finally{
                    s.f()
                }return i
            }},{key:'move',value:function(t){
                var e,i=!1,s=m(this.viewport.plugins.list);try{
                    for(s.s();!(e=s.n()).done;){
                        e.value.move(t)&&(i=!0)
                    }
                }catch(t){
                    s.e(t)
                }finally{
                    s.f()
                }return i
            }},{key:'up',value:function(t){
                var e,i=!1,s=m(this.list);try{
                    for(s.s();!(e=s.n()).done;){
                        e.value.up(t)&&(i=!0)
                    }
                }catch(t){
                    s.e(t)
                }finally{
                    s.f()
                }return i
            }},{key:'wheel',value:function(t){
                var e,i=!1,s=m(this.list);try{
                    for(s.s();!(e=s.n()).done;){
                        e.value.wheel(t)&&(i=!0)
                    }
                }catch(t){
                    s.e(t)
                }finally{
                    s.f()
                }return i
            }}]),t
        }(),b=function(){
            function t(e){
                n(this,t),this.parent=e,this.paused=!1
            }return r(t,[{key:'destroy',value:function(){}},{key:'down',value:function(){
                return!1
            }},{key:'move',value:function(){
                return!1
            }},{key:'up',value:function(){
                return!1
            }},{key:'wheel',value:function(){
                return!1
            }},{key:'update',value:function(){}},{key:'resize',value:function(){}},{key:'reset',value:function(){}},{key:'pause',value:function(){
                this.paused=!0
            }},{key:'resume',value:function(){
                this.paused=!1
            }}]),t
        }(),W={direction:'all',pressDrag:!0,wheel:!0,wheelScroll:1,reverse:!1,clampWheel:!1,underflow:'center',factor:1,mouseButtons:'all',keyToPress:null,ignoreKeyToPressOnTouch:!1},H=function(t){
            h(s,t);var i=u(s);function s(t){
                var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,s),(e=i.call(this,t)).options=Object.assign({},W,o),e.moved=!1,e.reverse=e.options.reverse?1:-1,e.xDirection=!e.options.direction||'all'===e.options.direction||'x'===e.options.direction,e.yDirection=!e.options.direction||'all'===e.options.direction||'y'===e.options.direction,e.keyIsPressed=!1,e.parseUnderflow(),e.mouseButtons(e.options.mouseButtons),e.options.keyToPress&&e.handleKeyPresses(e.options.keyToPress),e
            }return r(s,[{key:'handleKeyPresses',value:function(t){
                var e=this;parent.addEventListener('keydown',(function(i){
                    t.includes(i.code)&&(e.keyIsPressed=!0)
                })),parent.addEventListener('keyup',(function(i){
                    t.includes(i.code)&&(e.keyIsPressed=!1)
                }))
            }},{key:'mouseButtons',value:function(t){
                this.mouse=t&&'all'!==t?[-1!==t.indexOf('left'),-1!==t.indexOf('middle'),-1!==t.indexOf('right')]:[!0,!0,!0]
            }},{key:'parseUnderflow',value:function(){
                var t=this.options.underflow.toLowerCase();'center'===t?(this.underflowX=0,this.underflowY=0):(this.underflowX=-1!==t.indexOf('left')?-1:-1!==t.indexOf('right')?1:0,this.underflowY=-1!==t.indexOf('top')?-1:-1!==t.indexOf('bottom')?1:0)
            }},{key:'checkButtons',value:function(t){
                var e='mouse'===t.data.pointerType,i=this.parent.input.count();return!(!(1===i||i>1&&!this.parent.plugins.get('pinch',!0))||e&&!this.mouse[t.data.button])
            }},{key:'checkKeyPress',value:function(t){
                return!!(!this.options.keyToPress||this.keyIsPressed||this.options.ignoreKeyToPressOnTouch&&'touch'===t.data.pointerType)
            }},{key:'down',value:function(t){
                if(!this.paused&&this.options.pressDrag)return this.checkButtons(t)&&this.checkKeyPress(t)?(this.last={x:t.data.global.x,y:t.data.global.y},this.current=t.data.pointerId,!0):void(this.last=null)
            }},{key:'active',get:function(){
                return this.moved
            }},{key:'move',value:function(t){
                if(!this.paused&&this.options.pressDrag&&this.last&&this.current===t.data.pointerId){
                    var i=t.data.global.x,s=t.data.global.y,n=this.parent.input.count();if(1===n||n>1&&!this.parent.plugins.get('pinch',!0)){
                        var o=i-this.last.x,r=s-this.last.y;if(this.moved||this.xDirection&&this.parent.input.checkThreshold(o)||this.yDirection&&this.parent.input.checkThreshold(r)){
                            var h={x:i,y:s};return this.xDirection&&(this.parent.x+=(h.x-this.last.x)*this.options.factor),this.yDirection&&(this.parent.y+=(h.y-this.last.y)*this.options.factor),this.last=h,this.moved||this.parent.emit('drag-start',{event:t,screen:new e.Point(this.last.x,this.last.y),world:this.parent.toWorld(new e.Point(this.last.x,this.last.y)),viewport:this.parent}),this.moved=!0,this.parent.emit('moved',{viewport:this.parent,type:'drag'}),!0
                        }
                    }else this.moved=!1
                }
            }},{key:'up',value:function(t){
                if(!this.paused){
                    var i=this.parent.input.touches;if(1===i.length){
                        var s=i[0];return s.last&&(this.last={x:s.last.x,y:s.last.y},this.current=s.id),this.moved=!1,!0
                    }if(this.last&&this.moved){
                        var n=new e.Point(this.last.x,this.last.y);return this.parent.emit('drag-end',{event:t,screen:n,world:this.parent.toWorld(n),viewport:this.parent}),this.last=null,this.moved=!1,!0
                    }
                }
            }},{key:'wheel',value:function(t){
                if(!this.paused&&this.options.wheel){
                    var e=this.parent.plugins.get('wheel',!0);if(!e)return this.xDirection&&(this.parent.x+=t.deltaX*this.options.wheelScroll*this.reverse),this.yDirection&&(this.parent.y+=t.deltaY*this.options.wheelScroll*this.reverse),this.options.clampWheel&&this.clamp(),this.parent.emit('wheel-scroll',this.parent),this.parent.emit('moved',{viewport:this.parent,type:'wheel'}),this.parent.options.passiveWheel||t.preventDefault(),!0
                }
            }},{key:'resume',value:function(){
                this.last=null,this.paused=!1
            }},{key:'clamp',value:function(){
                var t=this.parent.plugins.get('decelerate',!0)||{};if('y'!==this.options.clampWheel)if(this.parent.screenWorldWidth<this.parent.screenWidth)switch(this.underflowX){
                case-1:this.parent.x=0;break;case 1:this.parent.x=this.parent.screenWidth-this.parent.screenWorldWidth;break;default:this.parent.x=(this.parent.screenWidth-this.parent.screenWorldWidth)/2
                }else this.parent.left<0?(this.parent.x=0,t.x=0):this.parent.right>this.parent.worldWidth&&(this.parent.x=-this.parent.worldWidth*this.parent.scale.x+this.parent.screenWidth,t.x=0);if('x'!==this.options.clampWheel)if(this.parent.screenWorldHeight<this.parent.screenHeight)switch(this.underflowY){
                case-1:this.parent.y=0;break;case 1:this.parent.y=this.parent.screenHeight-this.parent.screenWorldHeight;break;default:this.parent.y=(this.parent.screenHeight-this.parent.screenWorldHeight)/2
                }else this.parent.top<0&&(this.parent.y=0,t.y=0),this.parent.bottom>this.parent.worldHeight&&(this.parent.y=-this.parent.worldHeight*this.parent.scale.y+this.parent.screenHeight,t.y=0)
            }}]),s
        }(b),O={noDrag:!1,percent:1,center:null,factor:1},M=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},O,o),s
            }return r(i,[{key:'down',value:function(){
                if(this.parent.input.count()>=2)return this.active=!0,!0
            }},{key:'move',value:function(t){
                if(!this.paused&&this.active){
                    var e=t.data.global.x,i=t.data.global.y,s=this.parent.input.touches;if(s.length>=2){
                        var n=s[0],o=s[1],r=n.last&&o.last?Math.sqrt(Math.pow(o.last.x-n.last.x,2)+Math.pow(o.last.y-n.last.y,2)):null;if(n.id===t.data.pointerId?n.last={x:e,y:i,data:t.data}:o.id===t.data.pointerId&&(o.last={x:e,y:i,data:t.data}),r){
                            var h,a={x:n.last.x+(o.last.x-n.last.x)/2,y:n.last.y+(o.last.y-n.last.y)/2};this.options.center||(h=this.parent.toLocal(a));var l=Math.sqrt(Math.pow(o.last.x-n.last.x,2)+Math.pow(o.last.y-n.last.y,2)),p=(1-r/(l=0===l?l=1e-10:l))*this.options.percent*this.parent.scale.x;this.parent.scale.x+=p,this.parent.scale.y+=p,this.parent.emit('zoomed',{viewport:this.parent,type:'pinch',center:a});var c=this.parent.plugins.get('clamp-zoom',!0);if(c&&c.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{
                                var u=this.parent.toGlobal(h);this.parent.x+=(a.x-u.x)*this.options.factor,this.parent.y+=(a.y-u.y)*this.options.factor,this.parent.emit('moved',{viewport:this.parent,type:'pinch'})
                            }!this.options.noDrag&&this.lastCenter&&(this.parent.x+=(a.x-this.lastCenter.x)*this.options.factor,this.parent.y+=(a.y-this.lastCenter.y)*this.options.factor,this.parent.emit('moved',{viewport:this.parent,type:'pinch'})),this.lastCenter=a,this.moved=!0
                        }else this.pinching||(this.parent.emit('pinch-start',this.parent),this.pinching=!0);return!0
                    }
                }
            }},{key:'up',value:function(){
                if(this.pinching&&this.parent.input.touches.length<=1)return this.active=!1,this.lastCenter=null,this.pinching=!1,this.moved=!1,this.parent.emit('pinch-end',this.parent),!0
            }}]),i
        }(b),S={left:!1,right:!1,top:!1,bottom:!1,direction:null,underflow:'center'},C=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},S,o),s.options.direction&&(s.options.left='x'===s.options.direction||'all'===s.options.direction||null,s.options.right='x'===s.options.direction||'all'===s.options.direction||null,s.options.top='y'===s.options.direction||'all'===s.options.direction||null,s.options.bottom='y'===s.options.direction||'all'===s.options.direction||null),s.parseUnderflow(),s.last={x:null,y:null,scaleX:null,scaleY:null},s.update(),s
            }return r(i,[{key:'parseUnderflow',value:function(){
                var t=this.options.underflow.toLowerCase();'none'===t?this.noUnderflow=!0:'center'===t?(this.underflowX=this.underflowY=0,this.noUnderflow=!1):(this.underflowX=-1!==t.indexOf('left')?-1:-1!==t.indexOf('right')?1:0,this.underflowY=-1!==t.indexOf('top')?-1:-1!==t.indexOf('bottom')?1:0,this.noUnderflow=!1)
            }},{key:'move',value:function(){
                return this.update(),!1
            }},{key:'update',value:function(){
                if(!this.paused&&(this.parent.x!==this.last.x||this.parent.y!==this.last.y||this.parent.scale.x!==this.last.scaleX||this.parent.scale.y!==this.last.scaleY)){
                    var t={x:this.parent.x,y:this.parent.y},e=this.parent.plugins.decelerate||{};if(null!==this.options.left||null!==this.options.right){
                        var i=!1;if(this.parent.screenWorldWidth<this.parent.screenWidth){
                            if(!this.noUnderflow)switch(this.underflowX){
                            case-1:0!==this.parent.x&&(this.parent.x=0,i=!0);break;case 1:this.parent.x!==this.parent.screenWidth-this.parent.screenWorldWidth&&(this.parent.x=this.parent.screenWidth-this.parent.screenWorldWidth,i=!0);break;default:this.parent.x!==(this.parent.screenWidth-this.parent.screenWorldWidth)/2&&(this.parent.x=(this.parent.screenWidth-this.parent.screenWorldWidth)/2,i=!0)
                            }
                        }else null!==this.options.left&&this.parent.left<(!0===this.options.left?0:this.options.left)&&(this.parent.x=-(!0===this.options.left?0:this.options.left)*this.parent.scale.x,e.x=0,i=!0),null!==this.options.right&&this.parent.right>(!0===this.options.right?this.parent.worldWidth:this.options.right)&&(this.parent.x=-(!0===this.options.right?this.parent.worldWidth:this.options.right)*this.parent.scale.x+this.parent.screenWidth,e.x=0,i=!0);i&&this.parent.emit('moved',{viewport:this.parent,original:t,type:'clamp-x'})
                    }if(null!==this.options.top||null!==this.options.bottom){
                        var s=!1;if(this.parent.screenWorldHeight<this.parent.screenHeight){
                            if(!this.noUnderflow)switch(this.underflowY){
                            case-1:0!==this.parent.y&&(this.parent.y=0,s=!0);break;case 1:this.parent.y!==this.parent.screenHeight-this.parent.screenWorldHeight&&(this.parent.y=this.parent.screenHeight-this.parent.screenWorldHeight,s=!0);break;default:this.parent.y!==(this.parent.screenHeight-this.parent.screenWorldHeight)/2&&(this.parent.y=(this.parent.screenHeight-this.parent.screenWorldHeight)/2,s=!0)
                            }
                        }else null!==this.options.top&&this.parent.top<(!0===this.options.top?0:this.options.top)&&(this.parent.y=-(!0===this.options.top?0:this.options.top)*this.parent.scale.y,e.y=0,s=!0),null!==this.options.bottom&&this.parent.bottom>(!0===this.options.bottom?this.parent.worldHeight:this.options.bottom)&&(this.parent.y=-(!0===this.options.bottom?this.parent.worldHeight:this.options.bottom)*this.parent.scale.y+this.parent.screenHeight,e.y=0,s=!0);s&&this.parent.emit('moved',{viewport:this.parent,original:t,type:'clamp-y'})
                    }this.last.x=this.parent.x,this.last.y=this.parent.y,this.last.scaleX=this.parent.scale.x,this.last.scaleY=this.parent.scale.y
                }
            }},{key:'reset',value:function(){
                this.update()
            }}]),i
        }(b),P={minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,minScale:null,maxScale:null},z=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},P,o),s.clamp(),s
            }return r(i,[{key:'resize',value:function(){
                this.clamp()
            }},{key:'clamp',value:function(){
                if(!this.paused)if(this.options.minWidth||this.options.minHeight||this.options.maxWidth||this.options.maxHeight){
                    var t=this.parent.worldScreenWidth,e=this.parent.worldScreenHeight;if(null!==this.options.minWidth&&t<this.options.minWidth){
                        var i=this.parent.scale.x;this.parent.fitWidth(this.options.minWidth,!1,!1,!0),this.parent.scale.y*=this.parent.scale.x/i,t=this.parent.worldScreenWidth,e=this.parent.worldScreenHeight,this.parent.emit('zoomed',{viewport:this.parent,type:'clamp-zoom'})
                    }if(null!==this.options.maxWidth&&t>this.options.maxWidth){
                        var s=this.parent.scale.x;this.parent.fitWidth(this.options.maxWidth,!1,!1,!0),this.parent.scale.y*=this.parent.scale.x/s,t=this.parent.worldScreenWidth,e=this.parent.worldScreenHeight,this.parent.emit('zoomed',{viewport:this.parent,type:'clamp-zoom'})
                    }if(null!==this.options.minHeight&&e<this.options.minHeight){
                        var n=this.parent.scale.y;this.parent.fitHeight(this.options.minHeight,!1,!1,!0),this.parent.scale.x*=this.parent.scale.y/n,t=this.parent.worldScreenWidth,e=this.parent.worldScreenHeight,this.parent.emit('zoomed',{viewport:this.parent,type:'clamp-zoom'})
                    }if(null!==this.options.maxHeight&&e>this.options.maxHeight){
                        var o=this.parent.scale.y;this.parent.fitHeight(this.options.maxHeight,!1,!1,!0),this.parent.scale.x*=this.parent.scale.y/o,this.parent.emit('zoomed',{viewport:this.parent,type:'clamp-zoom'})
                    }
                }else{
                    var r=this.parent.scale.x;null!==this.options.minScale&&r<this.options.minScale&&(r=this.options.minScale),null!==this.options.maxScale&&r>this.options.maxScale&&(r=this.options.maxScale),r!==this.parent.scale.x&&(this.parent.scale.set(r),this.parent.emit('zoomed',{viewport:this.parent,type:'clamp-zoom'}))
                }
            }},{key:'reset',value:function(){
                this.clamp()
            }}]),i
        }(b),I={friction:.98,bounce:.8,minSpeed:.01},X=16,Y=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},I,o),s.saved=[],s.timeSinceRelease=0,s.reset(),s.parent.on('moved',(function(t){
                    return s.moved(t)
                })),s
            }return r(i,[{key:'destroy',value:function(){
                this.parent
            }},{key:'down',value:function(){
                this.saved=[],this.x=this.y=!1
            }},{key:'isActive',value:function(){
                return this.x||this.y
            }},{key:'move',value:function(){
                if(!this.paused){
                    var t=this.parent.input.count();(1===t||t>1&&!this.parent.plugins.get('pinch',!0))&&(this.saved.push({x:this.parent.x,y:this.parent.y,time:performance.now()}),this.saved.length>60&&this.saved.splice(0,30))
                }
            }},{key:'moved',value:function(t){
                if(this.saved.length){
                    var e=this.saved[this.saved.length-1];'clamp-x'===t.type?e.x===t.original.x&&(e.x=this.parent.x):'clamp-y'===t.type&&e.y===t.original.y&&(e.y=this.parent.y)
                }
            }},{key:'up',value:function(){
                if(0===this.parent.input.count()&&this.saved.length){
                    var t,e=performance.now(),i=m(this.saved);try{
                        for(i.s();!(t=i.n()).done;){
                            var s=t.value;if(s.time>=e-100){
                                var n=e-s.time;this.x=(this.parent.x-s.x)/n,this.y=(this.parent.y-s.y)/n,this.percentChangeX=this.percentChangeY=this.options.friction,this.timeSinceRelease=0;break
                            }
                        }
                    }catch(t){
                        i.e(t)
                    }finally{
                        i.f()
                    }
                }
            }},{key:'activate',value:function(t){
                void 0!==(t=t||{}).x&&(this.x=t.x,this.percentChangeX=this.options.friction),void 0!==t.y&&(this.y=t.y,this.percentChangeY=this.options.friction)
            }},{key:'update',value:function(t){
                if(!this.paused){
                    var e=this.x||this.y,i=this.timeSinceRelease,s=this.timeSinceRelease+t;if(this.x){
                        var n=this.percentChangeX,o=Math.log(n);this.parent.x+=this.x*X/o*(Math.pow(n,s/X)-Math.pow(n,i/X))
                    }if(this.y){
                        var r=this.percentChangeY,h=Math.log(r);this.parent.y+=this.y*X/h*(Math.pow(r,s/X)-Math.pow(r,i/X))
                    }this.timeSinceRelease+=t,this.x*=Math.pow(this.percentChangeX,t/X),this.y*=Math.pow(this.percentChangeY,t/X),Math.abs(this.x)<this.options.minSpeed&&(this.x=0),Math.abs(this.y)<this.options.minSpeed&&(this.y=0),e&&this.parent.emit('moved',{viewport:this.parent,type:'decelerate'})
                }
            }},{key:'reset',value:function(){
                this.x=this.y=null
            }}]),i
        }(b),j='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:'undefined'!=typeof global?global:'undefined'!=typeof self?self:{};var D=function(t,e,i){
        return t(i={path:e,exports:{},require:function(t,e){
            return function(){
                throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
            }(null==e&&i.path)
        }},i.exports),i.exports
    }((function(t,e){
        (function(){
            var e;(function(e){
                t.exports=e
            })(e={linear:function(t,e,i,s){
                return i*t/s+e
            },easeInQuad:function(t,e,i,s){
                return i*(t/=s)*t+e
            },easeOutQuad:function(t,e,i,s){
                return-i*(t/=s)*(t-2)+e
            },easeInOutQuad:function(t,e,i,s){
                return(t/=s/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e
            },easeInCubic:function(t,e,i,s){
                return i*(t/=s)*t*t+e
            },easeOutCubic:function(t,e,i,s){
                return i*((t=t/s-1)*t*t+1)+e
            },easeInOutCubic:function(t,e,i,s){
                return(t/=s/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e
            },easeInQuart:function(t,e,i,s){
                return i*(t/=s)*t*t*t+e
            },easeOutQuart:function(t,e,i,s){
                return-i*((t=t/s-1)*t*t*t-1)+e
            },easeInOutQuart:function(t,e,i,s){
                return(t/=s/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e
            },easeInQuint:function(t,e,i,s){
                return i*(t/=s)*t*t*t*t+e
            },easeOutQuint:function(t,e,i,s){
                return i*((t=t/s-1)*t*t*t*t+1)+e
            },easeInOutQuint:function(t,e,i,s){
                return(t/=s/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e
            },easeInSine:function(t,e,i,s){
                return-i*Math.cos(t/s*(Math.PI/2))+i+e
            },easeOutSine:function(t,e,i,s){
                return i*Math.sin(t/s*(Math.PI/2))+e
            },easeInOutSine:function(t,e,i,s){
                return-i/2*(Math.cos(Math.PI*t/s)-1)+e
            },easeInExpo:function(t,e,i,s){
                return 0===t?e:i*Math.pow(2,10*(t/s-1))+e
            },easeOutExpo:function(t,e,i,s){
                return t===s?e+i:i*(1-Math.pow(2,-10*t/s))+e
            },easeInOutExpo:function(t,e,i,s){
                return(t/=s/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e
            },easeInCirc:function(t,e,i,s){
                return-i*(Math.sqrt(1-(t/=s)*t)-1)+e
            },easeOutCirc:function(t,e,i,s){
                return i*Math.sqrt(1-(t=t/s-1)*t)+e
            },easeInOutCirc:function(t,e,i,s){
                return(t/=s/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e
            },easeInElastic:function(t,e,i,s){
                var n,o,r;return r=1.70158,0===t||(t/=s),(o=0)||(o=.3*s),(n=i)<Math.abs(i)?(n=i,r=o/4):r=o/(2*Math.PI)*Math.asin(i/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t*s-r)*(2*Math.PI)/o)+e
            },easeOutElastic:function(t,e,i,s){
                var n,o,r;return r=1.70158,0===t||(t/=s),(o=0)||(o=.3*s),(n=i)<Math.abs(i)?(n=i,r=o/4):r=o/(2*Math.PI)*Math.asin(i/n),n*Math.pow(2,-10*t)*Math.sin((t*s-r)*(2*Math.PI)/o)+i+e
            },easeInOutElastic:function(t,e,i,s){
                var n,o,r;return r=1.70158,0===t||(t/=s/2),(o=0)||(o=s*(.3*1.5)),(n=i)<Math.abs(i)?(n=i,r=o/4):r=o/(2*Math.PI)*Math.asin(i/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t*s-r)*(2*Math.PI)/o)*-.5+e:n*Math.pow(2,-10*(t-=1))*Math.sin((t*s-r)*(2*Math.PI)/o)*.5+i+e
            },easeInBack:function(t,e,i,s,n){
                return void 0===n&&(n=1.70158),i*(t/=s)*t*((n+1)*t-n)+e
            },easeOutBack:function(t,e,i,s,n){
                return void 0===n&&(n=1.70158),i*((t=t/s-1)*t*((n+1)*t+n)+1)+e
            },easeInOutBack:function(t,e,i,s,n){
                return void 0===n&&(n=1.70158),(t/=s/2)<1?i/2*(t*t*((1+(n*=1.525))*t-n))+e:i/2*((t-=2)*t*((1+(n*=1.525))*t+n)+2)+e
            },easeInBounce:function(t,i,s,n){
                return s-e.easeOutBounce(n-t,0,s,n)+i
            },easeOutBounce:function(t,e,i,s){
                return(t/=s)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e
            },easeInOutBounce:function(t,i,s,n){
                return t<n/2?.5*e.easeInBounce(2*t,0,s,n)+i:.5*e.easeOutBounce(2*t-n,0,s,n)+.5*s+i
            }})
        }).call(j)
    }));function _(t,e){
        return t?'function'==typeof t?t:'string'==typeof t?D[t]:void 0:D[e]
    }var A={sides:'all',friction:.5,time:150,ease:'easeInOutSine',underflow:'center',bounceBox:null},T=function(t){
            h(s,t);var i=u(s);function s(t){
                var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,s),(e=i.call(this,t)).options=Object.assign({},A,o),e.ease=_(e.options.ease,'easeInOutSine'),e.options.sides&&('all'===e.options.sides?e.top=e.bottom=e.left=e.right=!0:'horizontal'===e.options.sides?e.right=e.left=!0:'vertical'===e.options.sides?e.top=e.bottom=!0:(e.top=-1!==e.options.sides.indexOf('top'),e.bottom=-1!==e.options.sides.indexOf('bottom'),e.left=-1!==e.options.sides.indexOf('left'),e.right=-1!==e.options.sides.indexOf('right'))),e.parseUnderflow(),e.last={},e.reset(),e
            }return r(s,[{key:'parseUnderflow',value:function(){
                var t=this.options.underflow.toLowerCase();'center'===t?(this.underflowX=0,this.underflowY=0):(this.underflowX=-1!==t.indexOf('left')?-1:-1!==t.indexOf('right')?1:0,this.underflowY=-1!==t.indexOf('top')?-1:-1!==t.indexOf('bottom')?1:0)
            }},{key:'isActive',value:function(){
                return null!==this.toX||null!==this.toY
            }},{key:'down',value:function(){
                this.toX=this.toY=null
            }},{key:'up',value:function(){
                this.bounce()
            }},{key:'update',value:function(t){
                if(!this.paused){
                    if(this.bounce(),this.toX){
                        var e=this.toX;e.time+=t,this.parent.emit('moved',{viewport:this.parent,type:'bounce-x'}),e.time>=this.options.time?(this.parent.x=e.end,this.toX=null,this.parent.emit('bounce-x-end',this.parent)):this.parent.x=this.ease(e.time,e.start,e.delta,this.options.time)
                    }if(this.toY){
                        var i=this.toY;i.time+=t,this.parent.emit('moved',{viewport:this.parent,type:'bounce-y'}),i.time>=this.options.time?(this.parent.y=i.end,this.toY=null,this.parent.emit('bounce-y-end',this.parent)):this.parent.y=this.ease(i.time,i.start,i.delta,this.options.time)
                    }
                }
            }},{key:'calcUnderflowX',value:function(){
                var t;switch(this.underflowX){
                case-1:t=0;break;case 1:t=this.parent.screenWidth-this.parent.screenWorldWidth;break;default:t=(this.parent.screenWidth-this.parent.screenWorldWidth)/2
                }return t
            }},{key:'calcUnderflowY',value:function(){
                var t;switch(this.underflowY){
                case-1:t=0;break;case 1:t=this.parent.screenHeight-this.parent.screenWorldHeight;break;default:t=(this.parent.screenHeight-this.parent.screenWorldHeight)/2
                }return t
            }},{key:'oob',value:function(){
                var t=this.options.bounceBox;if(t){
                    var i=void 0===t.x?0:t.x,s=void 0===t.y?0:t.y,n=void 0===t.width?this.parent.worldWidth:t.width,o=void 0===t.height?this.parent.worldHeight:t.height;return{left:this.parent.left<i,right:this.parent.right>n,top:this.parent.top<s,bottom:this.parent.bottom>o,topLeft:new e.Point(i*this.parent.scale.x,s*this.parent.scale.y),bottomRight:new e.Point(n*this.parent.scale.x-this.parent.screenWidth,o*this.parent.scale.y-this.parent.screenHeight)}
                }return{left:this.parent.left<0,right:this.parent.right>this.parent.worldWidth,top:this.parent.top<0,bottom:this.parent.bottom>this.parent.worldHeight,topLeft:new e.Point(0,0),bottomRight:new e.Point(this.parent.worldWidth*this.parent.scale.x-this.parent.screenWidth,this.parent.worldHeight*this.parent.scale.y-this.parent.screenHeight)}
            }},{key:'bounce',value:function(){
                if(!this.paused){
                    var t,e=this.parent.plugins.get('decelerate',!0);e&&(e.x||e.y)&&(e.x&&e.percentChangeX===e.options.friction||e.y&&e.percentChangeY===e.options.friction)&&(((t=this.oob()).left&&this.left||t.right&&this.right)&&(e.percentChangeX=this.options.friction),(t.top&&this.top||t.bottom&&this.bottom)&&(e.percentChangeY=this.options.friction));var i=this.parent.plugins.get('drag',!0)||{},s=this.parent.plugins.get('pinch',!0)||{};if(e=e||{},!(i.active||s.active||this.toX&&this.toY||e.x&&e.y)){
                        var n=(t=t||this.oob()).topLeft,o=t.bottomRight;if(!this.toX&&!e.x){
                            var r=null;t.left&&this.left?r=this.parent.screenWorldWidth<this.parent.screenWidth?this.calcUnderflowX():-n.x:t.right&&this.right&&(r=this.parent.screenWorldWidth<this.parent.screenWidth?this.calcUnderflowX():-o.x),null!==r&&this.parent.x!==r&&(this.toX={time:0,start:this.parent.x,delta:r-this.parent.x,end:r},this.parent.emit('bounce-x-start',this.parent))
                        }if(!this.toY&&!e.y){
                            var h=null;t.top&&this.top?h=this.parent.screenWorldHeight<this.parent.screenHeight?this.calcUnderflowY():-n.y:t.bottom&&this.bottom&&(h=this.parent.screenWorldHeight<this.parent.screenHeight?this.calcUnderflowY():-o.y),null!==h&&this.parent.y!==h&&(this.toY={time:0,start:this.parent.y,delta:h-this.parent.y,end:h},this.parent.emit('bounce-y-start',this.parent))
                        }
                    }
                }
            }},{key:'reset',value:function(){
                this.toX=this.toY=null,this.bounce()
            }}]),s
        }(b),V={topLeft:!1,friction:.8,time:1e3,ease:'easeInOutSine',interrupt:!0,removeOnComplete:!1,removeOnInterrupt:!1,forceStart:!1},R=function(t){
            h(i,t);var e=u(i);function i(t,s,o){
                var r,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n(this,i),(r=e.call(this,t)).options=Object.assign({},V,h),r.ease=_(h.ease,'easeInOutSine'),r.x=s,r.y=o,r.options.forceStart&&r.snapStart(),r
            }return r(i,[{key:'snapStart',value:function(){
                this.percent=0,this.snapping={time:0};var t=this.options.topLeft?this.parent.corner:this.parent.center;this.deltaX=this.x-t.x,this.deltaY=this.y-t.y,this.startX=t.x,this.startY=t.y,this.parent.emit('snap-start',this.parent)
            }},{key:'wheel',value:function(){
                this.options.removeOnInterrupt&&this.parent.plugins.remove('snap')
            }},{key:'down',value:function(){
                this.options.removeOnInterrupt?this.parent.plugins.remove('snap'):this.options.interrupt&&(this.snapping=null)
            }},{key:'up',value:function(){
                if(0===this.parent.input.count()){
                    var t=this.parent.plugins.get('decelerate',!0);t&&(t.x||t.y)&&(t.percentChangeX=t.percentChangeY=this.options.friction)
                }
            }},{key:'update',value:function(t){
                if(!(this.paused||this.options.interrupt&&0!==this.parent.input.count()))if(this.snapping){
                    var e,i,s,n=this.snapping;if(n.time+=t,n.time>this.options.time)e=!0,i=this.startX+this.deltaX,s=this.startY+this.deltaY;else{
                        var o=this.ease(n.time,0,1,this.options.time);i=this.startX+this.deltaX*o,s=this.startY+this.deltaY*o
                    }this.options.topLeft?this.parent.moveCorner(i,s):this.parent.moveCenter(i,s),this.parent.emit('moved',{viewport:this.parent,type:'snap'}),e&&(this.options.removeOnComplete&&this.parent.plugins.remove('snap'),this.parent.emit('snap-end',this.parent),this.snapping=null)
                }else{
                    var r=this.options.topLeft?this.parent.corner:this.parent.center;r.x===this.x&&r.y===this.y||this.snapStart()
                }
            }}]),i
        }(b),B={width:0,height:0,time:1e3,ease:'easeInOutSine',center:null,interrupt:!0,removeOnComplete:!1,removeOnInterrupts:!1,forceStart:!1,noMove:!1},L=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},B,o),s.ease=_(s.options.ease),s.options.width>0&&(s.xScale=t.screenWidth/s.options.width),s.options.height>0&&(s.yScale=t.screenHeight/s.options.height),s.xIndependent=!!s.xScale,s.yIndependent=!!s.yScale,s.xScale=s.xIndependent?s.xScale:s.yScale,s.yScale=s.yIndependent?s.yScale:s.xScale,0===s.options.time?(t.container.scale.x=s.xScale,t.container.scale.y=s.yScale,s.options.removeOnComplete&&s.parent.plugins.remove('snap-zoom')):o.forceStart&&s.createSnapping(),s
            }return r(i,[{key:'createSnapping',value:function(){
                this.parent.scale;var t=this.parent.worldScreenWidth,e=this.parent.worldScreenHeight,i=this.parent.screenWidth/this.xScale,s=this.parent.screenHeight/this.yScale;this.snapping={time:0,startX:t,startY:e,deltaX:i-t,deltaY:s-e},this.parent.emit('snap-zoom-start',this.parent)
            }},{key:'resize',value:function(){
                this.snapping=null,this.options.width>0&&(this.xScale=this.parent.screenWidth/this.options.width),this.options.height>0&&(this.yScale=this.parent.screenHeight/this.options.height),this.xScale=this.xIndependent?this.xScale:this.yScale,this.yScale=this.yIndependent?this.yScale:this.xScale
            }},{key:'wheel',value:function(){
                this.options.removeOnInterrupt&&this.parent.plugins.remove('snap-zoom')
            }},{key:'down',value:function(){
                this.options.removeOnInterrupt?this.parent.plugins.remove('snap-zoom'):this.options.interrupt&&(this.snapping=null)
            }},{key:'update',value:function(t){
                var e;if(!this.paused&&(!this.options.interrupt||0===this.parent.input.count()))if(this.options.center||this.options.noMove||(e=this.parent.center),this.snapping){
                    if(this.snapping){
                        var i=this.snapping;if(i.time+=t,i.time>=this.options.time)this.parent.scale.set(this.xScale,this.yScale),this.options.removeOnComplete&&this.parent.plugins.remove('snap-zoom'),this.parent.emit('snap-zoom-end',this.parent),this.snapping=null;else{
                            var s=this.snapping,n=this.ease(s.time,s.startX,s.deltaX,this.options.time),o=this.ease(s.time,s.startY,s.deltaY,this.options.time);this.parent.scale.x=this.parent.screenWidth/n,this.parent.scale.y=this.parent.screenHeight/o
                        }var r=this.parent.plugins.get('clamp-zoom',!0);r&&r.clamp(),this.options.noMove||(this.options.center?this.parent.moveCenter(this.options.center):this.parent.moveCenter(e))
                    }
                }else this.parent.scale.x===this.xScale&&this.parent.scale.y===this.yScale||this.createSnapping()
            }},{key:'resume',value:function(){
                this.snapping=null,f(a(i.prototype),'resume',this).call(this)
            }}]),i
        }(b),E={speed:0,acceleration:null,radius:null},U=function(t){
            h(i,t);var e=u(i);function i(t,s){
                var o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n(this,i),(o=e.call(this,t)).target=s,o.options=Object.assign({},E,r),o.velocity={x:0,y:0},o
            }return r(i,[{key:'update',value:function(t){
                if(!this.paused){
                    var e=this.parent.center,i=this.target.x,s=this.target.y;if(this.options.radius){
                        if(!(Math.sqrt(Math.pow(this.target.y-e.y,2)+Math.pow(this.target.x-e.x,2))>this.options.radius))return;var n=Math.atan2(this.target.y-e.y,this.target.x-e.x);i=this.target.x-Math.cos(n)*this.options.radius,s=this.target.y-Math.sin(n)*this.options.radius
                    }var o=i-e.x,r=s-e.y;if(o||r)if(this.options.speed)if(this.options.acceleration){
                        var h=Math.atan2(s-e.y,i-e.x),a=Math.sqrt(Math.pow(o,2)+Math.pow(r,2));if(a){
                            var l=(Math.pow(this.velocity.x,2)+Math.pow(this.velocity.y,2))/(2*this.options.acceleration);this.velocity=a>l?{x:Math.min(this.velocity.x+this.options.acceleration*t,this.options.speed),y:Math.min(this.velocity.y+this.options.acceleration*t,this.options.speed)}:{x:Math.max(this.velocity.x-this.options.acceleration*this.options.speed,0),y:Math.max(this.velocity.y-this.options.acceleration*this.options.speed,0)};var p=Math.cos(h)*this.velocity.x,c=Math.sin(h)*this.velocity.y,u=Math.abs(p)>Math.abs(o)?i:e.x+p,d=Math.abs(c)>Math.abs(r)?s:e.y+c;this.parent.moveCenter(u,d),this.parent.emit('moved',{viewport:this.parent,type:'follow'})
                        }
                    }else{
                        var f=Math.atan2(s-e.y,i-e.x),v=Math.cos(f)*this.options.speed,y=Math.sin(f)*this.options.speed,g=Math.abs(v)>Math.abs(o)?i:e.x+v,m=Math.abs(y)>Math.abs(r)?s:e.y+y;this.parent.moveCenter(g,m),this.parent.emit('moved',{viewport:this.parent,type:'follow'})
                    }else this.parent.moveCenter(i,s),this.parent.emit('moved',{viewport:this.parent,type:'follow'})
                }
            }}]),i
        }(b),q={percent:.1,smooth:!1,interrupt:!0,reverse:!1,center:null,lineHeight:20},F=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},q,o),s
            }return r(i,[{key:'down',value:function(){
                this.options.interrupt&&(this.smoothing=null)
            }},{key:'update',value:function(){
                if(this.smoothing){
                    var t,e=this.smoothingCenter,i=this.smoothing;this.options.center||(t=this.parent.toLocal(e)),this.parent.scale.x+=i.x,this.parent.scale.y+=i.y,this.parent.emit('zoomed',{viewport:this.parent,type:'wheel'});var s=this.parent.plugins.get('clamp-zoom',!0);if(s&&s.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{
                        var n=this.parent.toGlobal(t);this.parent.x+=e.x-n.x,this.parent.y+=e.y-n.y
                    }this.parent.emit('moved',{viewport:this.parent,type:'wheel'}),this.smoothingCount++,this.smoothingCount>=this.options.smooth&&(this.smoothing=null)
                }
            }},{key:'wheel',value:function(t){
                if(!this.paused){
                    var e=this.parent.input.getPointerPosition(t),i=(this.options.reverse?-1:1)*-t.deltaY*(t.deltaMode?this.options.lineHeight:1)/500,s=Math.pow(2,(1+this.options.percent)*i);if(this.options.smooth){
                        var n={x:this.smoothing?this.smoothing.x*(this.options.smooth-this.smoothingCount):0,y:this.smoothing?this.smoothing.y*(this.options.smooth-this.smoothingCount):0};this.smoothing={x:((this.parent.scale.x+n.x)*s-this.parent.scale.x)/this.options.smooth,y:((this.parent.scale.y+n.y)*s-this.parent.scale.y)/this.options.smooth},this.smoothingCount=0,this.smoothingCenter=e
                    }else{
                        var o;this.options.center||(o=this.parent.toLocal(e)),this.parent.scale.x*=s,this.parent.scale.y*=s,this.parent.emit('zoomed',{viewport:this.parent,type:'wheel'});var r=this.parent.plugins.get('clamp-zoom',!0);if(r&&r.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{
                            var h=this.parent.toGlobal(o);this.parent.x+=e.x-h.x,this.parent.y+=e.y-h.y
                        }
                    }return this.parent.emit('moved',{viewport:this.parent,type:'wheel'}),this.parent.emit('wheel',{wheel:{dx:t.deltaX,dy:t.deltaY,dz:t.deltaZ},event:t,viewport:this.parent}),!this.parent.options.passiveWheel||void 0
                }
            }}]),i
        }(b),Q={radius:null,distance:null,top:null,bottom:null,left:null,right:null,speed:8,reverse:!1,noDecelerate:!1,linear:!1,allowButtons:!1},Z=function(t){
            h(i,t);var e=u(i);function i(t){
                var s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,i),(s=e.call(this,t)).options=Object.assign({},Q,o),s.reverse=s.options.reverse?1:-1,s.radiusSquared=Math.pow(s.options.radius,2),s.resize(),s
            }return r(i,[{key:'resize',value:function(){
                var t=this.options.distance;null!==t?(this.left=t,this.top=t,this.right=this.parent.worldScreenWidth-t,this.bottom=this.parent.worldScreenHeight-t):this.radius||(this.left=this.options.left,this.top=this.options.top,this.right=null===this.options.right?null:this.parent.worldScreenWidth-this.options.right,this.bottom=null===this.options.bottom?null:this.parent.worldScreenHeight-this.options.bottom)
            }},{key:'down',value:function(){
                this.paused||this.options.allowButtons||(this.horizontal=this.vertical=null)
            }},{key:'move',value:function(t){
                if(!this.paused&&!('mouse'!==t.data.pointerType&&1!==t.data.identifier||!this.options.allowButtons&&0!==t.data.buttons)){
                    var e=t.data.global.x,i=t.data.global.y;if(this.radiusSquared){
                        var s=this.parent.toScreen(this.parent.center);if(Math.pow(s.x-e,2)+Math.pow(s.y-i,2)>=this.radiusSquared){
                            var n=Math.atan2(s.y-i,s.x-e);this.options.linear?(this.horizontal=Math.round(Math.cos(n))*this.options.speed*this.reverse*.06,this.vertical=Math.round(Math.sin(n))*this.options.speed*this.reverse*.06):(this.horizontal=Math.cos(n)*this.options.speed*this.reverse*.06,this.vertical=Math.sin(n)*this.options.speed*this.reverse*.06)
                        }else this.horizontal&&this.decelerateHorizontal(),this.vertical&&this.decelerateVertical(),this.horizontal=this.vertical=0
                    }else null!==this.left&&e<this.left?this.horizontal=1*this.reverse*this.options.speed*.06:null!==this.right&&e>this.right?this.horizontal=-1*this.reverse*this.options.speed*.06:(this.decelerateHorizontal(),this.horizontal=0),null!==this.top&&i<this.top?this.vertical=1*this.reverse*this.options.speed*.06:null!==this.bottom&&i>this.bottom?this.vertical=-1*this.reverse*this.options.speed*.06:(this.decelerateVertical(),this.vertical=0)
                }
            }},{key:'decelerateHorizontal',value:function(){
                var t=this.parent.plugins.get('decelerate',!0);this.horizontal&&t&&!this.options.noDecelerate&&t.activate({x:this.horizontal*this.options.speed*this.reverse/(1e3/60)})
            }},{key:'decelerateVertical',value:function(){
                var t=this.parent.plugins.get('decelerate',!0);this.vertical&&t&&!this.options.noDecelerate&&t.activate({y:this.vertical*this.options.speed*this.reverse/(1e3/60)})
            }},{key:'up',value:function(){
                this.paused||(this.horizontal&&this.decelerateHorizontal(),this.vertical&&this.decelerateVertical(),this.horizontal=this.vertical=null)
            }},{key:'update',value:function(){
                if(!this.paused&&(this.horizontal||this.vertical)){
                    var t=this.parent.center;this.horizontal&&(t.x+=this.horizontal*this.options.speed),this.vertical&&(t.y+=this.vertical*this.options.speed),this.parent.moveCenter(t),this.parent.emit('moved',{viewport:this.parent,type:'mouse-edges'})
                }
            }}]),i
        }(b),K={removeOnInterrupt:!1,ease:'linear',time:1e3},G=function(t){
            h(s,t);var i=u(s);function s(t){
                var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(this,s),(e=i.call(this,t)).options=Object.assign({},K,o),e.options.ease=_(e.options.ease),e.setupPosition(),e.setupZoom(),e
            }return r(s,[{key:'setupPosition',value:function(){
                void 0!==this.options.position?(this.startX=this.parent.center.x,this.startY=this.parent.center.y,this.deltaX=this.options.position.x-this.parent.center.x,this.deltaY=this.options.position.y-this.parent.center.y,this.keepCenter=!1):this.keepCenter=!0
            }},{key:'setupZoom',value:function(){
                this.width=null,this.height=null,void 0!==this.options.scale?this.width=this.parent.screenWidth/this.options.scale:void 0!==this.options.scaleX||void 0!==this.options.scaleY?(void 0!==this.options.scaleX&&(this.width=this.parent.screenWidth/this.options.scaleX),void 0!==this.options.scaleY&&(this.height=this.parent.screenHeight/this.options.scaleY)):(void 0!==this.options.width&&(this.width=this.options.width),void 0!==this.options.height&&(this.height=this.options.height)),null!==typeof this.width&&(this.startWidth=this.parent.screenWidthInWorldPixels,this.deltaWidth=this.width-this.startWidth),null!==typeof this.height&&(this.startHeight=this.parent.screenHeightInWorldPixels,this.deltaHeight=this.height-this.startHeight),this.time=0
            }},{key:'down',value:function(){
                this.options.removeOnInterrupt&&this.parent.plugins.remove('animate')
            }},{key:'complete',value:function(){
                this.parent.plugins.remove('animate'),null!==this.width&&this.parent.fitWidth(this.width,this.keepCenter,null===this.height),null!==this.height&&this.parent.fitHeight(this.height,this.keepCenter,null===this.width),this.keepCenter||this.parent.moveCenter(this.options.position.x,this.options.position.y),this.parent.emit('animate-end',this.parent),this.options.callbackOnComplete&&this.options.callbackOnComplete(this.parent)
            }},{key:'update',value:function(t){
                if(!this.paused)if(this.time+=t,this.time>=this.options.time)this.complete();else{
                    var i=new e.Point(this.parent.scale.x,this.parent.scale.y),s=this.options.ease(this.time,0,1,this.options.time);if(null!==this.width&&this.parent.fitWidth(this.startWidth+this.deltaWidth*s,this.keepCenter,null===this.height),null!==this.height&&this.parent.fitHeight(this.startHeight+this.deltaHeight*s,this.keepCenter,null===this.width),null===this.width?this.parent.scale.x=this.parent.scale.y:null===this.height&&(this.parent.scale.y=this.parent.scale.x),!this.keepCenter){
                        var n=new e.Point(this.parent.x,this.parent.y);this.parent.moveCenter(this.startX+this.deltaX*s,this.startY+this.deltaY*s),this.parent.emit('moved',{viewport:this.parent,original:n,type:'animate'})
                    }(this.width||this.height)&&this.parent.emit('zoomed',{viewport:this.parent,original:i,type:'animate'}),this.keepCenter
                }
            }}]),s
        }(b),N={screenWidth:window.innerWidth,screenHeight:window.innerHeight,worldWidth:null,worldHeight:null,threshold:5,passiveWheel:!0,stopPropagation:!1,forceHitArea:null,noTicker:!1,interaction:null,disableOnContextMenu:!1},$=function(t){
            h(o,t);var i=u(o);function o(){
                var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n(this,o),(t=i.call(this)).options=Object.assign({},N,r),r.ticker)t.options.ticker=r.ticker;else{
                    var h,a=s;h=parseInt(/^(\d+)\./.exec(e.VERSION)[1])<5?a.ticker.shared:a.Ticker.shared,t.options.ticker=r.ticker||h
                }return t.screenWidth=t.options.screenWidth,t.screenHeight=t.options.screenHeight,t._worldWidth=t.options.worldWidth,t._worldHeight=t.options.worldHeight,t.forceHitArea=t.options.forceHitArea,t.threshold=t.options.threshold,t.options.divWheel=t.options.divWheel||document.body,t.options.disableOnContextMenu&&(t.options.divWheel.oncontextmenu=function(t){
                    return t.preventDefault()
                }),t.options.noTicker||(t.tickerFunction=function(){
                    return t.update(t.options.ticker.elapsedMS)
                },t.options.ticker.add(t.tickerFunction)),t.input=new w(p(t)),t.plugins=new k(p(t)),t
            }return r(o,[{key:'destroy',value:function(t){
                this.options.noTicker||this.options.ticker.remove(this.tickerFunction),this.input.destroy(),f(a(o.prototype),'destroy',this).call(this,t)
            }},{key:'update',value:function(t){
                this.pause||(this.plugins.update(t),this.lastViewport&&(this.lastViewport.x!==this.x||this.lastViewport.y!==this.y?this.moving=!0:this.moving&&(this.emit('moved-end',this),this.moving=!1),this.lastViewport.scaleX!==this.scale.x||this.lastViewport.scaleY!==this.scale.y?this.zooming=!0:this.zooming&&(this.emit('zoomed-end',this),this.zooming=!1)),this.forceHitArea||(this._hitAreaDefault=new e.Rectangle(this.left,this.top,this.worldScreenWidth,this.worldScreenHeight),this.hitArea=this._hitAreaDefault),this._dirty=this._dirty||!this.lastViewport||this.lastViewport.x!==this.x||this.lastViewport.y!==this.y||this.lastViewport.scaleX!==this.scale.x||this.lastViewport.scaleY!==this.scale.y,this.lastViewport={x:this.x,y:this.y,scaleX:this.scale.x,scaleY:this.scale.y},this.emit('frame-end',this))
            }},{key:'resize',value:function(){
                var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerHeight,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;this.screenWidth=t,this.screenHeight=e,void 0!==i&&(this._worldWidth=i),void 0!==s&&(this._worldHeight=s),this.plugins.resize(),this.dirty=!0
            }},{key:'worldWidth',get:function(){
                return this._worldWidth?this._worldWidth:this.width/this.scale.x
            },set:function(t){
                this._worldWidth=t,this.plugins.resize()
            }},{key:'worldHeight',get:function(){
                return this._worldHeight?this._worldHeight:this.height/this.scale.y
            },set:function(t){
                this._worldHeight=t,this.plugins.resize()
            }},{key:'getVisibleBounds',value:function(){
                return new e.Rectangle(this.left,this.top,this.worldScreenWidth,this.worldScreenHeight)
            }},{key:'toWorld',value:function(t,i){
                return 2===arguments.length?this.toLocal(new e.Point(t,i)):this.toLocal(t)
            }},{key:'toScreen',value:function(t,i){
                return 2===arguments.length?this.toGlobal(new e.Point(t,i)):this.toGlobal(t)
            }},{key:'worldScreenWidth',get:function(){
                return this.screenWidth/this.scale.x
            }},{key:'worldScreenHeight',get:function(){
                return this.screenHeight/this.scale.y
            }},{key:'screenWorldWidth',get:function(){
                return this.worldWidth*this.scale.x
            }},{key:'screenWorldHeight',get:function(){
                return this.worldHeight*this.scale.y
            }},{key:'center',get:function(){
                return new e.Point(this.worldScreenWidth/2-this.x/this.scale.x,this.worldScreenHeight/2-this.y/this.scale.y)
            },set:function(t){
                this.moveCenter(t)
            }},{key:'moveCenter',value:function(){
                var t,e;return isNaN(arguments[0])?(t=arguments[0].x,e=arguments[0].y):(t=arguments[0],e=arguments[1]),this.position.set((this.worldScreenWidth/2-t)*this.scale.x,(this.worldScreenHeight/2-e)*this.scale.y),this.plugins.reset(),this.dirty=!0,this
            }},{key:'corner',get:function(){
                return new e.Point(-this.x/this.scale.x,-this.y/this.scale.y)
            },set:function(t){
                this.moveCorner(t)
            }},{key:'moveCorner',value:function(t,e){
                return 1===arguments.length?this.position.set(-t.x*this.scale.x,-t.y*this.scale.y):this.position.set(-t*this.scale.x,-e*this.scale.y),this.plugins.reset(),this
            }},{key:'screenWidthInWorldPixels',get:function(){
                return this.screenWidth/this.scale.x
            }},{key:'screenHeightInWorldPixels',get:function(){
                return this.screenHeight/this.scale.y
            }},{key:'findFitWidth',value:function(t){
                return this.screenWidth/t
            }},{key:'findFitHeight',value:function(t){
                return this.screenHeight/t
            }},{key:'findFit',value:function(t,e){
                var i=this.screenWidth/t,s=this.screenHeight/e;return Math.min(i,s)
            }},{key:'findCover',value:function(t,e){
                var i=this.screenWidth/t,s=this.screenHeight/e;return Math.max(i,s)
            }},{key:'fitWidth',value:function(t,e){
                var i,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0;e&&(i=this.center),this.scale.x=this.screenWidth/t,s&&(this.scale.y=this.scale.x);var o=this.plugins.get('clamp-zoom',!0);return!n&&o&&o.clamp(),e&&this.moveCenter(i),this
            }},{key:'fitHeight',value:function(t,e){
                var i,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0;e&&(i=this.center),this.scale.y=this.screenHeight/t,s&&(this.scale.x=this.scale.y);var o=this.plugins.get('clamp-zoom',!0);return!n&&o&&o.clamp(),e&&this.moveCenter(i),this
            }},{key:'fitWorld',value:function(t){
                var e;t&&(e=this.center),this.scale.x=this.screenWidth/this.worldWidth,this.scale.y=this.screenHeight/this.worldHeight,this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y;var i=this.plugins.get('clamp-zoom',!0);return i&&i.clamp(),t&&this.moveCenter(e),this
            }},{key:'fit',value:function(t){
                var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.worldWidth,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.worldHeight;t&&(e=this.center),this.scale.x=this.screenWidth/i,this.scale.y=this.screenHeight/s,this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y;var n=this.plugins.get('clamp-zoom',!0);return n&&n.clamp(),t&&this.moveCenter(e),this
            }},{key:'visible',set:function(t){
                t||this.input.clear(),y(a(o.prototype),'visible',t,this,!0)
            }},{key:'setZoom',value:function(t,e){
                var i;e&&(i=this.center),this.scale.set(t);var s=this.plugins.get('clamp-zoom',!0);return s&&s.clamp(),e&&this.moveCenter(i),this
            }},{key:'zoomPercent',value:function(t,e){
                return this.setZoom(this.scale.x+this.scale.x*t,e)
            }},{key:'zoom',value:function(t,e){
                return this.fitWidth(t+this.worldScreenWidth,e),this
            }},{key:'scaled',get:function(){
                return this.scale.x
            },set:function(t){
                this.setZoom(t,!0)
            }},{key:'snapZoom',value:function(t){
                return this.plugins.add('snap-zoom',new L(this,t)),this
            }},{key:'OOB',value:function(){
                return{left:this.left<0,right:this.right>this.worldWidth,top:this.top<0,bottom:this.bottom>this._worldHeight,cornerPoint:new e.Point(this.worldWidth*this.scale.x-this.screenWidth,this.worldHeight*this.scale.y-this.screenHeight)}
            }},{key:'right',get:function(){
                return-this.x/this.scale.x+this.worldScreenWidth
            },set:function(t){
                this.x=-t*this.scale.x+this.screenWidth,this.plugins.reset()
            }},{key:'left',get:function(){
                return-this.x/this.scale.x
            },set:function(t){
                this.x=-t*this.scale.x,this.plugins.reset()
            }},{key:'top',get:function(){
                return-this.y/this.scale.y
            },set:function(t){
                this.y=-t*this.scale.y,this.plugins.reset()
            }},{key:'bottom',get:function(){
                return-this.y/this.scale.y+this.worldScreenHeight
            },set:function(t){
                this.y=-t*this.scale.y+this.screenHeight,this.plugins.reset()
            }},{key:'dirty',get:function(){
                return this._dirty
            },set:function(t){
                this._dirty=t
            }},{key:'forceHitArea',get:function(){
                return this._forceHitArea
            },set:function(t){
                t?(this._forceHitArea=t,this.hitArea=t):(this._forceHitArea=null,this.hitArea=new e.Rectangle(0,0,this.worldWidth,this.worldHeight))
            }},{key:'drag',value:function(t){
                return this.plugins.add('drag',new H(this,t)),this
            }},{key:'clamp',value:function(t){
                return this.plugins.add('clamp',new C(this,t)),this
            }},{key:'decelerate',value:function(t){
                return this.plugins.add('decelerate',new Y(this,t)),this
            }},{key:'bounce',value:function(t){
                return this.plugins.add('bounce',new T(this,t)),this
            }},{key:'pinch',value:function(t){
                return this.plugins.add('pinch',new M(this,t)),this
            }},{key:'snap',value:function(t,e,i){
                return this.plugins.add('snap',new R(this,t,e,i)),this
            }},{key:'follow',value:function(t,e){
                return this.plugins.add('follow',new U(this,t,e)),this
            }},{key:'wheel',value:function(t){
                return this.plugins.add('wheel',new F(this,t)),this
            }},{key:'animate',value:function(t){
                return this.plugins.add('animate',new G(this,t)),this
            }},{key:'clampZoom',value:function(t){
                return this.plugins.add('clamp-zoom',new z(this,t)),this
            }},{key:'mouseEdges',value:function(t){
                return this.plugins.add('mouse-edges',new Z(this,t)),this
            }},{key:'pause',get:function(){
                return this._pause
            },set:function(t){
                this._pause=t,this.lastViewport=null,this.moving=!1,this.zooming=!1,t&&this.input.pause()
            }},{key:'ensureVisible',value:function(t,e,i,s,n){
                n&&(i>this.worldScreenWidth||s>this.worldScreenHeight)&&(this.fit(!0,i,s),this.emit('zoomed',{viewport:this,type:'ensureVisible'}));var o=!1;t<this.left?(this.left=t,o=!0):t+i>this.right&&(this.right=t+i,o=!0),e<this.top?(this.top=e,o=!0):e+s>this.bottom&&(this.bottom=e+s,o=!0),o&&this.emit('moved',{viewport:this,type:'ensureVisible'})
            }}]),o
        }(e.Container);t.Plugin=b,t.Viewport=$,Object.defineProperty(t,'__esModule',{value:!0})
}));
//# sourceMappingURL=viewport.js.map
