import 'jquery';
import { data } from 'data';
import { templates } from 'templates';
import toastr from 'toastr';
import jqueryui from 'jquery-ui';
import moment from 'moment';
import timepicker from 'timepicker';

let eventsController = (function () {
  function all(context) {
    let events;

    data.eventsGet()
      .then(function (resEvents) {
       events = resEvents;
        return templates.get('events');
      })
      .then(function (template) {
        context.$element().html(template(events));
      })
      .catch(function (err) {
        toastr.error(JSON.stringify(err));
      });
  }

  function add(context) {
    templates.get('event-add')
      .then(function (template) {
        context.$element().html(template());
        $('#tb-event-date').datepicker();
        $('#tb-event-time').timepicker();

        $('#btn-event-add').on('click', function () {
          let event = {
            title: $('#tb-event-title').val(),
            category: $('#tb-event-category').val(),
            description: $('#tb-event-description').val(),
            date: $('#tb-event-date').val() + ' ' + $('#tb-event-time').val(),
            user: $('#tb-event-users').val()
          };

          data.eventsAdd(event)
            .then(function (event) {
              toastr.success(`Event "${event.title}" created!`);
              context.redirect(`#/events?=${event.category}`);
            });
        });

        return data.categoriesGet();
      }).then(function (categories) {
        $('#tb-event-category').autocomplete({
          source: categories
        });
        return data.usersGet();
      }).then(function (users) {
        users = users.map(function (user) {
          return user.username;
        });
        $('#tb-event-users').autocomplete({
          source: users
        });

      });
  }

  return {
    all: all,
    add: add
  };

})();

export { eventsController };