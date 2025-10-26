import { Appointment } from '../../appointment/entities/appointment.entity';
import { ClientOwner } from '../../client-owner/entities/client-owner.entity';
import { DetaBill } from '../../detabill/entities/detabill.entity';
export declare class Bill {
    Id_bill: number;
    fac_date: string;
    fac_total: number;
    Id_client: number;
    client: ClientOwner;
    appointment: Appointment;
    detabill: DetaBill[];
    createdAt: Date;
}
