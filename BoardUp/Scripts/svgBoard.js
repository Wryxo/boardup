window.onload = function() {
	//Dragovanie stvoruholniku
	moveStartRect = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
		    this.ox = this.attr("x");
		    this.oy = this.attr("y");

		    this.br.ox = this.br.attr("x");
		    this.br.oy = this.br.attr("y");
	    } 
	};
	moveMoveRect = function (dx, dy, x,y,e) {
		if (e.which == 1) {
	    this.attr({
	        x: this.ox + dx,
	        y: this.oy + dy
	    });
	    this.br.attr({
	        x: this.br.ox + dx,
	        y: this.br.oy + dy
	    });
	}
	};
	//Dragovanie kruhu/elipsy
	moveStartCircle = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
		    this.ox = this.attr("cx");
		    this.oy = this.attr("cy");

		    this.br.ox = this.br.attr("x");
		    this.br.oy = this.br.attr("y");
		}
	};
	moveMoveCircle = function (dx, dy, x,y,e) {
		if (e.which == 1) {
	    this.attr({
	        cx: this.ox + dx,
	        cy: this.oy + dy
	    });
	    this.br.attr({
	        x: this.br.ox + dx,
	        y: this.br.oy + dy
	    });
	}
	};
	//Dragovanie ciary
	moveStartLine = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
		this.osx = this.data("startx");
	    this.oex = this.data("endx");
	    this.osy = this.data("starty");
	    this.oey = this.data("endy");

	    this.br.ox = this.br.attr("x");
	    this.br.oy = this.br.attr("y");

	    this.bl.ox = this.bl.attr("x");
	    this.bl.oy = this.bl.attr("y");
	}
	};
	moveMoveLine = function (dx, dy,x,y,e) {
		if (e.which == 1) {
	    this.data({
	        startx: this.osx + dx,
	        starty: this.osy + dy,
	        endx: this.oex + dx,
	        endy: this.oey + dy
	    });
	    this.attr("path", "M"+this.data("startx")+","+this.data("starty")+"L"+this.data("endx")+","+this.data("endy"));
	    this.br.attr({
	        x: this.br.ox + dx,
	        y: this.br.oy + dy
	    });
	    this.bl.attr({
	        x: this.bl.ox + dx,
	        y: this.bl.oy + dy
	    });
	}
	};

	//resize stvoruholniku
	resizeStartRect = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
	    this.ox = this.attr("x");
	    this.oy = this.attr("y");

	    this.curr.ow = this.curr.attr("width");
	    this.curr.oh = this.curr.attr("height");
	}
	};
	resizeMoveRect = function (dx, dy, x,y,e) {
	    if (this.curr.attr("width")+dx >= 10) {
		    this.curr.attr({
		        width: this.curr.ow + dx
		    });
		    
	    } else {
	    	this.curr.attr({
		        width: 10
		    });
	    }
	    
	    if (this.curr.attr("height")+dy >= 10) {
	    	this.curr.attr({
		        height: this.curr.oh + dy
		    });	
	    } else {
	    	this.curr.attr({
		        height: 10
		    });
	    }
	    this.attr({
	        x: this.curr.attr("x") + this.curr.attr("width"),
	        y: this.curr.attr("y") + this.curr.attr("height")
	    });
	};
	//resize kruhu
	resizeStartCircle = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
	    this.ox = this.attr("x");
	    this.oy = this.attr("y");

	    this.curr.ow = this.curr.attr("rx");
	    this.curr.oh = this.curr.attr("ry");
	}
	};
	resizeMoveCircle = function (dx, dy, x,y,e) {
		if (e.which == 1) {
	    if (this.curr.attr("rx")+dx >= 10) {
		    this.curr.attr({
		        rx: this.curr.ow + dx + dy
		    });
		    
	    } else {
	    	this.curr.attr({
		        rx: 10
		    });
	    }
	    
	    if (this.curr.attr("ry")+dy >= 10) {
	    	this.curr.attr({
		        ry: this.curr.oh + dy + dx
		    });	
	    } else {
	    	this.curr.attr({
		        ry: 10
		    });
	    }
	    this.attr({
	        x: this.curr.attr("cx") + this.curr.attr("rx"),
	        y: this.curr.attr("cy") + this.curr.attr("ry")
	    });
	}
	};
	//resize ciary
	resizeStartLineStart = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
	    this.ox = this.attr("x");
	    this.oy = this.attr("y");

	    this.curr.osx = this.curr.data("startx");
    	this.curr.osy = this.curr.data("starty");
    }
	};
	resizeMoveLineStart = function (dx, dy, x,y,e) {
		if (e.which == 1) {
	    this.attr({
	        x: this.ox + dx,
	        y: this.oy + dy
	    });
		this.curr.data({
	        startx: this.curr.osx + dx,
	        starty: this.curr.osy + dy
	    });
	    this.curr.attr("path", "M"+this.curr.data("startx")+","+this.curr.data("starty")+"L"+this.curr.data("endx")+","+this.curr.data("endy"));
	}
		};

	resizeStartLineEnd = function (x,y,e) {
		clearInterval(interval);
		if (e.which == 1) {
	    this.ox = this.attr("x");
	    this.oy = this.attr("y");

	    this.curr.oex = this.curr.data("endx");
    	this.curr.oey = this.curr.data("endy");
    }
	};
	resizeMoveLineEnd = function (dx, dy, x,y,e) {
		if (e.which == 1) {
	    this.attr({
	        x: this.ox + dx,
	        y: this.oy + dy
	    });
	    this.curr.data({
	        endx: this.curr.oex + dx,
	        endy: this.curr.oey + dy
	    });
	    this.curr.attr("path", "M"+this.curr.data("startx")+","+this.curr.data("starty")+"L"+this.curr.data("endx")+","+this.curr.data("endy"));
	}
	};
	//resize elipsy
	resizeMoveEllipse = function (dx, dy, x,y,e) {
		if (e.which == 1) {
	    if (this.curr.attr("rx")+dx >= 10) {
		    this.curr.attr({
		        rx: this.curr.ow + dx
		    });
		    
	    } else {
	    	this.curr.attr({
		        rx: 10
		    });
	    }
	    
	    if (this.curr.attr("ry")+dy >= 10) {
	    	this.curr.attr({
		        ry: this.curr.oh + dy
		    });	
	    } else {
	    	this.curr.attr({
		        ry: 10
		    });
	    }
	    this.attr({
	        x: this.curr.attr("cx") + this.curr.attr("rx"),
	        y: this.curr.attr("cy") + this.curr.attr("ry")
	    });
	}
	};
	//pridat stvoruholnik ako objekt
	addRect = function(i, x, y, w, h, f, s, sw, v) {
		var c = R.rect(x, y, w, h).attr({
		    fill: f,
		    stroke: s,
		    "stroke-width": sw
		});
		c.data({
			type: "rect",
			id: i,
			visible: v
		});
		var coords = c.getBBox(false);
		var s = R.rect(coords.x2, coords.y2, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "nwse-resize",
		});
		c.br = s;
		//s.data("visible", "true");
		c.mousedown(function(e){
            if (e.which == 3) {
				if (this.data("visible") === "true") {
					this.br.hide();
					this.data("visible", "false");
				} else {
					this.br.show();
					this.data("visible", "true");
				}
				e.preventDefault();
            }
            if (e.which == 2) {
            	sendDelete(this);
            	e.preventDefault();
            }
            return false;
        });
        c.drag(moveMoveRect, moveStartRect, updateEndMove);
		s.drag(resizeMoveRect, resizeStartRect, updateEndResize);
		s.curr = c;
		st.push(s);
		return c;
	};
	//pridat kruh ako objekt
/*	addCircle = function(i, x, y, w, h, f, s, sw) {
		var c = R.ellipse(x, y, w, h).attr({
		    fill: f,
		    stroke: s,
		    stroke-width: sw
		});
		c.data({
			type: "rect",
			id: i
		});
		var coords = c.getBBox(false);
		var s = R.rect(coords.x2, coords.y2, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "nwse-resize",
		});
		c.drag(moveMoveCircle, moveStartCircle);
		c.br = s;
		s.data("visible", "true");
		c.dblclick(function() {
			if (this.br.data("visible") === "true") {
				this.br.hide();
				this.br.data("visible", "false");
			} else {
				this.br.show();
				this.br.data("visible", "true");
			}
		});
		s.drag(resizeMoveCircle, resizeStartCircle);
		s.curr = c;
		currs.push(c);
	};*/
	//pridat elipsu ako objekt
	addEllipse = function(i, x, y, w, h, f, s, sw, v) {
		var c = R.ellipse(x, y, w, h).attr({
		    fill: f,
		    stroke: s,
		    "stroke-width": sw
		    });
		c.data({
			type: "elli",
			id: i,
			visible: v
		});
		var coords = c.getBBox(false);
		var s = R.rect(coords.x2, coords.y2, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "nwse-resize",
		});
		c.drag(moveMoveCircle, moveStartCircle, updateEndMove);
		c.br = s;
		//s.data("visible", "true");
		c.mousedown(function(e){
            if (e.which == 3) {
				if (this.data("visible") === "true") {
					this.br.hide();
					this.data("visible", "false");
				} else {
					this.br.show();
					this.data("visible", "true");
				}
				e.DefaultPrevented();
            }
            if (e.which == 2) {
            	sendDelete(this);
            	e.preventDefault();
            }
            return false;
        });
		s.drag(resizeMoveEllipse, resizeStartCircle, updateEndResize);
		s.curr = c;
		st.push(s);
		return c;
	};
	//pridat ciaru ako objekt
	addLine = function(i, x, y, w, h, f, s, sw, v) {
		var c = R.path("M0,0L0,0").attr({
		    stroke: s,
		    "stroke-width": sw
		});
		c.data({
			startx: x,
			starty: y,
			endx: w,
			endy: h,
			id: i,
			type: "line",
			visible: v
		});
		c.attr("path", "M"+c.data("startx")+","+c.data("starty")+"L"+c.data("endx")+","+c.data("endy"));
		var coords = c.getBBox(false);
		var s = R.rect(w, h, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "move",
		});
		var d = R.rect(x, y, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "move",
		});
		c.drag(moveMoveLine, moveStartLine, updateEndMove);
		c.br = s;
		c.bl = d;
		//s.data("visible", "true");
		c.mousedown(function(e){
            if (e.which == 3) {
				if (this.data("visible") === "true") {
					this.br.hide();
					this.data("visible", "false");
				} else {
					this.br.show();
					this.data("visible", "true");
				}
				e.preventDefault();
            }
            if (e.which == 2) {
            	sendDelete(this);
            	e.preventDefault();
            }
            return false;
        });
		s.drag(resizeMoveLineEnd, resizeStartLineEnd, updateEndResize);
		d.drag(resizeMoveLineStart, resizeStartLineStart, updateEndResize);
		s.curr = c;
		d.curr = c;
		st.push(s);
		st.push(d);
		return c;
	};
	//pridat text s danym ID a textom
	addText = function(i, text, x, y, w, h, f, s, sw)
	{
		var c = R.text(x,y, text.substring(5,text.length-5));
	    c.attr({
	    	"text-anchor" : "start",
	    	"fill" : f,
	    	"stroke" : s,
	    	"stroke-width" : sw,
	    	"font-size" : w
	    });
	    c.data({
			type: "text",
			id: i
		});
		c.mousedown(function(e){
            if (e.which == 2) {
            	sendDelete(this);
            	e.preventDefault();
            }
            return false;
    	});
    	return c;
	}
	//pridat stvoruholnik pri kliku
	addRectClick = function(dx, dy) {
		clearInterval(interval);
		var c = R.rect(dx-paper_position.left, dy-paper_position.top, 0, 0).attr({
		    fill: currentFillColor,
		    stroke: currentStrokeColor
		});
		c.data({
			type: "rect",
			id: -1
		});
		var coords = c.getBBox(false);
		var s = R.rect(coords.x2, coords.y2, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "nwse-resize",
		});
		c.drag(moveMoveRect, moveStartRect, updateEndMove);
		c.br = s;
		s.data("visible", "true");
		c.mousedown(function(e){
            if (e.which == 3) {
				if (this.data("visible") === "true") {
					this.br.hide();
					this.data("visible", "false");
				} else {
					this.br.show();
					this.data("visible", "true");
				}
				e.preventDefault();
            }
            if (e.which == 2) {
            	sendDelete(this);
            	e.preventDefault();
            }
            return false;
        });
		s.drag(resizeMoveRect, resizeStartRect, updateEndResize);
		s.curr = c;
		this.curr = c;
		this.curr.br.ox = this.curr.br.attr("x");
	    this.curr.br.oy = this.curr.br.attr("y");

	    this.curr.ow = this.curr.attr("width");
	    this.curr.oh = this.curr.attr("height");
	    st.push(s);
	    st.push(c);
	}
	//pridat elipsu pri kliku
	addElliClick = function(dx, dy) {
		clearInterval(interval);
		var c = R.ellipse(dx-paper_position.left, dy-paper_position.top, 0, 0).attr({
		    fill: currentFillColor,
		    stroke: currentStrokeColor
		});
		c.data({
			type: "elli",
			id: -1
		});
		var coords = c.getBBox(false);
		var s = R.rect(coords.x2, coords.y2, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "nwse-resize",
		});
		c.drag(moveMoveCircle, moveStartCircle, updateEndMove);
		c.br = s;
		s.data("visible", "true");
		c.mousedown(function(e){
            if (e.which == 3) {
				if (this.data("visible") === "true") {
					this.br.hide();
					this.data("visible", "false");
				} else {
					this.br.show();
					this.data("visible", "true");
				}
				e.preventDefault();
            }
            if (e.which == 2) {
            	sendDelete(this);
            	e.preventDefault();
            }
            return false;
        });
		s.drag(resizeMoveEllipse, resizeStartCircle, updateEndResize);
		s.curr = c;
		this.curr = c;
		this.curr.br.ox = this.curr.br.attr("x");
	    this.curr.br.oy = this.curr.br.attr("y");

	    this.curr.ow = this.curr.attr("rx");
	    this.curr.oh = this.curr.attr("ry");
	    st.push(s);
	    st.push(c);
	}
	//pridat ciaru pri kliku
	addLineClick = function(dx, dy) 
	{
		clearInterval(interval);
		var c = R.path("M0,0L0,0").attr({
		    stroke: currentStrokeColor,
		    "stroke-width": 3
		});
		c.data({
			startx: dx-paper_position.left,
			starty: dy-paper_position.top,
			endx: dx-paper_position.left,
			endy: dy-paper_position.top,
			id: -1,
			type: "line"
		});
		c.attr("path", "M"+c.data("startx")+","+c.data("starty")+"L"+c.data("endx")+","+c.data("endy"));
		var coords = c.getBBox(false);
		var s = R.rect(dx-paper_position.left, dy-paper_position.top, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "move",
		});
		var d = R.rect(dx-paper_position.left, dy-paper_position.top, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "move",
		});
		c.drag(moveMoveLine, moveStartLine, updateEndMove);
		c.br = s;
		c.bl = d;
		c.mousedown(function(e){
			e.preventDefault();
            if (e.which == 3) {
				if (this.data("visible") === "true") {
					this.br.hide();
					this.data("visible", "false");
				} else {
					this.br.show();
					this.data("visible", "true");
				}
            }
            if (e.which == 2) {
            	sendDelete(this);
            }
            return false;
        });
		s.drag(resizeMoveLineEnd, resizeStartLineEnd, updateEndResize);
		d.drag(resizeMoveLineStart, resizeStartLineStart, updateEndResize);
		s.curr = c;
		d.curr = c;
		this.curr = c;
		this.curr.br.ox = this.curr.br.attr("x");
	    this.curr.br.oy = this.curr.br.attr("y");

	    this.curr.oex = this.curr.data("endx");
    	this.curr.oey = this.curr.data("endy");
		st.push(s);
		st.push(d);
		st.push(c);
	}
	//resizovanie stvoruholniku pri kliku
	addRectClickMove = function(dx, dy) {
	    if (this.curr.attr("width")+dx >= 10) {
		    this.curr.attr({
		        width: this.curr.ow + dx
		    });
		    
	    } else {
	    	this.curr.attr({
		        width: 10
		    });
	    }
	    
	    if (this.curr.attr("height")+dy >= 10) {
	    	this.curr.attr({
		        height: this.curr.oh + dy
		    });	
	    } else {
	    	this.curr.attr({
		        height: 10
		    });
	    }
	    this.curr.br.attr({
	        x: this.curr.attr("x") + this.curr.attr("width"),
	        y: this.curr.attr("y") + this.curr.attr("height")
	    });
	}
	//resizovanie elipsi pri kliku
	addElliClickMove = function(dx, dy) {
		if (this.curr.attr("rx")+dx >= 10) {
			    this.curr.attr({
			        rx: this.curr.ow + dx
			    });
			    
	    } else {
	    	this.curr.attr({
		        rx: 10
		    });
	    }
	    
	    if (this.curr.attr("ry")+dy >= 10) {
	    	this.curr.attr({
		        ry: this.curr.oh + dy
		    });	
	    } else {
	    	this.curr.attr({
		        ry: 10
		    });
	    }
	    this.curr.br.attr({
	        x: this.curr.attr("cx") + this.curr.attr("rx"),
	        y: this.curr.attr("cy") + this.curr.attr("ry")
	    });
	};
	//resizovanie ciary pri kliku
	addLineClickMove = function (dx, dy) 
	{
	    this.curr.data({
	        endx: this.curr.oex + dx,
	        endy: this.curr.oey + dy
	    });
	    this.curr.attr("path", "M"+this.curr.data("startx")+","+this.curr.data("starty")+"L"+this.curr.data("endx")+","+this.curr.data("endy"));
	    this.curr.bl.attr({
	        x: this.curr.data("endx"),
	        y: this.curr.data("endy")
	    });
	};
	//posli AJAX o pridani objektu
	function sendAdd(curr, type) {
		switch(type.substring(0,4))
		{
			case "rect": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : curr.data("type"),
							"x" : curr.attr("x"),
							"y" : curr.attr("y"),
							"width" : curr.attr("width"),
							"height" : curr.attr("height"),
							"fill" : curr.attr("fill"),
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
			case "elli": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : curr.data("type"),
							"x" : curr.attr("cx"),
							"y" : curr.attr("cy"),
							"width" : curr.attr("rx"),
							"height" : curr.attr("ry"),
							"fill" : curr.attr("fill"),
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
			case "line": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : curr.data("type"),
							"x" : curr.data("startx"),
							"y" : curr.data("starty"),
							"width" : curr.data("endx"),
							"height" : curr.data("endy"),
							"fill" : null,
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
			case "text": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : type,
							"x" : curr.attr("x"),
							"y" : curr.attr("y"),
							"width" : curr.attr("font-size"),
							"height" : null,
							"fill" : curr.attr("fill"),
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
		}
            $.ajax({
                type: "POST",
                url: serviceURL,
                data: JSON.stringify(myData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: successFunc,
                error: errorFunc,
                cache: false
            });

            function successFunc(data, status) {
            	applyChanges(data);
            }

            function errorFunc() {
                alert('error');
            }
	}
	//posli novy objekt a zapni automaticky refresh
	addEnd = function() 
	{
		sendAdd(this.curr, this.curr.data("type"));
		interval = setInterval(function() { getBoard() }, 200);
	}
	//posli update pohybu objektu a zapni automaticky refresh
	updateEndMove = function()
	{
		sendUpdate(this, this.data("type"));
		interval = setInterval(function() { getBoard() }, 200);
	}
	//posli update resizu objektu a zapni automaticky refresh
	updateEndResize = function()
	{
		sendUpdate(this.curr, this.curr.data("type"));
		interval = setInterval(function() { getBoard() }, 200);
	}	
	//posli AJAX o update
	function sendUpdate(curr, type) {
		switch(type)
		{
			case "rect": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : curr.data("type"),
							"x" : curr.attr("x"),
							"y" : curr.attr("y"),
							"width" : curr.attr("width"),
							"height" : curr.attr("height"),
							"fill" : curr.attr("fill"),
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
			case "elli": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : curr.data("type"),
							"x" : curr.attr("cx"),
							"y" : curr.attr("cy"),
							"width" : curr.attr("rx"),
							"height" : curr.attr("ry"),
							"fill" : curr.attr("fill"),
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
			case "line": var myData = {
							"GraphicObjectId" : curr.data("id"),
							"BoardId" : boardID,
							"type" : curr.data("type"),
							"x" : curr.data("startx"),
							"y" : curr.data("starty"),
							"width" : curr.data("endx"),
							"height" : curr.data("endy"),
							"fill" : null,
							"stroke" : curr.attr("stroke"),
							"stroke_width" : curr.attr("stroke-width")
						};
						break;
		}
            $.ajax({
                type: "POST",
                url: updateURL,
                data: JSON.stringify(myData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: successFunc,
                error: errorFunc,
                cache: false
            });

            function successFunc(data, status) {
            	applyChanges(data);
            }

            function errorFunc() {
                alert('error');
            }
	}
	//posli zmazanie objektu
	function sendDelete(curr) 
	{
		var myData = {
				"GraphicObjectId" : curr.data("id"),
				"BoardId" : boardID,
				"type" : curr.data("type"),
				"x" : curr.data("startx"),
				"y" : curr.data("starty"),
				"width" : curr.data("endx"),
				"height" : curr.data("endy"),
				"fill" : null,
				"stroke" : curr.attr("stroke"),
				"stroke_width" : curr.attr("stroke-width")
					};

            $.ajax({
                type: "POST",
                url: deleteURL,
                data: JSON.stringify(myData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: successFunc,
                error: errorFunc,
                cache: false
            });

            function successFunc(data, status) {
            	applyChanges(data);
            }

            function errorFunc() {
                alert('error');
            }
	}
	//obnov objekty na tabuli
	function getBoard() {
		var myData = {
				"GraphicObjectId" : -1,
				"BoardId" : boardID,
				"type" : "refresh",
				"x" : -1,
				"y" : -1,
				"width" : -1,
				"height" : -1,
				"fill" : null,
				"stroke" : -1,
				"stroke_width" : -1
					};
		$.ajax({
                type: "POST",
                url: refreshURL,
                data: JSON.stringify(myData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: successFunc,
                error: errorFunc,
                cache: false
            });

            function successFunc(data, status) {
            	applyChanges(data);                	
            }

            function errorFunc() {
                alert('error');
            }
    }
    //obnov spravy v chate
    function getChat() {
		var myData = {
				"ChatObjectId" : -1,
				"BoardId" : boardID,
				"User" : "",
				"Message" : "",
				"Timestamp" : null
					};
		$.ajax({
                type: "POST",
                url: chatRefreshURL,
                data: JSON.stringify(myData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: successFunc,
                error: errorFunc,
                cache: false
            });

            function successFunc(data, status) {
            	updateChat(data);                	
            }

            function errorFunc() {
                alert('error');
            }
    }

    //aplikuj zmeny co si stiahol
    function applyChanges(data) {
    	if (data.length != prevCountBoard) {
    		prevCountBoard = data.length;
	    	st.remove();
	    	st = R.set();
	    	for (var i = 0; i < data.length; i++)
	    	{
	    		var tmp = data[i];
	    		switch(tmp.type.substring(0,4))
				{
					case "rect": 
								st.push(addRect(tmp.GraphicObjectId, tmp.x, tmp.y, tmp.width, tmp.height, tmp.fill, tmp.stroke, tmp.stroke_width, "true"));
								break;
					case "elli": 
								st.push(addEllipse(tmp.GraphicObjectId, tmp.x, tmp.y, tmp.width, tmp.height, tmp.fill, tmp.stroke, tmp.stroke_width, "true"));
								break;
					case "line":
								st.push(addLine(tmp.GraphicObjectId, tmp.x, tmp.y, tmp.width, tmp.height, tmp.fill, tmp.stroke, tmp.stroke_width, "true")); 
								break;
					case "text":
								st.push(addText(tmp.GraphicObjectId, tmp.type, tmp.x, tmp.y, tmp.width, tmp.height, tmp.fill, tmp.stroke, tmp.stroke_width));
								break;
				}
	    	}
    	}
    }
    // obnov udaje v chate
    function updateChat(data)
    {
    	if (data.length > prevCountChat) {
    		prevCountChat = data.length;
	    	var chatbox = $("#chatbox");
	    	chatbox.text("");
	    	for (var i = 0; i < data.length; i++)
	    	{
	    		var time = new Date(parseInt(data[i].Timestamp.substring(6, data[i].Timestamp.length-1)));
	    		var hour = time.getHours();
	    		var minute = time.getMinutes();
	    		if (time.getHours() < 10) hour = "0" + hour;
	    		if (time.getMinutes() < 10) minute = "0" + minute;
	    		chatbox.append("[" + hour + ":" + minute + "]" + data[i].User + " : " + data[i].Message + "\n");
	    	}
	    	chatbox.scrollTop(chatbox[0].scrollHeight);
    	}
    }
    // posli spravu do chatu
    sendChat = function(evt) 
    {
    	var tmp = $("#chatmessage").val();
    	var name = $("a[title='Manage']").text();
    	name = name.substring(6, name.length-1);
    	if (tmp !== "") {
	    	$("#chatmessage").val("");
	    	var myData = {
				"ChatObjectId" : -1,
				"BoardId" : boardID,
				"User" : name,
				"Message" : tmp,
				"Timestamp" : null
					};
			$.ajax({
                type: "POST",
                url: chatSendURL,
                data: JSON.stringify(myData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                cache: false
            }).done(function(data) {
            	updateChat(data);
            }).fail( function(){
                alert('error');
            });
	    	evt.preventDefault();
    	}
    }

    var prevCountChat = 0;
    var prevCountBoard = 0;
	var serviceURL = '/Board/Index';
	var refreshURL = '/Board/Refresh';
	var updateURL = '/Board/Update';
	var deleteURL = '/Board/Delete';
	var chatSendURL = '/Board/ChatAdd';
	var chatRefreshURL = '/Board/ChatRefresh';
	var R = Raphael("canvas", 800, 500);
	var platno = document.getElementById("canvas");
	var paper_position = platno.getBoundingClientRect();
	var bg = R.rect(0, 0, 800, 500).attr("fill", "#fff");
	var st = R.set();
	var counter = 0;
	var link = $(location).attr('href');
	var boardID = parseInt(link.charAt(link.length-1));
	var currentFillColor = "#000000";
	var currentStrokeColor = "#000000";
	$('#colorpicker1').on('change.bfhcolorpicker', function() {
		currentFillColor = $(this).val();
	});
	$('#colorpicker2').on('change.bfhcolorpicker', function() {
		currentStrokeColor = $(this).val();
	});
	bg.drag(addRectClickMove, addRectClick, addEnd);
	$("#rect").toggleClass("btn-info", false);
	$("#rect").toggleClass("btn-success", true);

	$("#sendchat").click(sendChat);

	$("#rect").click(function() {
		$("#rect").toggleClass("btn-info", false);
		$("#elli").toggleClass("btn-info", true);
		$("#line").toggleClass("btn-info", true);
		$("#text").toggleClass("btn-info", true);
		$("#rect").toggleClass("btn-success", true);
		$("#elli").toggleClass("btn-success", false);
		$("#line").toggleClass("btn-success", false);
		$("#text").toggleClass("btn-success", false);
		bg.undrag();
		bg.unclick();
		$(document).unbind('keypress');
		bg.drag(addRectClickMove, addRectClick, addEnd);
	});

	$("#elli").click(function() {
		$("#rect").toggleClass("btn-info", true);
		$("#elli").toggleClass("btn-info", false);
		$("#line").toggleClass("btn-info", true);
		$("#text").toggleClass("btn-info", true);
		$("#rect").toggleClass("btn-success", false);
		$("#elli").toggleClass("btn-success", true);
		$("#line").toggleClass("btn-success", false);
		$("#text").toggleClass("btn-success", false);

		bg.undrag();
		bg.unclick();
		$(document).unbind('keypress');
		bg.drag(addElliClickMove, addElliClick, addEnd);
	});

	$("#line").click(function() {
		$("#rect").toggleClass("btn-info", true);
		$("#elli").toggleClass("btn-info", true);
		$("#line").toggleClass("btn-info", false);
		$("#text").toggleClass("btn-info", true);
		$("#rect").toggleClass("btn-success", false);
		$("#elli").toggleClass("btn-success", false);
		$("#line").toggleClass("btn-success", true);
		$("#text").toggleClass("btn-success", false);
		bg.undrag();
		bg.unclick();
		$(document).unbind('keypress');
		bg.drag(addLineClickMove, addLineClick, addEnd);
	});	

	$("#text").click(function() {
		$("#rect").toggleClass("btn-info", true);
		$("#elli").toggleClass("btn-info", true);
		$("#line").toggleClass("btn-info", true);
		$("#text").toggleClass("btn-info", false);
		$("#rect").toggleClass("btn-success", false);
		$("#elli").toggleClass("btn-success", false);
		$("#line").toggleClass("btn-success", false);
		$("#text").toggleClass("btn-success", true);
		bg.undrag();
		bg.unclick();
		//$(document).unbind('keypress');
		bg.curr = R.text(0,0,"");
		bg.click(function(event) {
			var evt = event;
		    //var IE = document.all?true:false;
		    var x, y;
		   /* if (IE) {
		        x = evt.clientX + document.body.scrollLeft +
		            document.documentElement.scrollLeft;
		        y = evt.clientY + document.body.scrollTop +
		            document.documentElement.scrollTop;
		    }
		    else {*/
		        x = evt.pageX - paper_position.left;
		        y = evt.pageY - paper_position.top;
		    //}
		    if (this.curr.attr("text") === "") 
		    {
		    	this.curr.remove();
		    } else {
		    	st.push(this.curr);
		    	sendAdd(this.curr, "text " + this.curr.attr("text"));
		    }
		    this.curr = R.text(x,y,"");
		    this.curr.attr({
		    	"text-anchor" : "start",
		    	"fill" : currentFillColor,
		    	"stroke" : null
		    });
			this.curr.mousedown(function(e){
	            if (e.which == 2) {
	            	sendDelete(this);
	            	e.preventDefault();
	            }
        	});
		});
		$(document).on('keypress', function(evt){
			if (evt.keyCode === 8) {
				var tmp = bg.curr.attr("text");
				bg.curr.attr({
					"text" : tmp.substring(0, tmp.length-1)
				});
			} else if (evt.keyCode === 13) {
		    	sendAdd(bg.curr, "text " + bg.curr.attr("text"));
		    	bg.curr.remove();
			} else {
				var letter = String.fromCharCode(evt.charCode);
				var tmp = bg.curr.attr("text");
				bg.curr.attr({
					"text" : tmp + letter
				});
			}
			evt.preventDefault();
		});
	});

	/*var chatSource = new EventSource('/Board/ChatMessage');
	chatSource.onmessage = function(e) 
	{
		getChat();
	}
	var boardSource = new EventSource('/Board/BoardMessage');
	boardSource.onmessage = function(e) 
	{
		getBoard();
	}*/

	var interval = setInterval(function() { getBoard() }, 400);
	var intervalChat = setInterval(function() { getChat() }, 400);
};