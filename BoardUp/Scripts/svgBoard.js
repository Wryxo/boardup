window.onload = function() {

	moveStartRect = function (x,y,e) {
		if (e.which == 1) {
			window.clearInterval(interval);
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

	moveStartCircle = function (x,y,e) {
		if (e.which == 1) {
			window.clearInterval(interval);
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

	moveStartLine = function (x,y,e) {
		if (e.which == 1) {
		window.clearInterval(interval);
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

	resizeStartRect = function (x,y,e) {
		if (e.which == 1) {
		window.clearInterval(interval);
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

	resizeStartCircle = function (x,y,e) {
		if (e.which == 1) {
		window.clearInterval(interval);
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


	resizeStartLineStart = function (x,y,e) {
		if (e.which == 1) {
		window.clearInterval(interval);
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
		if (e.which == 1) {
		window.clearInterval(interval);
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
        });
        c.drag(moveMoveRect, moveStartRect, updateEndMove);
		s.drag(resizeMoveRect, resizeStartRect, updateEndResize);
		s.curr = c;
		st.push(s);
		return c;
	};

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
        });
		s.drag(resizeMoveEllipse, resizeStartCircle, updateEndResize);
		s.curr = c;
		st.push(s);
		return c;
	};

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
		var s = R.rect(coords.x2, coords.y2-5, 10, 10).attr({
		    fill: "#0ff",
		    stroke: "none",
		    cursor: "move",
		});
		var d = R.rect(coords.x, coords.y-5, 10, 10).attr({
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
        });
		s.drag(resizeMoveLineEnd, resizeStartLineEnd, updateEndResize);
		d.drag(resizeMoveLineStart, resizeStartLineStart, updateEndResize);
		s.curr = c;
		d.curr = c;
		st.push(s);
		st.push(d);
		return c;
	};

	addRectClick = function(dx, dy) {
		window.clearInterval(interval);
		var c = R.rect(dx-paper_position.left, dy-paper_position.top, 0, 0).attr({
		    fill: "#000",
		    stroke: "#f00"
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

	addElliClick = function(dx, dy) {
		window.clearInterval(interval);
		var c = R.ellipse(dx-paper_position.left, dy-paper_position.top, 0, 0).attr({
		    fill: "#000",
		    stroke: "#f00"
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
	}

	function sendAdd(curr, type) {
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
                url: serviceURL,
                async: false,
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

	addEnd = function() 
	{
		sendAdd(this.curr, this.curr.data("type"));
		interval = window.setInterval(function(){getBoard()}, 200);
	}

	updateEndMove = function()
	{
		sendUpdate(this, this.data("type"));
		interval = window.setInterval(function(){getBoard()}, 200);
	}

	updateEndResize = function()
	{
		sendUpdate(this.curr, this.curr.data("type"));
		interval = window.setInterval(function(){getBoard()}, 200);
	}	

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
                async: false,
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
                async: true,
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
                async: false,
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

    function applyChanges(data) {
    	st.remove();
    	st = R.set();
    	for (var i = 0; i < data.length; i++)
    	{
    		var tmp = data[i];
    		switch(tmp.type)
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
			}
    	}
    }
	var serviceURL = '/Board/Index';
	var refreshURL = '/Board/Refresh';
	var updateURL = '/Board/Update';
	var deleteURL = '/Board/Delete';
	var R = Raphael("canvas", 500, 500);
	var platno = document.getElementById("canvas");
	var paper_position = platno.getBoundingClientRect();
	var bg = R.rect(0, 0, 500, 500).attr("fill", "#fff");
	bg.drag(addRectClickMove, addRectClick, addEnd);
	$("#rect").css({
			"background-color": "#ff0000"
		});

	$("#rect").click(function() {
		$(this).css({
			"background-color": "#FF0000"
		});
		$("#elli").css({
			"background-color": "#d3dce0"
		});
		bg.undrag();
		bg.drag(addRectClickMove, addRectClick, addEnd);
	});

	$("#elli").click(function() {
		$(this).css({
			"background-color": "#FF0000"
		});
		$("#rect").css({
			"background-color": "#d3dce0"
		});
		bg.undrag();
		bg.drag(addElliClickMove, addElliClick, addEnd);
	});

	var st = R.set();
	var counter = 0;
	var link = $(location).attr('href');
	var boardID = parseInt(link.charAt(link.length-1));
	//getBoard();
	console.log(boardID);
	var interval = window.setInterval(function(){getBoard()}, 200);
};