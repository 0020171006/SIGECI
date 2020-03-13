

    // datos para los graficos
    $(document).ready(function () {
        var TotalProyectos = 45;// parseInt($('#TotalProyectos').val());

        //Grafica Total de proyectos
        var FactibFinan = 10;// parseInt($('#FactibFinan').val());
        var DictTecnico = 22;// parseInt($('#DictTecnico').val());
        var Autorizacion = 2;//parseInt($('#Autorizacion').val());
        var RegSolInic = 8;//parseInt($('#RegSolInic').val()); //e1 iniciativa
        var RegAntepry = 7;//parseInt($('#RegAntepry').val())  //e3 registro anteproyecto
        var RegAvances = 5;//parseInt($('#RegAvances').val()); //etapa 6
        var CierrePry = 15;//parseInt($('#CierrePry').val());    //etapa 7 /**************************************************/

        //Grafica Tipos de proyectos
        var pryEstrategicos = 13;// parseInt($('#pryEstrategicos').val());
        var pryTacticos = 20;// parseInt($('#pryTacticos').val());
        var pryOperativo = 12;// parseInt($('#pryOperativo').val());

        //Grafica Total de proyectos
        var dataPie = [
            {
                value: RegSolInic,
                color: "#5cb85c",
                highlight: "#b8e0b8",
                label: "Ingenieria Sistemas"
            },
            {
                value: FactibFinan,
                color: "#bc45da",
                highlight: "#9539ac",
                label: "Ingenieria Informatica"
            },
            {
                value: RegAntepry,
                color: "#2645c0",
                highlight: "#1e6094",
                label: "Ingenieria Mecatronica"
            },
            {
                value: DictTecnico,
                color: "#5bc0de",
                highlight: "#aadeee",
                label: "Ingenieria Mecatronica"
            },

           {
               value: Autorizacion,
               color: "#f0ad4e",
               highlight: "#f7d3a1",
               label: "Ingenieria Industrial"
           },
           {
               value: RegAvances,
               color: "#FF6961",
               highlight: "#ffc6c3",
               label: "Ingenieria Alimentarias"
           },
            {
                value: CierrePry,
                color: "#eadfb7",
                highlight: "#f3edd7",
                label: "Gestion Empresarial"
            },

        ];

        //var options = {
        //    // String - Template string for single tooltips
        //    tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
        //    // String - Template string for multiple tooltips
        //    multiTooltipTemplate: "<%= value + ' %' %>",
        //};

        var ctx = $("#chart-pie").get(0).getContext("2d");
        var chartPie = new Chart(ctx).Pie(dataPie);
        $("#chart-pie-legend").append(chartPie.generateLegend());

        //Grafica Proyectos finalizados
        var PryEnProceso = 15;// parseInt($('#PryEnProceso').val()); ////etapa6 + etapa7.clnactivo = s
        var PryFinalizados = 22;// parseInt($('#PryFinalizados').val()); //etapa7.clnactivo = n
        var TotalPryAutoriz = 13;// PryEnProceso + PryFinalizados; //Verificar si siempre es el mismo que      //Grafico pie Proyectos Autorizados - no autorizados - en proceso de autorización  var PryAut *****

        PryEnProceso= (PryEnProceso * 100)/ TotalPryAutoriz;
        PryFinalizados = (PryFinalizados *100)/TotalPryAutoriz;

        var dataPie2 = [
 /*       {
            value: 3/4,
            color:"#5cb85c",
            highlight: "#b8e0b8",
            label: "Aceptados"
        },
        {
            value: 1/4,
            color: "#d9534f",
            highlight: "#edadab",
            label: "No Aceptados"
        },                  */
        {
            value: PryEnProceso.toFixed(2),
            color: "#5bc0de",
            highlight: "#aadeee",
            label: "En proceso"
        },
  /*        {
            value: 150,
            color: "#4d5360",
            highlight: "#616774",
            label: "En tiempo"
        },                          */
        {
            value: PryFinalizados.toFixed(2),
            color: "#f0ad4e",
            highlight: "#f7d3a1",
            label: "Finalizados"
        },

        ];
        var options = {
            // String - Template string for single tooltips
            tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
            // String - Template string for multiple tooltips
            multiTooltipTemplate: "<%= value + ' %' %>",
        };
        var ctx = $("#chart-pie2").get(0).getContext("2d");
        var chartPie2 = new Chart(ctx).Pie(dataPie2, options);
        $("#chart-pie-legend2").append(chartPie2.generateLegend());


        //
        //Grafico pie Proyectos Autorizados - no autorizados - en proceso de autorización
        var PryAut = 5;// parseInt($('#PryAut').val());
        var PryNoAprob = 7;// parseInt($('#PryNoAprob').val());  //Total de proyectos NO aporbados en cualquier etapa
        var PryProce = 33;// parseInt($('#PryProce').val());     //Total de proyectos en cualquier etapa en llenado o en proceso de aprobacion- autorizacion
        var dataPie3 = [
/*       {
           value: 3/4,
           color:"#5cb85c",
           highlight: "#b8e0b8",
           label: "Aceptados"
       },*/
       {
           value: PryAut,
           color: "#5cb85c",
           highlight: "#b8e0b8",
           label: "Autorizados"
       },
       {
           value: PryNoAprob,
           color: "#4d5360",
           highlight: "#616774",
           label: "No autorizados"
       },
 /*        {
           value: 150,
           color: "#4d5360",
           highlight: "#616774",
           label: "En tiempo"
       },                          */
       {
           value: PryProce,
           color: "#f0ad4e",
           highlight: "#f7d3a1",
           label: "En proceso de autorización"
       },
        ];
        var ctx = $("#chart-pie3").get(0).getContext("2d");
        var chartPie3 = new Chart(ctx).Pie(dataPie3);
        $("#chart-pie-legend3").append(chartPie3.generateLegend());

        //
        //Grafico tipo dona Tipos de proyectos
        var dataDoughnut = [
        {
            value: pryEstrategicos,
            color: "#5cb85c",
            highlight: "#b8e0b8",
            label: "Aprovados"
        },
        {
            value: pryTacticos,
            color: "#5bc0de",
            highlight: "#aadeee",
            label: "No Acreditados"
        },
        {
            value: pryOperativo,
            color: "#f0ad4e",
            highlight: "#f7d3a1",
            label: "Recursivos"
        },

        ];

        var ctx = $("#chart-doughnut").get(0).getContext("2d");
        var chartDoughnut = new Chart(ctx).Doughnut(dataDoughnut);
        $("#chart-doughnut-legend").append(chartDoughnut.generateLegend());

        //var chartDoughnut = new Chart(ctx, {
        //    type: 'doughnut',
        //    data: dataDoughnut,
        //    //options: {
        //    //    legend: {
        //    //        position: 'left',
        //    //    }
        //    //}
        //});
        //   $("#chart-doughnut-legend").append(chartDoughnut.generateLegend());
        // debugger;


        //grafico proyecto por fase y costos
        var costoRegIniciat = 9025;// parseFloat($('#costoRegIniciat').val()).toFixed(2);    //Etapa 1
        
        var costoTotalPryAutIni = 3515;// parseFloat($('#costoTotalPryAutIni').val()).toFixed(2);    //Etapa 2

        var costoComplAntPry = 7584;// parseFloat($('#costoComplAntPry').val()).toFixed(2);  //Etapa 3, complementacion de anteproyecto

        var costoTotalPryDicT = 3384;//parseFloat($('#costoTotalPryDicT').val()).toFixed(2);    //Etapa 4
        var costoTotalPryAutor = 2501.25;//parseFloat($('#costoTotalPryAutor').val()).toFixed(2);  //Etapa 5

        var costoTotalRegAvanc = 4040.59;// parseFloat($('#costoTotalRegAvanc').val()).toFixed(2);  //Etapa 6
        var costoTotalLibera = 1521;// parseFloat($('#costoTotalLibera').val()).toFixed(2);  //Etapa 7

        var total = 11524.98;// parseFloat($('#costoRegIniciat').val()) + parseFloat($('#costoTotalPryAutIni').val()) + parseFloat($('#costoComplAntPry').val()) + parseFloat($('#costoTotalPryDicT').val()) + parseFloat($('#costoTotalPryAutor').val()) + parseFloat($('#costoTotalRegAvanc').val()) + parseFloat($('#costoTotalLibera').val());
        total = total.toFixed(2);
        //debugger;
        //TotalProyectos=0;

        var arrlabelsFaseCosto;
        var arrDatasFaseCosto;
        if(TotalProyectos == 0){
            arrlabelsFaseCosto = [];
            arrDatasFaseCosto = [];
            $('#legendFaseCosto').hide();
        }
        else {
            //arrlabelsFaseCosto = ["Registro de iniciativa", "Autorizacion iniciativa", "Anteproyecto", "En dictamen", "Autorización proyecto", "En desarrollo (avances)", "Cierre de proyecto", "Total"];
            arrlabelsFaseCosto = ["I.S.", "I.I.", "I.G", "I.M", "I.A", "I.C.", "I.AD", "Total"];
            arrDatasFaseCosto = [costoRegIniciat, costoTotalPryAutIni, costoComplAntPry, costoTotalPryDicT, costoTotalPryAutor, costoTotalRegAvanc, costoTotalLibera, total];
        }


        var dataBar = {
            labels: arrlabelsFaseCosto,
            datasets: [
                {
                    fillColor: "#5bc0de",
                    strokeColor: "#5bc0de",
                    highlightFill: "#aadeee",
                    highlightStroke: "#aadeee",
                    data: arrDatasFaseCosto
                }
            ]
        };
        /*  testing*/
        var options = {
            tooltipTemplate: function(label) {
                return  '$' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            multiTooltipTemplate: function(label) {
                return  '$' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

        };

        ////Get the context of the canvas element we want to select
        //var ctx = document.getElementById("myChart").getContext("2d");
        ///*************************************************************************/
        //var myLineChart = new Chart(ctx).Line(data, options);
        /**/
        var ctx = $("#chart-bar").get(0).getContext("2d");
        var chartBar = new Chart(ctx).Bar(dataBar, options);
        //$("#chart-bar-legend").append(chartBar.generateLegend());


        //Proyectos por entidad                                 VARIABLE DEPENDENCIAS - NUMEROS
        //////////  El valor se carga en el index
        //////var arrProyPorEnt = JSON.parse('@Html.Raw(ViewBag.ClavesDep)');
        //////var arrNumProyProEnt = JSON.parse('@Html.Raw(ViewBag.NumPryPorClaveDep)');
            
        var dataBarEnt = {
            //labels: ["SAF", "SA", "SDI", "OAG", "Rectoría"],
            labels: arrProyPorEnt,
            datasets: [
                {
                    //label: "Ingreso UV",
                    fillColor: "#5cb85c",
                    strokeColor: "#5cb85c",
                    highlightFill: "#b8e0b8",
                    highlightStroke: "#b8e0b8",
                    data: arrNumProyPorEnt
                },

            ]
        }
        var ctx = $("#chart-barEnt").get(0).getContext("2d");
        var chartBar = new Chart(ctx).Bar(dataBarEnt);
        //$("#chart-bar-legend").append(chartBar.generateLegend());


    }); //docuemnt ready
