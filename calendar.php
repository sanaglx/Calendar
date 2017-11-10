<!DOCTYPE html>
<html>
<head>
	<title>PHP Calendar month</title>
	<meta charset="utf-8">
   
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Бухгалтерское обслуживание - ООО Монополист</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content="Бухгалтерское обслуживание" />
            <meta name="description" content="Бухгалтерское обслуживание" />

            <link href="http://u0407398.isp.regruhosting.ru" rel="canonical" />
            <!--<link href="https://fonts.googleapis.com/css?family=Alice|Lora:400,700|Noto+Serif:400,700|PT+Serif:400,700|Tinos:400,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">-->
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet" />
            <link rel="stylesheet" href="/templates/default/fonts.css" type="text/css" charset="utf-8" />

            <link rel="stylesheet" type="text/css" href="/lib/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="/lib/bootstrap/css/bootstrap-theme.min.css" />
            <link rel="stylesheet" href="/templates/default/css/jquery.mCustomScrollbar.css" />

            <link rel="stylesheet" href="https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?rd5re8" />
            <link  href="/templates/default/css/jquery.fancybox.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/templates/default/css/icon.css" type="text/css" charset="utf-8" />
            <link rel="stylesheet" href="/templates/default/css/style.css" />
            <link rel="stylesheet" href="/templates/default/css/styles_ave.css" />
            <link rel="stylesheet" href="/templates/default/css/media.css" />
            <link rel="stylesheet" type="text/css" href="/templates/default/js/bxslider/jquery.bxslider.css" />

            <!--slider range-->
            <!--<link href="dist/css/powerange.css" rel="stylesheet" type="text/css"/>-->
            <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
            <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
            <!--[if lt IE 9]>
               <script src="assets/js/ie-emulation-modes-warning.js"></script>
              <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
              <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
            <![endif]-->
            <script type="text/javascript" src="/lib/scripts/jquery-1.11.1.min.js"></script>
            <script type="text/javascript" src="/templates/default/js/bxslider/jquery.bxslider.js"></script>     
        
        
	<style type="text/css">

	</style>
</head>
<body>

<?php
function draw_calendar($month, $year, $action = 'none') {

	$calendar = '<table cellpadding="0" cellspacing="0" class="b-calendar__tb">';
	
	// вывод дней недели
	$headings = array('Пн','Вт','Ср','Чт','Пт','Сб','Вс');
	$calendar.= '<tr class="b-calendar__row">';
	for($head_day = 0; $head_day <= 6; $head_day++) {
		$calendar.= '<th class="b-calendar__head';
		// выделяем выходные дни
		if ($head_day != 0) {
			if (($head_day % 5 == 0) || ($head_day % 6 == 0)) {
				$calendar .= ' b-calendar__weekend';
			}
		}
		$calendar .= '">';
		$calendar.= '<div class="b-calendar__number">'.$headings[$head_day].'</div>';
		$calendar.= '</th>';
	}
	$calendar.= '</tr>';
	// выставляем начало недели на понедельник
	$running_day = date('w',mktime(0,0,0,$month,1,$year));
	$running_day = $running_day - 1;
	if ($running_day == -1) {
		$running_day = 6;
	}
	
	$days_in_month = date('t',mktime(0,0,0,$month,1,$year));
	$day_counter = 0;
	$days_in_this_week = 1;
	$dates_array = array();
	
	// первая строка календаря
	$calendar.= '<tr class="b-calendar__row">';
	
	// вывод пустых ячеек
	for ($x = 0; $x < $running_day; $x++) {
		$calendar.= '<td class="b-calendar__np"></td>';
		$days_in_this_week++;
	}
	
	// дошли до чисел, будем их писать в первую строку
	for($list_day = 1; $list_day <= $days_in_month; $list_day++) {
		$calendar.= '<td data-id="'.$list_day.'" class="b-calendar__day m'.$month.' '  ;
		// выделяем выходные дни
		if ($running_day != 0) {
			if (($running_day % 5 == 0) || ($running_day % 6 == 0)) {
				$calendar .= ' b-calendar__weekend';
			} 
		}
		$calendar .= '">';
		// пишем номер в ячейку
		$calendar.= '<div class="b-calendar__number">'.$list_day.'</div>';
		$calendar.= '</td>';
		// дошли до последнего дня недели 
		if ($running_day == 6) { 
			// закрываем строку
			$calendar.= '</tr>';
			// если день не последний в месяце, начинаем следующую строку
			if (($day_counter + 1) != $days_in_month) {
				$calendar.= '<tr class="b-calendar__row">';
			}
			// сбрасываем счетчики 
			$running_day = -1;
			$days_in_this_week = 0;
		}
		$days_in_this_week++; 
		$running_day++; 
		$day_counter++;
	}
	// выводим пустые ячейки в конце последней недели
	if ($days_in_this_week < 8) {
		for($x = 1; $x <= (8 - $days_in_this_week); $x++) {
			$calendar.= '<td class="b-calendar__np"> </td>';
		}
	}
	$calendar.= '</tr>';
	$calendar.= '</table>';
	return $calendar;
}

?>

<div id="kdey" data-kdey="23" class="b-calendar b-calendar--along">
        <?
        $months = Array(0 => 'Январь', 1 => 'Февраль', 2 => 'Март', 3 => 'Апрель', 4 => 'Май',	5 => 'Июнь', 6 => 'Июль', 7 => 'Август', 8 => 'Сентябрь', 9 => 'Октябрь', 10 => 'Ноябрь',11 => 'Декабрь');
                $yr = $yr1 =date("Y");
                //echo $yr;
                $dt= date("m");
                $dt=12;
                $dt1=$dt+1;
                if($dt>11){$dt1=1;$yr1=$yr+1;}
                //echo "ddd-". $dt."/".$dt1;
        ?>
        <div class="blok__calendar">
        <div class="b-calendar__title">
            <span data-month="<? echo $dt; ?>" class="b-calendar__month"><? echo $months[$dt-1]?></span>
            / <span data-year="<? echo $yr; ?>" class="b-calendar__year"><? echo $yr; ?></span>
        </div>
        
           <? echo draw_calendar($dt,$yr); ?> 
        </div>
        
        <div class="blok__calendar">
        <div class="b-calendar__title">
            <span data-month="<? echo $dt1; ?>" class="b-calendar__month"><? echo $months[$dt1-1]?></span>
            / <span data-yearx="<? echo $yr1; ?>" class="b-calendar__yearx"><? echo $yr1; ?></span>
        </div>
        
            <? echo draw_calendar($dt1,$yr1); ?>
        </div>

        <div class="blok__calendar_text s4">
            <p>Выберите дату подачи документов в ФНС, наш калькулятор рассчитает точную дату получения готовых документов</p>
            <div class="s4h4a bk-red">
                <div class="s4h4 ">Дата подачи документов:</div>
                <p id="v-red">08.10.2017 Среда</p>
            </div>

       <!--     <div class="s4h4a bk-jon">
                <div class="s4h4">Дата регистрации предприятия:</div>
                <p id="v-yellow">10.10.2017 Пятница</p>
            </div>
-->
            <div class="s4h4a bk-green">
                <div class="s4h4">Дата получения документов:</div>
                <p id="v-green">13.10.2017 Понедельник</p>
            </div>
        </div>
</div>


<script type="text/javascript" src="/lib/bootstrap/js/bootstrap.min.js"></script>
<script src="/templates/default/js/jquery.mCustomScrollbar.js"></script>
<script type="text/javascript" src="/templates/default/js/jquery.easing.min.js"></script>
<script src="/templates/default/js/jquery.lavalamp.js"></script>
<script src="/templates/default/js/jquery.fancybox.min.js"></script>
<script type="text/javascript" src="/templates/default/js/main.js"></script>
<script type="text/javascript">
        var aveabspath = '/';
</script>


</body>
</html>
