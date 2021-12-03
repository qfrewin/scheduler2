<template>
  <div class="home">
    <div class="text">
      <div>
        <h1>Home</h1>
        <p>This website is meant to be a program that can aid in schedule building.
           I have had the opportunity to work the front desk of a gymnastics school
           for quite some time now, and scheduling dozens of classes that need to
           visit different locations throughout the gym can be frustrating.  No class
           can overlap at the same location, which can lead to long nights of planning
           in order for everything to work smoothly.  I was able to create a primitive
           program that has helped tremendously in our scheduling, but it still faces
           several problems.  The biggest issue is that I created the program in Google
           Sheets, which has a limited scope in what I can use it for, but also provides
           the user with many editing tools that can eventually break the program.  My
           goal is to make a functioning website that can replicate what I was able to do
           in google sheets.
        </p>
      </div>
      <div>
        <h2>How it works</h2>
        <p>There are three pages, tables actually, that make the program work.  The first
           page is the "Rotations" page.  The table for this page has a header row where each
           cell is filled with the name of the various locations or stations located throughout
           the gym.  Time increases in incremental values as you go down each row of the table.
           The user is able to input the name of a class into any field in the table, thus ensuring
           that no two classes are accidentally scheduled at the same location at the same time.
        </p>
        <p>The second page is used to assign employees to the classes they teach.  This page differs
           from the previous in that the header row is populated with the names of the several classes
           offered by the gym.  The left side of the table exactly matches the Rotations page.  The user
           is meant to input the name of an employee into the cells of this table.  This
           page is useful for employers because it allows them to easily keep track of which employee
           is teaching which class.  It also makes it easy to determine when we can open new classes.
        </p>
        <p>The first two pages are effectively useless for a normal employee.  The previous pages
           make administrative tasks a breeze, but would be nearly impossible for employees to
           decipher.  Instead, the Schedules page collects all the data from the other pages and
           presents it in a visually appealing and simple manner.  The header of the table is populated
           by the names of the employees while the left side is again populated by time.  A coach can
           find their name on the table and look in their column to see what class they are teaching,
           what time they are teaching it, and the different locations they will need to visit with the
           times they need to be there.  If needed, an administrator could make an edit to this page and
           have it manifest itself correctly on the previous two pages.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>

<style>

.home {
  line-height: 2em;
  text-align: left;
  margin: 0 30px;
  padding: 50px;
  background-color: #daf5f4;
  display: flex;
}

.home .text {
  column-count: 2;
  column-gap: 50px;
}

.home h1, .home h2 {
  text-align: center;
}

.home p {
  margin-bottom: 20px;
}

.home h1, .home h2 {
  margin-bottom: 5px;
}

</style>
