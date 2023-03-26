 webiopi().ready(function() {
        		webiopi().setFunction(17,"out");
        		webiopi().setFunction(18,"out");
        		webiopi().setFunction(27,"out");
        		webiopi().setFunction(22,"out");
                        webiopi().setFunction(23,"out");
        		webiopi().setFunction(24,"out");
        		var content, button;
        		content = $("#content");
        		
        		button = webiopi().createGPIOButton(17,"LED");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(18,"BUZZER");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(27,"BULB");
        		content.append(button);
                        
        		button = webiopi().createGPIOButton(24,"FAN-ENABLE");
        		content.append(button);
                        
        		
        		button = webiopi().createGPIOButton(22,"FAN");
        		content.append(button);
                        
                        
        		
        	
        		
        });
