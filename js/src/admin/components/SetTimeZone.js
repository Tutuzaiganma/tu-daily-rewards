import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';

function getTimezoneOffset(timeZone) {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'longOffset',
    });

    const parts = formatter.formatToParts(now);
    const timezoneName = parts.find((part) => part.type === 'timeZoneName');

    if (timezoneName && timezoneName.value) {
      const match = timezoneName.value.match(/GMT([+-]\d{2}):(\d{2})/);

      if (match) {
        const hours = parseInt(match[1], 10);
        const minutes = match[2];

        if (minutes === '00') {
          return `UTC${hours >= 0 ? '+' : ''}${hours}`;
        }

        return `UTC${hours >= 0 ? '+' : ''}${hours}:${minutes}`;
      }
    }

    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const targetDate = new Date(now.toLocaleString('en-US', { timeZone }));
    const offsetMinutes = (targetDate - utcDate) / 60000;
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetMins = Math.abs(offsetMinutes) % 60;
    const sign = offsetMinutes >= 0 ? '+' : '-';

    if (offsetMins === 0) {
      return `UTC${sign}${offsetHours}`;
    }

    return `UTC${sign}${offsetHours}:${offsetMins.toString().padStart(2, '0')}`;
  } catch (error) {
    return 'UTC';
  }
}

class SearchableTimezoneSelect extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.timezones = [];
    this.filteredTimezones = [];
    this.searchQuery = '';
    this.isOpen = false;
    this.selectedIndex = -1;

    this.loadTimezones();
  }

  loadTimezones() {
    try {
      const supportedTimezones = Intl.supportedValuesOf('timeZone');

      this.timezones = supportedTimezones.map((timezone) => {
        const offset = getTimezoneOffset(timezone);

        return {
          value: timezone,
          label: `${timezone} (${offset})`,
        };
      });

      this.filteredTimezones = this.timezones;
    } catch (error) {
      console.error('[daily-rewards] Failed to load timezone list:', error);
    }
  }

  filterTimezones(query) {
    this.searchQuery = query;
    const lowerQuery = query.toLowerCase().trim();

    if (!lowerQuery) {
      this.filteredTimezones = this.timezones;
      this.selectedIndex = -1;
      return;
    }

    this.filteredTimezones = this.timezones.filter(
      (timezone) =>
        timezone.label.toLowerCase().includes(lowerQuery) ||
        timezone.value.toLowerCase().includes(lowerQuery)
    );
    this.selectedIndex = -1;
  }

  selectTimezone(timezone) {
    this.attrs.onSelect(timezone.value);
    this.isOpen = false;
    this.searchQuery = '';
    this.filteredTimezones = this.timezones;
    this.selectedIndex = -1;
  }

  handleKeydown(event) {
    if (!this.isOpen) {
      if (event.key === 'Enter' || event.key === 'ArrowDown') {
        this.isOpen = true;
        event.preventDefault();
      }

      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredTimezones.length - 1);
        this.scrollToSelected();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.scrollToSelected();
        break;
      case 'Enter':
        event.preventDefault();

        if (this.selectedIndex >= 0 && this.filteredTimezones[this.selectedIndex]) {
          this.selectTimezone(this.filteredTimezones[this.selectedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.isOpen = false;
        this.searchQuery = '';
        this.filteredTimezones = this.timezones;
        this.selectedIndex = -1;
        break;
    }
  }

  scrollToSelected() {
    this.$('.SearchableSelect-option.selected').each(function () {
      this.scrollIntoView({ block: 'nearest' });
    });
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.clickHandler = (event) => {
      if (!this.element.contains(event.target)) {
        this.isOpen = false;
        this.searchQuery = '';
        this.filteredTimezones = this.timezones;
        this.selectedIndex = -1;
        m.redraw();
      }
    };

    document.addEventListener('click', this.clickHandler);
  }

  onremove(vnode) {
    super.onremove(vnode);
    document.removeEventListener('click', this.clickHandler);
  }

  view() {
    const currentValue = this.attrs.value || '';
    const currentTimezone = this.timezones.find((timezone) => timezone.value === currentValue);
    const displayValue = this.isOpen
      ? this.searchQuery
      : currentTimezone
      ? currentTimezone.label
      : '';

    return m(
      '.SearchableSelect',
      {
        className: this.isOpen ? 'is-open' : '',
      },
      [
        m('input.SearchableSelect-input.FormControl', {
          type: 'text',
          value: displayValue,
          placeholder: app.translator.trans('tu-daily-rewards.admin.fields.timezone_placeholder'),
          oninput: (event) => {
            this.filterTimezones(event.target.value);
            if (!this.isOpen) this.isOpen = true;
            m.redraw();
          },
          onfocus: () => {
            this.isOpen = true;
            m.redraw();
          },
          onkeydown: (event) => {
            this.handleKeydown(event);
            m.redraw();
          },
        }),
        m(
          '.SearchableSelect-icon',
          {
            onclick: (event) => {
              event.stopPropagation();
              this.isOpen = !this.isOpen;

              if (!this.isOpen) {
                this.searchQuery = '';
                this.filteredTimezones = this.timezones;
                this.selectedIndex = -1;
              }
            },
          },
          m('i.fas.fa-chevron-down')
        ),
        this.isOpen
          ? m(
              '.SearchableSelect-dropdown',
              this.filteredTimezones.length > 0
                ? this.filteredTimezones.map((timezone, index) =>
                    m(
                      '.SearchableSelect-option',
                      {
                        className: [
                          timezone.value === currentValue ? 'active' : '',
                          index === this.selectedIndex ? 'selected' : '',
                        ]
                          .filter(Boolean)
                          .join(' '),
                        onclick: () => {
                          this.selectTimezone(timezone);
                          m.redraw();
                        },
                        onmouseenter: () => {
                          this.selectedIndex = index;
                        },
                      },
                      timezone.label
                    )
                  )
                : m('.SearchableSelect-empty', app.translator.trans('tu-daily-rewards.admin.fields.timezone_no_result'))
            )
          : null,
      ]
    );
  }
}

export default function SetTimeZone({ settingKey = 'tu-daily-rewards.timezone' } = {}) {
  const setting = this.setting(settingKey);
  const currentTimezone = setting() || '';

  return m('.Form-group', [
    m('label', app.translator.trans('tu-daily-rewards.admin.fields.timezone_label')),
    m('.helpText', app.translator.trans('tu-daily-rewards.admin.fields.timezone_help')),
    m(SearchableTimezoneSelect, {
      value: currentTimezone,
      onSelect: (value) => {
        setting(value);
      },
    }),
    m('.helpText', app.translator.trans('tu-daily-rewards.admin.fields.save_hint')),
  ]);
}
