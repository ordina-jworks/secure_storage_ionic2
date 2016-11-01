import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DatabaseConnectionHolder } from './database-connection.holder'
import { MedicalConsultation, Patient } from '../model';
import { DbQueries } from './db-queries';

@Injectable()
export class PatientService {

    private _databaseConnectionHolder: DatabaseConnectionHolder;

    constructor(databaseConnectionHolder: DatabaseConnectionHolder) {
        this._databaseConnectionHolder = databaseConnectionHolder;
    }

    public getAllPatients(): Observable<Patient> {
        /**
         * Write the getAllPatients logic.
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. Execute the FIND_ALL_PATIENT_QUERY. Do this by using the db.executeSql function.
         */
        return Observable.empty();
    }

    public getMedicalConsultationsByPatient(patient: Patient): Observable<MedicalConsultation> {
        /**
         * Write the getAllPatients logic.
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. Execute the FIND_MEDICAL_CONSULTATIONS_BY_PATIENT_ID_QUERY. Do this by using the db.executeSql function. Don't forget to foresee values for the ?-placeholders!!
         */
        return Observable.empty();
    }

    private mapRecordToPatient(record: any): Patient {
        let patient: Patient = new Patient(record.firstName, record.lastName);
        patient.patientId = record.patientId;

        return patient
    }

    private mapRecordToMedicalConsultation(record: any): MedicalConsultation {
        let medicalConsultation: MedicalConsultation = new MedicalConsultation(record.description, new Date(record.date));
        medicalConsultation.medicalConsultationId = record.medicalConsultationId;

        return medicalConsultation;
    }
}