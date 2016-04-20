import Ember from 'ember';

export default Ember.Component.extend({
  target: null,

  display_data: [],

  breadcrumbs : [],

  metadata_field_aliases: {
    goal: "Goal",
    goal_meta_link: "Link to UN Stats Metadata Compilation Report in PDF format",
    goal_meta_link_page: "Page Number to link directly to Indicator within PDF",
    target_id: "Target ID",
    target: "Target Description",
    indicator_id: "Indicator ID",
    indicator: "Indicator Description",
    has_metadata: "Is Metadata from the UN Stats report available",
    definition: "Precise Definition of the Indicator",
    method: "Method of Computation and/or Estimation",
    rationale_interpretation: "Rationale and/or Interpretation",
    domain: "Domain",
    subdomain: "Subdomain",
    target_linkage: "How is the indicator linked to the specific TARGET as worded in the OWG Report?",
    exists_reported: "Does the indicator already exist and is it regularly reported?",
    reliability_coverage_comparability_subnational_compute: "Comment on the reliability, potential coverage, comparability across countries, and the possibility to compute the indicator at sub-national level",
    baseline_value_2015: "Is there already a baseline value for 2015?",
    sources_data_collection: "Sources and Data Collection",
    quantifiable_derivatives: "Quantifiable Derivatives",
    frequency: "Frequency of Data Collection",
    disaggregation: "Data Disaggregation",
    global_regional_monitoring_data: "Entity Responsible for Data for Global and Regional Monitoring",
    comments_limitations: "Comments and Limitations",
    gender_equality_issues: "Identifiable Gender Equality Issues",
    responsible_entities: "Responsible Entities",
    current_data_availability: "Current Data Availability",
    related_targets: "Related Targets",
    related_indicators: "Related Indicators",
    supplementary_information: "Supplementary Information",
    references: "References"
  },

  skip_fields_for_display : [
    'goal', 
    'goal_meta_link', 
    'goal_meta_link_page', 
    'has_metadata',
    'target',
    'target_id',
    'indicator',
    'indicator_id',
  ],

  actions: {
    setDashboardTarget(target) {
      this.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
      this.set('target', target);
      this.$('#myModal').modal('hide');
    },

    setToSdgIndex() {
      this.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
      this.set('target', {id: 'SDG Index'});
      this.$('#myModal').modal('hide');
    },

    loadIndicatorSheet(target) {
      // this.set('breadcrumbs', [ { title: target.id } ]);
      
      let svc = this.get('session');
      svc.getIndicatorsForTarget(target.id, true)
        .then( (response) => {
          console.log(response);
          
          this.$('.targ-sep, .targ-display').fadeIn();

          svc.set('target_display', target.id);
          
          svc.set('current_indicators', response.data);
          
          this.$('.target-sheet').fadeOut().promise().done(
            function () {
              this.$('.target-indicator-sheet').fadeIn();
            }.bind(this)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadMetadata(indicator) {
      let svc = this.get('session');
      svc.getMetadata(indicator.indicator_id)
        .then(function(response) {
          console.log(response);
          
          this.$('.ind-sep, .ind-display').fadeIn();

          svc.set('indicator_display', indicator.indicator_id);
          svc.set('indicator_display_text', indicator.indicator);
          let indicator_direct_link = `${indicator.goal_meta_link}#page=${indicator.goal_meta_link_page}`;
          svc.set('indicator_direct_link', indicator_direct_link);

          this.showMetadata(response.data[0]);

        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },

    backToTargets() {
      this.$('.target-indicator-sheet').fadeOut().promise().done(
        function () {
          this.$('.targ-sep, .targ-display').fadeOut();
          this.$('.target-sheet').fadeIn();
      }.bind(this));
    },

    backToIndicators() {
      this.$('.metadata-sheet').fadeOut().promise().done(
        function () {
          this.$('.ind-sep, .ind-display').fadeOut();
          this.$('.target-indicator-sheet').fadeIn();
      }.bind(this));
    }
  },

  didInsertElement() {
    this.set('breadcrumbs', []);
    this.set('display_data', []);

    this.$('#myModal').on('hide.bs.modal', function () {
      // reset targets & indicators displays
      this.$('.ind-sep, .ind-display, .targ-sep, .targ-display').hide();
      this.$('.target-indicator-sheet, .metadata-sheet').hide();
      this.$('.target-sheet').show();
    }.bind(this));
  },

  showMetadata(metadata) {
    
    const svc = this.get('session');
    
    let metadata_display = [];
    svc.set('metadata_display', metadata_display);

    const field_aliases = this.get('metadata_field_aliases');
    const skip_fields = this.get('skip_fields_for_display');
    let header = '';
    let text = '';
    for (let field in metadata) {
      if ( (skip_fields.indexOf(field) !== -1) || (metadata[field] === '') ) {
        continue;
      }
      header = field_aliases[field];
      if (field === 'responsible_entities') {
        text = metadata[field].join(', ');
      } else {
        text = new Ember.Handlebars.SafeString( metadata[field].replace(/\\n/g,'<br><br>').replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;') );
      }

      const title = metadata['indicator'];
      metadata_display.push({
        title: title,
        header: header,
        text: text
      });
    }
    
    svc.set('metadata_display', metadata_display);

    this.$('.target-indicator-sheet').fadeOut().promise().done(
        function () {
          this.$('.metadata-sheet').fadeIn();
      }.bind(this));
  },

  modalDidHide(e) {
    const sel = this.get('target');
    this.get('session').set('selected_target', sel.id);
    this.get('session').set('selected_target_description', sel.title);
    this.sendAction('changeTarget', sel);
  }
});
