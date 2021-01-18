# Konzept für interaktiven (Papier-)Prototypen
## Erste Schritte
Am Anfang habe ich mir verschiedene Möglichkeiten des ESPs angeschaut, um herrauszufinden was technisch überhaupt
realisierbar ist. Als nächstes habe ich mir überlegt welche Elemente ich gerne in meinem Konzept verwenden wollen würde.
Zum einen wollte ich unbedingt etwas mit LEDs und Sound machen und zum anderen eine spielerische Komponente einfließen lassen.
Außerdem sollte die Anwendung auch einen konkreten Nutzen haben. Da ich ein Fan von Filmen bin, hab ich mir überlegt das Erleben
eines Filmplakates durch den Einsatz eines ESP mit Soundtrack (oder auch eventuell auch Zitaten) zu erweitern. 
Was brauche ich alles dafür: <br /> 
* LEDs und die nötigen Kabel <br /> 
* Lautsprecher und nötige Anbindung an den ESP <br />
* Möglichkeiten für Beispielsweise einen Doppelklick nachforschen <br /> 
* Generell technischer Hintergrund überprüfen <br /> 
## Konkretisierung der Idee
Zur Konkretisierung der Idee habe ich die 5W1H-Fragen Methode verwendet:
### What
Interaktive Filmplakate gestalten und das dessen Erlebnis zu erweitern 
### Where
Überall wo Filmplakte aufhängt werden können (Kinos, Bahnhöfe etc.)
### Why
Zuschauer mehr auf die Filme aufmerksam machen und die Möglichkeit bieten mit dem Plakat zu interagieren.
### Who
Alle die an einem solchen Plakat vorbeilaufen und damit interagieren wollen.
### How
Durch den ESP werden Berührungen des Nutzers erkannt, verarbeitet und schließlich weiter gegeben um ein Audiodatei
abspielen zu lassen. <br />
### 
Es soll also ein Filmplakat durch den Einsatz des ESP mit  Hilfe von Soundtrack oder Zitate erweitert werden um die Nutzer mehr an dem Film zu begeistern oder auch generell das interesse zu wecken. Da die Umsetzung auch recht günstig ist soll das Konzept auch so gestaltet werden, dass es universell mit mehreren Plakaten umsetzbar ist, sonst müsste jedes dieser Plakate individuell hergestellt werden müssten (zB. Im Rahmen in denen die Plakate immer ausgestellt sind) oder um den spielerischen Aspekt einzuarbeiten generell beim Berühren des Rahmen etwas abgespielt wird. <br />
## Konzeptzeichnung eines interaktiven Filmplakat (Low-fid Prototype)
![Bild 1](/IAfilmplakat-lowfid.jpg) <br />
Option 1 ist hier die Interaktion des einfachen Berühren des Rahmens und Option 2 die Berührung eines Buttons. Welche Option am Ende umgesetzt wird, wird sich im Verlauf der Umsetzung entscheiden.
## Einrichten des ESPs
Das Einrichten hat nach einigem Herumprobieren und Treiber Problemen letztendlich funktioniert und der ESP ist bereit programmiert zu werden.
## Realisierung
### Korrekturen der ursprünglichen Idee
Bei der Realisierung des Interaktiven Filmplakates musste ich erstmal überprüfen, was technisch möglich ist ohne etwas dazuzukaufen. Nach einigen Tests mit dem Graphitstift wurden mir klar, dass ich das nicht als leitende Oberfläche benutzen konnte. Zum einen weil diese nach einigen Berührung immer neu aufgetragen werden musste und zum anderen, weil das Filmplakat (ein Überbleibsel aus meine Zeit als Kinomitarbeiter), welches ich verwenden wollte, logischereweise bedruckt ist und auf dieser Oberfläche der Stift wenig bis gar nicht hielt. Also musste etwas neues her. Wie eigentlich die meisten aus dem Kurs habe ich am Ende Alufolie verwendet und das funktioniert perfekt. In dem Low-fid Prototypen hatte ich noch LEDs, einen Rahmen und eigene Lautsprecher angedacht. Diese hätte ich mir allerdings dazukaufen müssen. Also änderte ich meine Idee und verwendete nur das Plakat. Ich wollte auch keinen einfachen Button mehr haben, sondern welche die sich in das Plakat einfügen ohne, dass man sie sofort sieht. Bei der technischen Umsetzung musste ich nach einer Möglichkeit suchen über den ESP Audio wiederzugeben. Ich entschied mich letzlich das mit Processing umzusetzten und den ESP "nur" als Detektor für die Toucheingaben zuverwenden. Es sollte also eine Toucheingabe erkannt und weitergeben werden. Diese wird dann von Processing verarbeitet und dann der passende Sound abgespielt werden. <br />
### Umsetzung
Ich habe mich dazu entschieden zwei Audiofiles zu verwenden. Einmal ein Teil des Soundtracks und einmal ein Zitat aus dem Film. Nun musste ich zwei passende Stellen finden um dort die Alufolie zu verstecken. Ich entschied mich für das Mittlere "S" und ein Teil oberhalb der versteckten Klinge (Siehe Abbildung unten). Zuerst habe ich die entsprechenden stellen ausgeschnitten (1). Dann habe ich Alufoile bündig dahinter geklebt und eine Korkodilklemme daran fest gemacht (2). Von Vorne war dann nur die Alufolie zu sehen (3). Der Vorteil an dem Plakat war, dass es nicht so dick war und daher der unterschied kaum ersichtlich war, wenn man nicht direkt sein Auge ran hält. Dann musste ich nur noch die Kabel an die entsprechenden Ports des ESP anschließen.<br/ >
![Bild 2](/banner.jpg) <br />
Das Programmieren hat im großen und ganzen sehr gut funktioniert. Gerade für die Processing Seite gab es sehr gute Tutorials, die ich nur noch für meine Zwecke anpassen musste 
