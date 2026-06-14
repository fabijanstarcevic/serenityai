// Simulacija prikupljanja podataka s pametnog sata (Puls i znojenje)
function ocitajSenzoreSata() {
    // Generira nasumičan puls između 60 i 110 bpm
    let puls = Math.floor(Math.random() * (110 - 60 + 1)) + 60;
    console.log(`[Senzor Sata] Trenutni puls korisnika: ${puls} bpm.`);
    return puls;
}

// AI model provjerava podatke i aktivira krizni način rada ako prepozna anomaliju
function pokreniAiAnalizu() {
    setInterval(() => {
        let trenutniPuls = ocitajSenzoreSata();        
        // Ako je puls kritično povišen u mirovanju (npr. iznad 100 bpm)
        if (trenutniPuls > 100) {
            console.log("-------------------------------------------------------");
            console.log("[AI PREDIKCIJA]: Detektiran nagli skok pulsa bez fizičke aktivnosti!");
            console.log("[AI STATUS]: Visok rizik od relapsa uzrokovan tjeskobom.");
            saljiPushObavijest();
            console.log("-------------------------------------------------------");
        }
    }, 4000); // Provjera svakih 4 sekunda
}

function saljiPushObavijest() {
    console.log("[PUSH NOTIFICATION]: 'Dalibore, primjećujemo povišen stres. Tu smo uz tebe. Uzmi 2 minute za zajedničko disanje.'");
}

// Pokretanje simulacije pozadinskog rada sustava
pokreniAiAnalizu();