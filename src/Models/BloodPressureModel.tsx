export default class BloodPressure {
    Id?: string;
    SystolicReading: number;
    DiabolicReading: number;
    HeartRate: number;
    ExamDate: Date;
	CreatedDate?: Date;
	UpdatedDate?: Date;

    constructor(
		systolicReading: number,
		diabolicReading: number,
		heartRate: number,
		examDate: Date,
		createdDate?: Date,
		updatedDate?: Date,
		id?: string) {
        this.Id = id;        
		this.SystolicReading = systolicReading;
		this.DiabolicReading = diabolicReading;
		this.HeartRate = heartRate;
		this.ExamDate = examDate;
		this.CreatedDate = createdDate;
		this.UpdatedDate = updatedDate;
    } 
}