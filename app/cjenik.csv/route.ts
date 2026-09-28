import { treatmentDetails } from '../treatment-details';
import { services } from '../treatments';

const csvCell = (value: string) => `"${value.replace(/"/g, '""')}"`;

export function GET() {
  const rows = [
    ['Kategorija', 'Usluga', 'Cijena (EUR)', 'Sidrena cijena (EUR)', 'Datum sidrene cijene', 'Obračunska jedinica', 'Napomena'],
    ...services.flatMap((category) => treatmentDetails[category.slug].flatMap((item) => {
      if (!item.price) return [];
      return [[
        category.title,
        item.title,
        item.price.amount.toFixed(2).replace('.', ','),
        item.price.anchorAmount.toFixed(2).replace('.', ','),
        item.price.anchorDate,
        item.price.basis,
        'Radni prijedlog cjenika. Točnu cijenu potvrđujemo pri rezervaciji.',
      ]];
    })),
  ];

  // UTF-8 BOM and semicolons preserve Croatian text and decimal commas in Excel.
  const csv = '\uFEFF' + rows.map((row) => row.map(csvCell).join(';')).join('\r\n') + '\r\n';
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="calma-beauty-cjenik.csv"',
    },
  });
}
