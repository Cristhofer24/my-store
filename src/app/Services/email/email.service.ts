import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://api.brevo.com/v3/smtp/email';
  private apiKey = '';

  constructor(private http: HttpClient) {}

  sendEmail({name, email, htmlContent} : {name: string, email: string, htmlContent: string}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'api-key': this.apiKey,
    });

    const body = {
      sender: {
        name: 'My-Store',
        email: 'no-reply@mystore.com',
      },
      to: [
        {
          email,
          name,
        },
      ],
      htmlContent,
      subject: 'My-Store Notificación',
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
