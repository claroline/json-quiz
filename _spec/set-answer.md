---
title: Set answer
layout: spec
---

# Set answer

## Schema

* A set answer:

  * must be an object

  * A set answer data:

    * must be an array

    * Each answer:

      * must be an object

      * must be unique

      * must have a *itemId* property

      * must have a *setId* property

      * The *itemId* property:

        * must be a string

      * The *setId* property:

        * must be a string

## Examples

### Set answer

{% highlight json %}

{
  "type": "application/x.set+json",
  "data": [
    {
      "itemId": "1",
      "setId": "2"
    }
  ]
}


{% endhighlight %}
