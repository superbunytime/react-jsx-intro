function App() {
    return (
      <div>
        <Person
          name="Jessica"
          age={21}
          hobbies={["counting tiles", "chewing paint chips", "walking ficus"]}
        />
        <Person name="Dr. Mercer" age={69} hobbies={["drift walking", "shooting down hot air balloons", "blahaj"]} />
        <Person
          name="Danny Waterlung"
          age={-1}
          hobbies={["gurgle gurgle", "help me"]}
        />
        <Person
          name="Fly"
          age={1}
          hobbies={["buzzing around", "annoying me", "landing on my arm and then flying away"]}
        />
      </div>
    );
  }