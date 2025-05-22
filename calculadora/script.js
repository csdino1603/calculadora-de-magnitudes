document.addEventListener('DOMContentLoaded', function() {
    // Velocidad: v = d/t
    document.getElementById('velocity-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const distance = parseFloat(document.getElementById('distance').value);
        const time = parseFloat(document.getElementById('time-velocity').value);
        
        if (isNaN(distance) || isNaN(time)) {
            alert('Por favor ingresa valores válidos');
            return;
        }
        
        if (time === 0) {
            alert('El tiempo no puede ser cero');
            return;
        }
        
        const velocity = distance / time;
        document.getElementById('velocity-result').innerHTML = `
            <strong>Resultado:</strong> La velocidad es ${velocity.toFixed(2)} m/s
        `;
    });
    
    // Aceleración: a = Δv/t
    document.getElementById('acceleration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const velocityChange = parseFloat(document.getElementById('velocity-change').value);
        const time = parseFloat(document.getElementById('time-acceleration').value);
        
        if (isNaN(velocityChange) || isNaN(time)) {
            alert('Por favor ingresa valores válidos');
            return;
        }
        
        if (time === 0) {
            alert('El tiempo no puede ser cero');
            return;
        }
        
        const acceleration = velocityChange / time;
        document.getElementById('acceleration-result').innerHTML = `
            <strong>Resultado:</strong> La aceleración es ${acceleration.toFixed(2)} m/s²
        `;
    });
    
    // Fuerza: F = m*a
    document.getElementById('force-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const mass = parseFloat(document.getElementById('mass').value);
        const acceleration = parseFloat(document.getElementById('acceleration-force').value);
        
        if (isNaN(mass) || isNaN(acceleration)) {
            alert('Por favor ingresa valores válidos');
            return;
        }
        
        const force = mass * acceleration;
        document.getElementById('force-result').innerHTML = `
            <strong>Resultado:</strong> La fuerza es ${force.toFixed(2)} N (Newtons)
        `;
    });
    
    // Trabajo: W = F*d
    document.getElementById('work-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const force = parseFloat(document.getElementById('force').value);
        const displacement = parseFloat(document.getElementById('displacement').value);
        
        if (isNaN(force) || isNaN(displacement)) {
            alert('Por favor ingresa valores válidos');
            return;
        }
        
        const work = force * displacement;
        document.getElementById('work-result').innerHTML = `
            <strong>Resultado:</strong> El trabajo realizado es ${work.toFixed(2)} J (Joules)
        `;
    });
});