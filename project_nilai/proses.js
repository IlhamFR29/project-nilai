function calculateGrade() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const tugas = parseFloat(document.getElementById('tugas').value);
    const quiz = parseFloat(document.getElementById('quiz').value);
    const uts = parseFloat(document.getElementById('uts').value);
    const uas = parseFloat(document.getElementById('uas').value);

    // Calculate Nilai Akhir
    const nilaiAkhir = (0.2 * tugas) + (0.2 * quiz) + (0.3 * uts) + (0.3 * uas);

    // Determine Grade
    let grade = '';
    if (nilaiAkhir > 85) {
        grade = 'A';
    } else if (nilaiAkhir > 70) {
        grade = 'B';
    } else if (nilaiAkhir > 60) {
        grade = 'C';
    } else if (nilaiAkhir > 40) {
        grade = 'D';
    } else if (nilaiAkhir > 30) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    // Create new row
    const resultTable = document.getElementById('resultTable');
    const row = resultTable.insertRow();

    // Insert cells
    row.insertCell(0).innerHTML = nim;
    row.insertCell(1).innerHTML = nama;
    row.insertCell(2).innerHTML = tugas;
    row.insertCell(3).innerHTML = quiz;
    row.insertCell(4).innerHTML = uts;
    row.insertCell(5).innerHTML = uas;
    row.insertCell(6).innerHTML = nilaiAkhir.toFixed(2); // Showing with 2 decimal points
    row.insertCell(7).innerHTML = grade;

    // Clear form after submitting
    document.getElementById('gradeForm').reset();
}
