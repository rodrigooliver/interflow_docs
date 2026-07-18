# Public Booking

Let customers book slots through a public schedule link.

1. Edit the schedule and enable **public** (`is_public`)
2. Share:

```
https://<public-domain>/booking/<orgId>/<scheduleId>
```

The booking page is served by the public Interflow site (not the `/app` shell).

Combine with [push reminders](/en/guide/schedule/push-reminders) and [silent flows](/en/guide/schedule/silent-flows).

## Related

- [Schedule overview](/en/guide/schedule/)
