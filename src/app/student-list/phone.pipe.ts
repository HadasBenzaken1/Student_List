import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    // בדיקה אם הערך הוא מחרוזת וכולל 10 תווים
    if (typeof value === 'string' && value.length === 10) {
      // שליפת חלקי המחרוזת
      const num1 = value.substring(0, 3);
      const num2 = value.substring(3);   
      // החזרת התוצאה המבוקשת
      return `${num1}-${num2}`;
    }

    // ערך ברירת המחדל או אזהרה אם הערך אינו תקין
    return value || 'Invalid Phone Number';
  }
}
