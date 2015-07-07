/* Charts Generation Scripts */

/*Chart 1 Scripts Start(Enforcement Reports for Drugs vs Medical Devices vs Foods)*/
var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["2012","2013","2014","2015"],
			datasets : [
				{
					label: "Drugs",
					fillColor : "rgba(255,51,51,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [415,1273,1335,746]
				},
				{
					label: "Medical Devices",
					fillColor : "rgba(51,255,57,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [1289,2243,3076,768]
				},
				{
					label: "Foods",
					fillColor : "rgba(0,0,204,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [1976,2185,2301,1554]
				}
			]

		}

	//window.onload = function(){
		var ctx = document.getElementById("line").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
			responsive: true
		});
	//}

/*Chart 1 Scripts End*/


/*Chart 2 Scripts Start(Medical Device Usage Report Based on Year 2010-2014)*/
var pieData = [
				{
					value: 30291,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Implantable Lead"
				},
				{
					value: 103462,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Insulin Infusion Pump"
				},
				{
					value: 21270,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Implantable Pulse Generator"
				},
				{
					value: 23147,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Defibrillation Lead"
				},
				{
					value: 23986,
					color: "#4D5360",
					highlight: "#616774",
					label: "Permanent Pacemaker Electrode"
				}

			];

		//	window.onload = function(){
				var ctx1 = document.getElementById("pie").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(pieData);
	//		};
	
/*Chart 2 Scripts End*/

/*Chart 3 Scripts Start(Adverse Events for Drugs Indication from Year 2006-2010)*/
var barChartData = {
		labels : ["2006","2007","2008","2009","2010"],
		datasets : [
			{
				fillColor : "rgba(255,0,0,0.5)",
				strokeColor : "rgba(255,0,0,0.8)",
				highlightFill: "rgba(255,0,0,0.75)",
				highlightStroke: "rgba(255,0,0,1)",
				data : [19620,20717,18477,19156,23197]
			}
			
		]

	}
	//window.onload = function(){
		var ctx3 = document.getElementById("bar1").getContext("2d");
		window.myBar = new Chart(ctx3).Bar(barChartData, {
			responsive : true,
			scaleFontColor: "#666",
			 showScale: true,
		});
	//}

/*Chart 3 Scripts End*/




/*Chart 4 Scripts Start(Adverse Events Reports for Drugs Reported Reaction from 2006 - 2010 )*/

var barChartData = {
		labels : ["2006","2007","2008","2009","2010"],
		datasets : [
			{
				fillColor : "rgba(255,0,0,0.5)",
				strokeColor : "rgba(255,0,0,0.8)",
				highlightFill: "rgba(255,0,0,0.75)",
				highlightStroke: "rgba(255,0,0,1)",
				data : [74707,79965,82914,82449,130043]
			}
			
		]

	}
	//window.onload = function(){
		var ctx4 = document.getElementById("bar2").getContext("2d");
		window.myBar = new Chart(ctx4).Bar(barChartData, {
			responsive : true,
			scaleFontColor: "#666",
			 showScale: true,
		});
	//}
 /*Chart 5 Scripts End*/

