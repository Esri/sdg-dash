export default function () {
  this.transition(
    this.fromRoute('landing'),
    this.toRoute('sdg-overview'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('landing'),
    this.toRoute('map-overview'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('sdg-overview'),
    this.toRoute('sdg'),
    this.use('fade'),
    this.reverse('fade')
  );
}
