import {Injectable} from '@angular/core';
import {IContact} from './contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    getContacts(): IContact[] {
        return [
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar7.png',
                'name': 'Danilo de Falco',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:20 PM',
                'status': 'online'
            },
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar1.png',
                'name': 'Aparecido Laercio',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:10 PM',
                'status': 'offline'
            },
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar3.png',
                'name': 'Lilian Falco',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:00 PM',
                'status': 'online'
            },
            {
                'avatar': 'https://bootdey.com/img/Content/avatar/avatar5.png',
                'name': 'Livia Falco',
                'messages': ['First Message', 'Previous Message'],
                'time': '10:00 PM',
                'status': 'online'
            }
        ];
    }
}
